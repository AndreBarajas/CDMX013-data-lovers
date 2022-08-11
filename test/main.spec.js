/**
 * @jest-environment jsdom
 */

import allData from '../src/data/pokemon/pokemon.js';
import {pokemonCard} from '../src/main.js'

describe('allData', () => {
    it('should be an object', () =>
        expect(typeof allData).toBe('object'));
});

describe('pokemonCard', () => {
    it('should be a function', () =>
        expect(typeof pokemonCard).toBe('function'));
});