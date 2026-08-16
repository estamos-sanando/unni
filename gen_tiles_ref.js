/**
 * gen_tiles.js — Generates isometric ground tiles matching the reference style
 * Run with Node.js + canvas package: node gen_tiles.js
 * Or open gen_tiles.html in browser to download PNGs
 */

const TILES = [
  {
    name: 'tile_grass_1',
    type: 'grass',
    topColors: ['#5cb85c','#4cae4c','#55a855','#62c462'],
    topVariant: 'clean',
  },
  {
    name: 'tile_grass_2',
    type: 'grass',
    topColors: ['#4aa844','#58b050','#4dab4d','#5db55d'],
    topVariant: 'blades',
  },
  {
    name: 'tile_grass_3',
    type: 'grass',
    topColors: ['#3a9c3a','#48a848','#42a042','#50a850'],
    topVariant: 'dark',
  },
  {
    name: 'tile_path_1',
    type: 'path',
    topColors: ['#9e9e9e','#939393','#9a9a9a','#a5a5a5'],
    topVariant: 'cracks',
  },
  {
    name: 'tile_path_2',
    type: 'path',
    topColors: ['#a8a8a8','#9d9d9d','#a2a2a2','#b0b0b0'],
    topVariant: 'worn',
  },
];
