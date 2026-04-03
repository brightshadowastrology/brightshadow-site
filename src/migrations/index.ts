import * as migration_20260401_132505 from './20260401_132505';

export const migrations = [
  {
    up: migration_20260401_132505.up,
    down: migration_20260401_132505.down,
    name: '20260401_132505'
  },
];
