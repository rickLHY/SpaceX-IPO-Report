import type { CSSProperties } from 'react';

/* Data-driven chart primitives for workshop decks. Colours may be hex or CSS vars. */
export type Series = { name:string; color:string; values:number[] };
export type Chart =
 | { type:'line'; series:Series[]; dates?:string[]; xTicks?:{index:number;label:string}[]; baseline?:number; marks?:{index:number;label:string;below?:boolean}[]; hideY?:boolean; unit?:string }
 | { type:'bars'; labels:string[]; series:Series[]; horizontal?:boolean; stacked?:boolean; unit?:string; decimals?:number; signed?:boolean; refLines?:{value:number;label:string;color?:string;oneSided?:boolean}[]; highlight?:number[]; hideValues?:boolean; negColor?:string }
 | { type:'donut'; segments:{label:string;value:number;color:string}[]; center:string; centerSub:string }
 | { type:'seats'; groups:{name:string;color:string}[]; seats:{label:string;group:number;note?:string;photo?:string;pos?:string}[] }
 | { type:'timeline'; start:number; end:number; ticks:{t:number;label:string}[]; lanes?:string[]; events:{t:number;label:string;sub?:string;lane?:number;level?:number;color?:string;anchor?:'start'|'middle'|'end'}[]; ranges?:{from:number;to:number;label:string;lane?:number}[] }
 | { type:'network'; nodes:{id:string;label:string;sub?:string;x:number;y:number;r?:number;color?:string;logo?:string;logoW?:number;logoH?:number;invert?:boolean;photo?:string}[]; edges:{from:string;to:string;label:string;curve?:number;dashed?:boolean;arrow?:boolean}[] }
 | { type:'flow'; steps:{label:string;sub:string}[]; caption?:string }
 | { type:'dotplot'; columns:{label:string;color:string}[]; rows:{label:string;col:number;note?:string}[]; compact?:boolean };

const H=500;
const col=(c:string):CSSProperties=>({fill:c});
function nice(lo:number,hi:number,count=5){const span=hi-lo||1;const raw=span/count;const mag=10**Math.floor(Math.log10(raw));const step=[1,2,2.5,5,10].map(m=>m*mag).find(s=>s>=raw)!;const a=Math.floor(lo/step)*step,b=Math.ceil(hi/step)*step;const out:number[]=[];for(let v=a;v<=b+step/1e6;v+=step)out.push(+v.toFixed(10));return out;}
export function fmt(v:number,d=0,unit='',signed=false){const s=Math.abs(v).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});const sign=v<0?'−':signed&&v>0?'+':'';return sign+s+unit;}
const textW=(s:string,size:number)=>[...s].reduce((w,ch)=>w+(/[⺀-￿]/.test(ch)?size:size*.58),0);

export function ChartView({chart,width}:{chart:Chart;width:number}){
 switch(chart.type){
  case 'line':return <Line c={chart} W={width}/>;
  case 'bars':return <Bars c={chart} W={width}/>;
  case 'donut':return <Donut c={chart}/>;
  case 'seats':return <Seats c={chart}/>;
  case 'timeline':return <Timeline c={chart} W={width}/>;
  case 'network':return <Network c={chart} W={width}/>;
  case 'flow':return <Flow c={chart}/>;
  case 'dotplot':return <DotPlot c={chart}/>;
 }
}
function Legend({series}:{series:{name:string;color:string}[]}){if(series.length<2)return null;return <div className="ch-legend">{series.map(s=><span key={s.name}><i style={{background:s.color}}/>{s.name}</span>)}</div>;}

