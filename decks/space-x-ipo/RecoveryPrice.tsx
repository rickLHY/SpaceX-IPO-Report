import { useId } from 'react';
import type { SlideRenderProps } from '../../src/presentation';
import type { Page } from '../../src/workshop/WorkshopDeck';
import prices from './recovery-prices.json';
import './recovery-price.css';

const events=[
  {date:'2024-10-13',label:'首次塔架接住推進器',sub:'Flight 5 · 2024/10',labelY:116,color:'#ffffff'},
  {date:'2025-01-16',label:'第二、三次接住推進器',sub:'2025/1、2025/3',labelY:400,color:'#ffffff'},
  {date:'2026-06-12',label:'SpaceX 掛牌',sub:'2026/6/12',labelY:100,color:'#5aa9ff'},
  {date:'2026-09-28',label:'Starship 首次入軌',sub:'Flight 14 · 9/28，未回收',labelY:440,color:'#ffffff'},
  {date:'2026-11-13',label:'推進器未能回收',sub:'11/13，墜入墨西哥灣',labelY:350,color:'#ff6b5e'},
  {date:'2026-11-14',label:'上節首次被塔架接住',sub:'Flight 15 · 11/14',labelY:168,color:'#f0b44c'},
];
export function RecoveryPrice({r}:{page:Page;r:SlideRenderProps}) {
  const clipId=useId().replace(/:/g,'');
  const W=1408,H=510,L=55,R=55,axisY=280;
  const start=Date.parse('2024-09-01'),end=Date.parse('2027-01-15');
  const x=(date:string)=>L+(Date.parse(date)-start)/(end-start)*(W-L-R);
  const y=(v:number)=>220+(225-v)/125*110;
  const points=prices.close.map((v,i)=>x(prices.dates[i])+','+y(v)).join(' ');
  const animate=r.active&&!r.reducedMotion&&r.mode!=='preview';
  return <div className="recovery-combined">
    <svg viewBox={'0 0 '+W+' '+H} role="img" aria-label="Starship 事件時間線與 SPCX 收盤價共用日期軸，股價以淡色虛線呈現">
      <defs><clipPath id={clipId}><rect className={animate?'stock-reveal':undefined} x={x(prices.dates[0])} y="0" width={x(prices.dates.at(-1)!)-x(prices.dates[0])} height={H}/></clipPath></defs>
      <line x1={L} x2={W-R} y1={axisY} y2={axisY} className="recovery-axis"/>
      {['2025-01-01','2026-01-01','2027-01-01'].map(d=><g key={d}><line x1={x(d)} x2={x(d)} y1="55" y2="465" className="recovery-yearline"/><text x={x(d)} y="495" textAnchor="middle" className="recovery-year">{d.slice(0,4)}</text></g>)}
      <g clipPath={'url(#'+clipId+')'}><polyline points={points} fill="none" stroke="#83c0ff" strokeOpacity=".38" strokeWidth="2" strokeDasharray="5 7" strokeLinejoin="round"/></g>
      <line x1={L} x2={L+46} y1="28" y2="28" stroke="#83c0ff" strokeOpacity=".5" strokeWidth="2" strokeDasharray="5 7"/>
      <text x={L+60} y="35" className="recovery-legend">SPCX 股價（6/12–11/13，USD；100–225）</text>
      {events.map(e=>{const px=x(e.date),anchor=px>W-350?'end':'middle';const above=e.labelY<axisY;return <g key={e.label}>
        <line x1={px} x2={px} y1={axisY} y2={above?e.labelY+43:e.labelY-21} className="recovery-leader"/>
        <circle cx={px} cy={axisY} r="7" fill={e.color}/>
        <text x={px} y={e.labelY} textAnchor={anchor} className="recovery-event">{e.label}</text>
        <text x={px} y={e.labelY+30} textAnchor={anchor} className="recovery-event-sub">{e.sub}</text>
      </g>;})}
    </svg>
    <p className="recovery-caption">11/14 上節首次從軌道被接住，推進器未回收。股價截止 11/13，尚未涵蓋回收消息後的反應。</p>
    <p className="recovery-price-source">股價：S08 Yahoo Finance 每日收盤價；日期軸與事件共用，上市前無公開股價。</p>
  </div>;
}
