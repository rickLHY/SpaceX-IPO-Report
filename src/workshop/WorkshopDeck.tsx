import type { ReactNode } from 'react';
import { defineDeck, fadeTransition, type SlideRenderProps } from '../presentation';
import { ChartView, type Chart } from './charts';
import './fonts.css';
import './theme.css';
import './layouts.css';
import './charts.css';
export type Item = { label:string; value?:string; body:string };
export type Page = { id:string; title:string; chapter:string; kind?:'cover'|'cards'|'table'|'chart'|'statement'|'paper'|'list'|'key'|'launch'|'launch-cover'; subtitle?:string; items?:Item[]; columns?:string[]; rows?:string[][]; dense?:boolean; compact?:boolean; statement?:string; points?:string[]; chart?:Chart; aside?:string; paper?:{cite:string;journal:string;sample:string;finding:string;prediction:string;photos?:{src:string;name:string}[]}; verdicts?:{name:string;label:string}[]; series?:{name:string;color:string;values:number[]}[]; dates?:string[]; baseline?:number; source?:string; notes?:string; };
const stepped=(p:Page)=>p.kind==='cards'||p.kind==='list'||!p.kind;
const verdict=(v:string)=>/^(不適用|無法)/.test(v)?'na':/^符合/.test(v)?'ok':/^(部分符合|方向一致)/.test(v)?'part':/^(不符合|相反)/.test(v)?'no':/^(尚不能判斷|待觀察)/.test(v)?'open':'';
function reveal(r:SlideRenderProps,j:number){return {style:{opacity:r.step>=j?1:0,transform:r.step>=j?'none':'translateY(12px)',transition:r.still?'none':'opacity .35s,transform .35s'},'aria-hidden':r.step<j};}
export function createWorkshopDeck(id:string,title:string,pages:Page[], custom?:{render:(p:Page,r:SlideRenderProps)=>ReactNode;steps:(p:Page)=>number}){
 function Body({p,r}:{p:Page;r:SlideRenderProps}){
  if(p.kind==='statement')return <div className="wk-statement-wrap"><p className="wk-statement-big">{p.statement}</p>{p.aside&&<p className="wk-statement-aside">{p.aside}</p>}</div>;
  if(p.kind==='paper'&&p.paper){const q=p.paper;return <div className="wk-paper"><div className="wk-paper-main">{p.chart?<ChartView chart={p.chart} width={900}/>:<p className="wk-paper-finding">{q.finding}</p>}</div><aside className="wk-paper-side"><div className="wk-paper-meta">{q.photos&&<div className="wk-photos">{q.photos.map(ph=><figure key={ph.src}><img src={`${import.meta.env.BASE_URL}images/authors/${ph.src}`} alt={ph.name}/><figcaption>{ph.name}</figcaption></figure>)}</div>}<strong>{q.cite}</strong><span>{q.journal}</span><span>{q.sample}</span></div>{p.chart&&<p className="wk-paper-note">{q.finding}</p>}<div className="wk-predict"><span>對 SpaceX 的預測</span><p>{q.prediction}</p></div></aside></div>;}
  if(p.kind==='chart'){const chart:Chart=p.chart??{type:'line',series:p.series??[],dates:p.dates,baseline:p.baseline};
   return p.aside?<div className="wk-split"><ChartView chart={chart} width={900}/><aside className="wk-aside">{p.verdicts&&<div className="wk-verdicts">{p.verdicts.map(v=><span key={v.name} className={'wk-verdict '+verdict(v.label)}>{v.name}・{v.label}</span>)}</div>}{p.aside.split('\n').map((t,k)=><p key={k}>{t}</p>)}</aside></div>:<div className="wk-full"><ChartView chart={chart} width={1408}/></div>;}
  if(p.kind==='table')return <table className={'wk-table'+(p.dense?' dense':'')+(p.compact?' compact':'')}><thead><tr>{p.columns?.map(c=><th key={c}>{c}</th>)}</tr></thead><tbody>{p.rows?.map((row,i)=><tr key={i}>{row.map((v,j)=>{const k=verdict(v);return <td key={j}>{k?<span className={'wk-verdict '+k}>{v}</span>:v}</td>;})}</tr>)}</tbody></table>;
  if(p.kind==='list')return <ol className={'wk-list'+(p.dense?' dense':'')}>{p.items?.map((item,j)=><li key={j} {...reveal(r,j)}><span className="wk-list-label">{item.label}</span><div><strong>{item.value}</strong><p>{item.body}</p></div></li>)}</ol>;
  if(p.kind==='key')return <div className="wk-key"><p className="wk-statement">{p.statement}</p><ul>{p.points?.map((pt,j)=><li key={j}>{pt}</li>)}</ul></div>;
  const n=Math.min(p.items?.length||1,4);
  return <div className={'wk-cards'+(n===4?' four':'')} style={{gridTemplateColumns:`repeat(${n},1fr)`}}>{p.items?.map((item,j)=><article key={j} className="wk-card" {...reveal(r,j)}><span>{item.label}</span>{item.value&&<strong>{item.value}</strong>}<p>{item.body}</p></article>)}</div>;
 }
 function Surface(r:SlideRenderProps){const p=pages.find(p=>p.id===r.slide.id)!;const i=pages.indexOf(p);const cover=p.kind==='cover';
 return <section className={'stage '+(r.still?'still':'')} lang="zh-Hant" data-authored-slide={p.id} data-slide={p.id}>
 {p.kind?.startsWith('launch')?custom?.render(p,r):cover?<div className="workshop-cover"><div className="cover-space" aria-hidden="true"><div className="cover-arc"/></div><div className="cover-title"><div><h1>{p.title}</h1><p className="wk-subtitle">{p.subtitle}</p></div></div><div className="cover-brand">{p.chapter}</div></div>:<><header className="slide-header"><div className="eyebrow"><span>{p.chapter}</span></div><h1>{p.title}</h1></header><main className={'scene-body wk-body'+(p.kind==='key'?' is-key':'')+(p.kind==='statement'?' is-statement':'')}>
 {p.subtitle&&<p className="wk-intro">{p.subtitle}</p>}
 {custom?.render(p,r)??<Body p={p} r={r}/>}
 {p.source&&<p className="wk-source">{p.source}</p>}</main><footer className="slide-footer"><span>{title}</span><span>{i+1}<i>/</i>{pages.length}</span></footer></>}
 </section>;}
 return defineDeck({id,title,handout:{title:'講者筆記與來源',href:new URL('../../SPEAKER_NOTES.md',import.meta.url).href},version:6,description:'Backend Workshop format',size:{width:1600,height:900},slides:pages.map(p=>({id:p.id,title:p.title,steps:p.kind?.startsWith('launch')?(custom?.steps(p)??1):stepped(p)?Math.max(1,p.items?.length||1):1})),previews:pages.slice(0,6).map(p=>({slideId:p.id})),chapters:pages.filter((p,i)=>i===0||p.chapter!==pages[i-1].chapter).map(p=>({id:p.id,title:p.chapter,slideId:p.id})),RenderSlide:Surface,transition:fadeTransition(.3),freezeEntranceOnNavigation:true});
}