function Line({c,W}:{c:Extract<Chart,{type:'line'}>;W:number}){
 const all=c.series.flatMap(s=>s.values).concat(c.baseline??[]);const ticks=nice(Math.min(...all),Math.max(...all),4);const lo=ticks[0],hi=ticks[ticks.length-1];
 const L=c.hideY?20:70,R=24,T=40,B=50;const n=Math.max(...c.series.map(s=>s.values.length));
 const x=(i:number)=>L+i/(n-1||1)*(W-L-R);const y=(v:number)=>T+(hi-v)/(hi-lo||1)*(H-T-B);
 const xt=c.xTicks??(c.dates?[0,Math.floor((n-1)/2),n-1].map(i=>({index:i,label:c.dates![i]})):[]);
 return <div className="ch-box"><svg viewBox={`0 0 ${W} ${H}`} role="img">
  {!c.hideY&&ticks.map(v=><g key={v}><line className="ch-grid" x1={L} x2={W-R} y1={y(v)} y2={y(v)}/><text className="ch-axis" x={L-14} y={y(v)+7} textAnchor="end">{fmt(v,0,c.unit??'')}</text></g>)}
  {c.baseline!=null&&<g><line x1={L} x2={W-R} y1={y(c.baseline)} y2={y(c.baseline)} className="ch-base"/><text className="ch-axis" x={L+8} y={y(c.baseline)-10}>基準 {c.baseline}</text></g>}
  {c.series.map(s=><polyline key={s.name} points={s.values.map((v,i)=>`${x(i)},${y(v)}`).join(' ')} fill="none" stroke={s.color} strokeWidth="3.5" strokeLinejoin="round"/>)}
  {c.series.map(s=><circle key={s.name} cx={x(s.values.length-1)} cy={y(s.values[s.values.length-1])} r="6" style={col(s.color)}/>)}
  {c.marks?.map((m,k)=>{const v=c.series[0].values[m.index];const px=x(m.index),py=y(v);const ty=m.below?py+46:py-30;const anchor=px<L+160?'start':px>W-R-160?'end':'middle';return <g key={k}><line x1={px} x2={px} y1={py} y2={m.below?ty-22:ty+10} className="ch-mark"/><circle cx={px} cy={py} r="7" className="ch-markdot"/><text className="ch-note" x={px} y={ty} textAnchor={anchor}>{m.label}</text></g>;})}
  {xt.map((t,j)=><text key={j} className="ch-axis" x={x(t.index)} y={H-12} textAnchor={t.index===0?'start':t.index===n-1?'end':'middle'}>{t.label}</text>)}
 </svg><Legend series={c.series}/></div>;
}

