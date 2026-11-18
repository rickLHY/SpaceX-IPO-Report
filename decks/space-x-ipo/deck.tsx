import { createWorkshopDeck, type Page } from '../../src/workshop/WorkshopDeck';
import { renderLaunch, milestones } from './LaunchIntro';
import content from './content.json';
import { RecoveryPrice } from './RecoveryPrice';
import './spacex.css';
import { ChartView } from '../../src/workshop/charts';
function DualClassLifecycle({ page: p }: { page: Page }) {
 return <div className="dual-lifecycle"><div className="dual-lifecycle-grid"><figure><figcaption>相對單一股權公司的估值溢價（示意）</figcaption><ChartView chart={p.chart!} width={820}/><p className="lifecycle-axis">上市後時間（年）｜基準 0＝估值相同</p><p className="lifecycle-caption">研究結論示意，非論文估計數據，亦非 SpaceX 實際估值走勢。</p></figure><aside><section><h2>學術研究｜樣本趨勢</h2><p>{p.paper!.finding}</p><p>{p.points![0]}</p><p>{p.points![1]}</p></section><section><h2>SpaceX｜公開事實</h2><p>{p.points![2]}</p><strong>成立約 24 年 ≠ 上市約半年</strong></section><section><h2>尚待驗證｜估值結果</h2><p>{p.points![3]}</p><p>{p.points![4]}</p></section></aside></div><p className="lifecycle-transition">{p.aside}</p></div>;
}
export const deck = createWorkshopDeck('space-x-ipo','SpaceX IPO',content as Page[], {render:(p,r)=>p.id==='p-clp'?<DualClassLifecycle page={p}/>:p.id==='recovery'?<RecoveryPrice page={p} r={r}/>:p.kind?.startsWith('launch')?renderLaunch(p.kind==='launch-cover',r):null,steps:p=>p.kind==='launch'?milestones.length:1});
