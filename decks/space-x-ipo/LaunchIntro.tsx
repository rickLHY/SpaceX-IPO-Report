import type { CSSProperties } from 'react';
import type { SlideRenderProps } from '../../src/presentation';
import './launch.css';
const photo=(name:string)=>`${import.meta.env.BASE_URL}images/intro/${name}.jpg`;
export const milestones = [
 {year:'1969',label:'THE STATE ERA',title:'太空，是國家的事',body:'阿波羅 11 號登月後三十多年，太空探索幾乎都由 NASA 等國家機構主導，產業模式少有改變。',image:'apollo',position:'50% 30%',caption:'Buzz Aldrin 於月球表面，1969年7月20日 · NASA',source:'背景：NASA AS11-40-5903'},
 {year:'2002',label:'THE BEGINNING',title:'民間公司挑戰國家主導的太空產業',body:'Elon Musk 成立 SpaceX，從降低進入太空的成本開始，日後成為最具指標性的民間太空公司之一。',image:'musk',position:'55% 24%',caption:'Elon Musk 於 SpaceX 總部，2019 · NASA/Aubrey Gemignani',source:'歷史：NASA CRS-7 Press Kit · 背景為2019年人物照'},
 {year:'2008',label:'REACHING ORBIT',title:'Falcon 1，成功進入軌道',body:'首枚由民間開發、成功進入地球軌道的液體燃料火箭，證明了技術可行性。',image:'spacex-hq',position:'65% 30%',caption:'Musk 於 SpaceX 總部簽名，2019 · NASA/Aubrey Gemignani',source:'歷史：NASA CRS-7 Press Kit · 背景為公司情境配圖，非Falcon 1任務照'},
 {year:'2012',label:'WORKING WITH NASA',title:'Dragon 抵達國際太空站',body:'SpaceX 成為首家造訪國際太空站的商業公司，開始把技術能力轉化為客戶購買的太空運輸服務。',image:'dragon',position:'56% 50%',caption:'Dragon 接近國際太空站，2012年5月25日 · NASA',source:'歷史：NASA Commercial Crew Rockets · ISS031-E-071075'},
 {year:'2015–17',label:'RECOVER. REFLY.',title:'讓火箭不只飛一次',body:'2015年第一級著陸，2017年再飛。回收與重複使用分兩步實現，目的是提高硬體利用率。',image:'launch',position:'56% 52%',caption:'背景：Falcon 9 Demo-2發射，2020 · NASA/Joel Kowsky',source:'歷史：SpaceX Mission里程碑 · 背景為火箭情境配圖，非2015／2017任務照'},
 {year:'2020',label:'HUMAN SPACEFLIGHT',title:'NASA 太空人的商業太空船',body:'Demo-2 自美國本土發射，讓太空人首次搭乘商業建造及營運的美國載人太空船前往太空站。',image:'launch',position:'56% 42%',caption:'Falcon 9／Crew Dragon，2020年5月30日 · NASA/Joel Kowsky',source:'歷史：NASA Demo-2公告 · NHQ202005300044'},
 {year:'STARLINK',label:'BEYOND LAUNCH SERVICES',title:'從發射，走向經營衛星網路',body:'公司不只替客戶把衛星送上去，也經營自己的通訊網路。部署、營運與更新，都需要持續投入。',image:'dragon',position:'50% 55%',caption:'背景：Dragon 與地球，2012 · NASA；非Starlink衛星照片',source:'業務：最終公開說明書 Space／Connectivity · 背景僅呈現太空環境'},
 {year:'2026',label:'THE CAPITAL QUESTION',title:'擴張的下一步，資金從哪裡來？',body:'發射、衛星網路與 AI 基礎設施的投資範圍擴大。接下來，從公司理財角度分析這次 IPO。',image:'nasa-musk',position:'58% 40%',caption:'NASA署長 Michael Griffin 與 Musk，2005 · NASA/Renee Bouchard',source:'融資分析：最終公開說明書 · 背景為早期合作情境，非IPO事件照'},
];
export function LaunchScene({step,still,reducedMotion,cover=false}:{step:number;still:boolean;reducedMotion:boolean;cover?:boolean}){
 const index=cover?0:Math.min(step,milestones.length-1);const current=milestones[index];const quiet=still||reducedMotion;
 const flight={ '--flight-y':`${620-index*78}px`,'--flight-x':`${1160+index*13}px`,'--trail-height':`${100+index*78}px` } as CSSProperties;
 return <div className={'launch-scene '+(cover?'launch-cover':'launch-history')} style={flight} data-quiet={quiet} data-flying={index>0}>
 <div className="launch-photo-stack" aria-hidden="true">{(cover?['launch']:milestones.map(m=>m.image)).map((image,i)=><img key={i} src={photo(image)} alt="" draggable={false} className={cover||i===index?'is-active':''} style={{objectPosition:cover?'55% 38%':milestones[i].position}}/>)}</div>
 <div className="launch-shade"/><div className="launch-grain"/><div className="launch-stars"/>
 <header className="launch-masthead"><span>SPACEX <i>/</i> CORPORATE FINANCE</span><span>{cover?'115–1':'COMPANY HISTORY'}</span></header>
 {cover?<div className="launch-cover-copy"><p>從進入軌道，到公開募資</p><h1>SpaceX <em>IPO</em></h1><div className="launch-cover-rule"/><h2>公司歷程 · 融資動機 · 上市後表現</h2><span>按 → 開始公司的升空歷程</span></div>:<>
 <div className="launch-copy" key={index}><p className="launch-year">{current.year}</p><span className="launch-kicker">{current.label}</span><h1>{current.title}</h1><p className="launch-description">{current.body}</p></div>
 <div className="launch-milestones" aria-label={`公司歷程，第${index+1}個節點，共${milestones.length}個`}>{milestones.map((m,i)=><div className={i===index?'is-current':i<index?'is-past':''} key={m.year}><span className="milestone-dot"/><span>{m.year}</span></div>)}</div>
 </>}
 <footer className="launch-photo-credit"><span>{cover?'背景：NASA／Joel Kowsky · Demo-2，2020':current.caption}</span><small>{cover?'SpaceX IPO · 課堂報告':current.source}</small></footer>
 {!cover&&<span className="launch-progress">{String(index+1).padStart(2,'0')} <i>/ {String(milestones.length).padStart(2,'0')}</i></span>}
 </div>;
}
export function renderLaunch(cover:boolean,r:SlideRenderProps){return <LaunchScene cover={cover} step={r.step} still={r.still} reducedMotion={r.reducedMotion}/>}
