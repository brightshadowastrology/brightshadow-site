import * as migration_20260401_132505 from './20260401_132505';
import * as migration_20260608_105933 from './20260608_105933';
import * as migration_20260609_193305 from './20260609_193305';

export const migrations = [
  {
    up: migration_20260401_132505.up,
    down: migration_20260401_132505.down,
    name: '20260401_132505',
  },
  {
    up: migration_20260608_105933.up,
    down: migration_20260608_105933.down,
    name: '20260608_105933',
  },
  {
    up: migration_20260609_193305.up,
    down: migration_20260609_193305.down,
    name: '20260609_193305'
  },
];