function Bars({c,W}:{c:Extract<Chart,{type:'bars'}>;W:number}){
 const d=c.decimals??0,u=c.unit??'';const ns=c.series.length;
 const totals=c.labels.map((_,i)=>c.series.reduce((a,s)=>a+Math.max(0,s.values[i]),0));
 const vals=c.stacked?totals:c.series.flatMap(s=>s.values);const refs=c.refLines?.flatMap(r=>r.oneSided?[r.value]:[r.value,-r.value])??[];
 const ticks=nice(Math.min(0,...vals,...refs),Math.max(0,...vals,...refs),4);const lo=ticks[0],hi=ticks[ticks.length-1];
 const label=(v:number)=>fmt(v,d,u,c.signed);
 if(c.horizontal){
  const L=Math.min(420,Math.max(...c.labels.map(l=>textW(l,24)))+44),R=110,T=10,B=44;const band=(H-T-B)/c.labels.length;const inner=c.stacked?band*.56:band*.72/ns;
  const x=(v:number)=>L+(v-lo)/(hi-lo||1)*(W-L-R);
  return <div className="ch-box"><svg viewBox={`0 0 ${W} ${H}`} role="img">
   {ticks.map(v=><g key={v}><line className={v===0?'ch-zero':'ch-grid'} x1={x(v)} x2={x(v)} y1={T} y2={H-B}/><text className="ch-axis" x={x(v)} y={H-12} textAnchor="middle">{fmt(v,ticks.some(t=>t%1)?1:0)}</text></g>)}
   {c.labels.map((l,i)=>{const y0=T+i*band;const hl=c.highlight?.includes(i);let acc=0;return <g key={l}>
    <text className={'ch-cat'+(hl?' hl':'')} x={L-18} y={y0+band/2+8} textAnchor="end">{l}</text>
    {c.series.map((s,k)=>{const v=s.values[i];const by=c.stacked?y0+(band-inner)/2:y0+band*.14+k*inner;const a=c.stacked?acc:0;if(c.stacked)acc+=v;const x1=x(Math.min(a,a+v)),x2=x(Math.max(a,a+v));
     return <g key={s.name}><rect x={x1} y={by} width={Math.max(1,x2-x1)} height={inner-4} style={col(v<0&&c.negColor?c.negColor:s.color)} rx="2"/>{!c.hideValues&&!c.stacked&&<text className="ch-val" x={v<0?x(0)+12:x2+10} y={by+inner/2+6} textAnchor="start">{label(v)}</text>}</g>;})}
    {c.stacked&&!c.hideValues&&<text className="ch-val" x={x(totals[i])+10} y={y0+band/2+8}>{label(totals[i])}</text>}
   </g>;})}
  </svg><Legend series={c.series}/></div>;
 }
 const L=86,R=20,T=30,B=58;const band=(W-L-R)/c.labels.length;const inner=c.stacked?band*.46:band*.7/ns;
 const y=(v:number)=>T+(hi-v)/(hi-lo||1)*(H-T-B);
 return <div className="ch-box"><svg viewBox={`0 0 ${W} ${H}`} role="img">
  {ticks.map(v=><g key={v}><line className={v===0?'ch-zero':'ch-grid'} x1={L} x2={W-R} y1={y(v)} y2={y(v)}/><text className="ch-axis" x={L-14} y={y(v)+7} textAnchor="end">{fmt(v,ticks.some(t=>t%1)?1:0)}</text></g>)}
  {c.refLines?.map((r,k)=>(r.oneSided?[r.value]:[r.value,-r.value]).map(v=><g key={k+'_'+v}><line x1={L} x2={W-R} y1={y(v)} y2={y(v)} className="ch-ref" style={{stroke:r.color}}/>{v>0&&<text className="ch-note" x={W-R} y={y(v)-10} textAnchor="end" style={{fill:r.color}}>{r.label}</text>}</g>))}
  {c.labels.map((l,i)=>{const x0=L+i*band;let acc=0;const hl=c.highlight?.includes(i);return <g key={l}>
   {c.series.map((s,k)=>{const v=s.values[i];const bx=c.stacked?x0+(band-inner)/2:x0+band*.15+k*inner;const a=c.stacked?acc:0;if(c.stacked)acc+=v;const y1=y(Math.max(a,a+v)),y2=y(Math.min(a,a+v));
    return <g key={s.name}><rect x={bx+2} y={y1} width={inner-4} height={Math.max(1,y2-y1)} style={col(v<0&&c.negColor?c.negColor:s.color)} rx="2"/>
     {!c.hideValues&&!c.stacked&&v!==0&&<text className="ch-val" x={bx+inner/2} y={v<0?y2+26:y1-10} textAnchor="middle">{label(v)}</text>}
     {c.stacked&&!c.hideValues&&(y2-y1)>34&&<text className="ch-val inbar" x={bx+inner/2} y={(y1+y2)/2+8} textAnchor="middle">{label(v)}</text>}</g>;})}
   {c.stacked&&!c.hideValues&&<text className="ch-val" x={x0+band/2} y={y(totals[i])-12} textAnchor="middle">{label(totals[i])}</text>}
   <text className={'ch-cat'+(hl?' hl':'')} x={x0+band/2} y={H-18} textAnchor="middle">{l}</text></g>;})}
 </svg><Legend series={c.series}/></div>;
}

function Donut({c}:{c:Extract<Chart,{type:'donut'}>}){
 const total=c.segments.reduce((a,s)=>a+s.value,0);const R=190,r=128,cx=230,cy=230;let a0=-Math.PI/2;
 const arc=(a1:number,a2:number)=>{const big=a2-a1>Math.PI?1:0;const p=(rad:number,a:number)=>`${cx+rad*Math.cos(a)},${cy+rad*Math.sin(a)}`;return `M${p(R,a1)} A${R},${R} 0 ${big} 1 ${p(R,a2)} L${p(r,a2)} A${r},${r} 0 ${big} 0 ${p(r,a1)}Z`;};
 return <div className="ch-donut"><svg viewBox="0 0 460 460" role="img">{c.segments.map(s=>{const a1=a0,a2=a0+s.value/total*Math.PI*2;a0=a2;return <path key={s.label} d={arc(a1,a2-0.004)} style={col(s.color)}/>;})}
  <text x={cx} y={cy+12} textAnchor="middle" className="ch-donut-c">{c.center}</text><text x={cx} y={cy+56} textAnchor="middle" className="ch-donut-s">{c.centerSub}</text></svg>
  <div className="ch-donut-legend">{c.segments.map(s=><div key={s.label}><i style={{background:s.color}}/><strong>{fmt(s.value,1,'%')}</strong><span>{s.label}</span></div>)}</div></div>;
}

