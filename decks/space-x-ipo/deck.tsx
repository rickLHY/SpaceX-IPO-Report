import { createWorkshopDeck, type Page } from '../../src/workshop/WorkshopDeck';
import { renderLaunch, milestones } from './LaunchIntro';
import content from './content.json';
import { RecoveryPrice } from './RecoveryPrice';
import './spacex.css';
export const deck = createWorkshopDeck('space-x-ipo','SpaceX IPO',content as Page[], {render:(p,r)=>p.id==='recovery'?<RecoveryPrice page={p} r={r}/>:p.kind?.startsWith('launch')?renderLaunch(p.kind==='launch-cover',r):null,steps:p=>p.kind==='launch'?milestones.length:1});
