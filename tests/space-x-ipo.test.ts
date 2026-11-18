import { expect, it } from 'vitest';
import { deck } from '../decks/space-x-ipo/deck';
import { initialState, reduce } from '../src/presentation/state';

it('merges the lifecycle case while preserving ordered navigation and chapter targets', () => {
  expect(deck.slides).toHaveLength(57);
  expect(deck.slides[36].id).toBe('p-clp');
  expect(deck.slides[37].id).toBe('p-tunnel');
  expect(deck.slides.some(s => s.id === 'dual-age')).toBe(false);
  let state = reduce(deck, initialState(deck), { type: 'jump', id: deck.slides[35].id });
  state = reduce(deck, state, { type: 'nextSlide' });
  expect(state.slideId).toBe('p-clp');
  state = reduce(deck, state, { type: 'next' });
  expect(state.slideId).toBe('p-tunnel');
  expect(reduce(deck, state, { type: 'previous' }).slideId).toBe('p-clp');
  for (const chapter of deck.chapters ?? []) expect(deck.slides.some(s => s.id === chapter.slideId)).toBe(true);
});