function Seats({c}:{c:Extract<Chart,{type:'seats'}>}){
 return <div className="ch-seats"><div className="ch-seat-row">{c.seats.map(s=><div key={s.label} className="ch-seat">{s.photo?<img className="ch-seat-photo" src={`${import.meta.env.BASE_URL}images/people/${s.photo}`} alt={s.label} style={{borderColor:c.groups[s.group].color,objectPosition:s.pos??'50% 25%'}}/>:<b className="ch-seat-init" style={{borderColor:c.groups[s.group].color}}>{s.label.split(' ').filter(w=>/^[A-Z]/.test(w)&&!w.endsWith('.')).map(w=>w[0]).join('')}</b>}<strong>{s.label}</strong><span>{c.groups[s.group].name}</span>{s.note&&<em>{s.note}</em>}</div>)}</div>
  <div className="ch-seat-bar">{c.groups.map((g,k)=>{const n=c.seats.filter(s=>s.group===k).length;return <div key={g.name} style={{flex:n,background:g.color}}><span>{g.name} {n}</span></div>;})}</div></div>;
}

function Timeline({c,W}:{c:Extract<Chart,{type:'timeline'}>;W:number}){
 const lanes=c.lanes??[''];const L=c.lanes?230:40,R=40,T=c.lanes?64:20,B=56;const laneH=(H-T-B)/lanes.length;
 const x=(t:number)=>L+(t-c.start)/(c.end-c.start)*(W-L-R);const ly=(k:number)=>T+laneH*(k+.5);
 return <div className="ch-box"><svg viewBox={`0 0 ${W} ${H}`} role="img">
  {c.ticks.map(t=><g key={t.t}><line className="ch-grid" x1={x(t.t)} x2={x(t.t)} y1={T} y2={H-B}/><text className="ch-axis" x={x(t.t)} y={H-16} textAnchor="middle">{t.label}</text></g>)}
  {lanes.map((l,k)=><g key={k}><line className="ch-lane" x1={L} x2={W-R} y1={ly(k)} y2={ly(k)}/>{l&&<text className="ch-cat" x={L-20} y={ly(k)+8} textAnchor="end">{l}</text>}</g>)}
  {c.ranges?.map((r,k)=>{const yy=ly(r.lane??0);return <g key={k}><rect x={x(r.from)} y={yy-7} width={x(r.to)-x(r.from)} height="14" rx="7" className="ch-range"/><text className="ch-sub" x={(x(r.from)+x(r.to))/2} y={yy+40} textAnchor="middle">{r.label}</text></g>;})}
  {c.events.map((e,k)=>{const yy=ly(e.lane??0);const lv=e.level??1;const step=c.lanes?30:58;const ty=yy-lv*step-(lv>0?12:-30);const px=x(e.t);const anchor=e.anchor??(px<L+120?'start':px>W-R-120?'end':'middle');
   return <g key={k}><line x1={px} x2={px} y1={yy} y2={lv>0?ty+(e.sub?36:8):ty-28} className="ch-mark"/><circle cx={px} cy={yy} r={c.lanes?8:10} style={col(e.color??'var(--c-primary)')}/>
    <text className="ch-note strong" x={px} y={ty} textAnchor={anchor}>{e.label}</text>{e.sub&&<text className="ch-sub" x={px} y={ty+28} textAnchor={anchor}>{e.sub}</text>}</g>;})}
 </svg></div>;
}

