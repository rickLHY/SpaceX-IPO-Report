import type { Page } from '../../src/workshop/WorkshopDeck';
import './tesla-exposure.css';

const filing = 'https://www.sec.gov/Archives/edgar/data/1318605/000162828026066775/tsla-20260930.htm';
const amount = (value: number) => value.toLocaleString('en-US');

export function TeslaExposure({ page }: { page: Page }) {
  const chart = page.chart;
  if (chart?.type !== 'bars') return null;
  const statements = page.aside!.split('\n');
  return <div className="tesla-exposure">
    <div className="exposure-ratios">
      <p className="exposure-unit">USD millions · 每組全長＝Tesla 比較基準的 100%</p>
      {chart.labels.map((label, i) => {
        const value = chart.series[0].values[i];
        const total = chart.series.reduce((sum, series) => sum + series.values[i], 0);
        const percent = value / total * 100;
        return <figure key={label}>
          <figcaption>{label}</figcaption>
          <div className="exposure-values"><strong>{percent.toFixed(2)}%</strong><span>{amount(value)} ／ {amount(total)}</span></div>
          <div className="exposure-track" role="img" aria-label={`${label}：${amount(value)} ÷ ${amount(total)} = ${percent.toFixed(2)}%`}>
            <span style={{ width: `${percent}%` }}/>
          </div>
          <div className="exposure-scale"><span>0%</span><span>100%</span></div>
          <p className="exposure-basis">{i === 0 ? '投資公允價值／總資產 · 2026/9/30' : 'Megapack 營收／總營收 · 2026 年前三季'}</p>
        </figure>;
      })}
    </div>
    <aside>
      <p className="exposure-metric">{statements[0]}</p>
      <p className="exposure-metric">{statements[1]}</p>
      <p className="exposure-conclusion">{statements[2]}</p>
      {page.points!.map(point => <p className="exposure-caution" key={point}>{point}</p>)}
      <a href={filing} target="_blank" rel="noreferrer">SEC 原始文件 ↗</a>
    </aside>
  </div>;
}
