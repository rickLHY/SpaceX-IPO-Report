import type { DeckDefinition } from './presentation';
export type DeckEntry = { id: string; title: string; load: () => Promise<DeckDefinition> };
export const deckEntries: DeckEntry[] = [{ id:'space-x-ipo', title:'SpaceX IPO', load:()=>import('../decks/space-x-ipo/deck').then(m=>m.deck) }];