function Network({c,W}:{c:Extract<Chart,{type:'network'}>;W:number}){
 const P=(n:{x:number;y:number})=>({x:n.x*W,y:n.y*H});const by=Object.fromEntries(c.nodes.map(n=>[n.id,n]));
 return <div className="ch-box"><svg viewBox={`0 0 ${W} ${H}`} role="img"><defs><marker id="ch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" fill="#c4c8ce"/></marker></defs>
  {c.edges.map((e,k)=>{const a=P(by[e.from]),b=P(by[e.to]);const ra=by[e.from].r??60,rb=by[e.to].r??60;const dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy);const ux=dx/len,uy=dy/len;const cv=(e.curve??0)*len;
   const sx=a.x+ux*ra,sy=a.y+uy*ra,ex=b.x-ux*(rb+6),ey=b.y-uy*(rb+6);const mx=(sx+ex)/2-uy*cv,my=(sy+ey)/2+ux*cv;const lx=(sx+2*mx+ex)/4,ly=(sy+2*my+ey)/4;
   return <g key={k}><path d={`M${sx},${sy} Q${mx},${my} ${ex},${ey}`} className={'ch-edge'+(e.dashed?' dashed':'')} markerEnd={e.arrow?'url(#ch-arrow)':undefined}/><text className="ch-edge-label" x={lx} y={ly+8} textAnchor="middle">{e.label}</text></g>;})}
  {c.nodes.map(n=>{const p=P(n),r=n.r??60;const src=(f:string)=>`${import.meta.env.BASE_URL}images/${f}`;
   if(n.photo)return <g key={n.id}><clipPath id={`ch-clip-${n.id}`}><circle cx={p.x} cy={p.y} r={r}/></clipPath><image href={src(n.photo)} x={p.x-r} y={p.y-r} width={r*2} height={r*2} preserveAspectRatio="xMidYMin slice" clipPath={`url(#ch-clip-${n.id})`} className="ch-node-photo"/><circle cx={p.x} cy={p.y} r={r} fill="none" strokeWidth="2.5" style={{stroke:n.color??'#fff'}}/><text className="ch-node-label" x={p.x+r+22} y={p.y-2}>{n.label}</text>{n.sub&&<text className="ch-node-sub" x={p.x+r+22} y={p.y+26}>{n.sub}</text>}</g>;
   if(n.logo){const lw=n.logoW??r*1.2,lh=n.logoH??r*.8;return <g key={n.id}><circle cx={p.x} cy={p.y} r={r} className="ch-node" style={{stroke:n.color??'#fff'}}/><image href={src(n.logo)} x={p.x-lw/2} y={p.y-lh/2-12} width={lw} height={lh} preserveAspectRatio="xMidYMid meet" style={n.invert?{filter:'invert(1)'}:undefined}/>{n.sub&&<text className="ch-node-sub" x={p.x} y={p.y+lh/2+18} textAnchor="middle">{n.sub}</text>}</g>;}
   return <g key={n.id}><circle cx={p.x} cy={p.y} r={r} className="ch-node" style={{stroke:n.color??'#fff'}}/><text className="ch-node-label" x={p.x} y={p.y+(n.sub?-2:9)} textAnchor="middle">{n.label}</text>{n.sub&&<text className="ch-node-sub" x={p.x} y={p.y+28} textAnchor="middle">{n.sub}</text>}</g>;})}
 </svg></div>;
}

function Flow({c}:{c:Extract<Chart,{type:'flow'}>}){
 return <div className="ch-flow"><div className="ch-flow-row">{c.steps.map((s,k)=><div key={s.label} className="ch-flow-step" style={{opacity:1-k*.16}}><span>{String(k+1).padStart(2,'0')}</span><strong>{s.label}</strong><p>{s.sub}</p></div>)}</div>{c.caption&&<p className="ch-flow-cap">{c.caption}</p>}</div>;
}

function DotPlot({c}:{c:Extract<Chart,{type:'dotplot'}>}){
 const tpl=`minmax(250px,1.1fr) repeat(${c.columns.length},minmax(110px,.55fr)) minmax(300px,1.7fr)`;
 return <div className={'ch-dot'+(c.compact?' compact':'')}><div className="ch-dot-row head" style={{gridTemplateColumns:tpl}}><span/>{c.columns.map(h=><span key={h.label} style={{color:h.color}}>{h.label}</span>)}<span>SpaceX 證據</span></div>
  {c.rows.map(r=><div key={r.label} className="ch-dot-row" style={{gridTemplateColumns:tpl}}><strong>{r.label}</strong>{c.columns.map((h,k)=><span key={k} className="ch-dot-cell">{k===r.col?<i style={{background:h.color}}/>:<b/>}</span>)}<em>{r.note}</em></div>)}</div>;
}
