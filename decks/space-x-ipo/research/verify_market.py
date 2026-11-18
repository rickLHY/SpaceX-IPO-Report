"""Reproduce the three market slides from the frozen Yahoo responses (stdlib only).
Run: python decks/space-x-ipo/research/verify_market.py
No network or dependencies; outputs the audit result to stdout.
"""
import datetime as dt
import json
import hashlib
import math
from pathlib import Path
import statistics as st

root = Path(__file__).parent
snapshot = json.loads((root / 'market-snapshot.json').read_text())
prices = {}
adjustment_differences = {}
for ticker, item in snapshot['raw'].items():
    raw_bytes = item['raw_response_utf8'].encode('utf-8')
    assert hashlib.sha256(raw_bytes).hexdigest() == item['response_sha256']
    response = json.loads(raw_bytes)['chart']['result'][0]
    dates = [dt.datetime.fromtimestamp(t, dt.timezone.utc).date().isoformat() for t in response['timestamp']]
    close = response['indicators']['quote'][0]['close']
    adjusted = response['indicators']['adjclose'][0]['adjclose']
    assert len(dates) == len(set(dates)) == len(close) == len(adjusted) == 108
    assert dates == sorted(dates)
    assert all(v is not None and math.isfinite(v) and v > 0 for v in close + adjusted)
    prices[ticker] = dict(zip(dates, close))
    adjustment_differences[ticker] = max(abs(a-b) for a, b in zip(close, adjusted))
assert all(list(p) == dates for p in prices.values())
assert dates[0] == '2026-06-12' and dates[-1] == '2026-11-13'
returns = {t: {dates[i]: p[dates[i]] / p[dates[i-1]] - 1 for i in range(1, len(dates))} for t, p in prices.items()}

def fit(x, y):
    beta = st.covariance(x, y) / st.variance(x)
    alpha = st.mean(y) - beta * st.mean(x)
    residuals = [v-alpha-beta*m for v, m in zip(y, x)]
    return alpha, beta, residuals

sample = [d for d in dates if d >= '2026-06-22']
market = [returns['%5EGSPC'][d] for d in sample]
stock = {t: [returns[t][d] for d in sample] for t in ['SPCX', 'TSLA']}
residuals = {t: fit(market, y)[2] for t, y in stock.items()}
r_s, r_t = (st.correlation(stock[t], market) for t in ['SPCX', 'TSLA'])
r_st = st.correlation(stock['SPCX'], stock['TSLA'])
r_res = st.correlation(residuals['SPCX'], residuals['TSLA'])
# Independent partial-correlation identity checks the OLS residual calculation.
assert abs(r_res - (r_st-r_s*r_t)/math.sqrt((1-r_s*r_s)*(1-r_t*r_t))) < 1e-12
estimation = [d for d in dates if '2026-06-22' <= d <= '2026-10-13']
event_dates = [d for d in dates if '2026-10-19' <= d <= '2026-10-23']
assert len(sample) == 103 and len(estimation) == 80 and len(event_dates) == 5
models = {}
for ticker in stock:
    alpha, beta, residual = fit([returns['%5EGSPC'][d] for d in estimation], [returns[ticker][d] for d in estimation])
    models[ticker] = {'alpha_daily': alpha, 'beta': beta,
        'residual_sigma_df_n_minus_2': math.sqrt(sum(e*e for e in residual)/(len(estimation)-2)),
        'abnormal_returns_pct': [100*(returns[ticker][d]-alpha-beta*returns['%5EGSPC'][d]) for d in event_dates]}
report = {'retrieved_at_utc': snapshot['retrieved_at_utc'], 'price_period': [dates[0], dates[-1]], 'common_price_dates': len(dates),
    'missing_or_duplicate_common_observations': 0, 'close_vs_adjclose_max_difference': adjustment_differences,
    'cumulative_returns_pct': {t:100*(list(p.values())[-1]/list(p.values())[0]-1) for t,p in prices.items()},
    'correlation_return_period': [sample[0], sample[-1]], 'common_returns': len(sample),
    'correlations': {'TSLA_market':r_t, 'SPCX_market':r_s, 'SPCX_TSLA':r_st, 'OLS_residual_correlation':r_res},
    'estimation_period': [estimation[0], estimation[-1]], 'estimation_returns':len(estimation), 'event_dates':event_dates,
    'models':models, 'formal_significance_test_performed':False}
pages = json.loads((root.parent/'content.json').read_text())
by_id = {p['id']:p for p in pages}
for series, ticker in zip(by_id['tesla-prices']['chart']['series'], prices):
    values = list(prices[ticker].values())
    assert len(series['values']) == len(values)
    assert max(abs(a-100*b/values[0]) for a,b in zip(series['values'],values)) < 1e-10
assert [round(v,3) for v in (r_t,r_s,r_st,r_res)] == by_id['tesla-comove']['chart']['series'][0]['values']
for series,ticker in zip(by_id['event']['chart']['series'],stock):
    assert series['values'] == [round(v,2) for v in models[ticker]['abnormal_returns_pct']]
print(json.dumps(report,ensure_ascii=False,indent=2))
