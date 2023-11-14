import { registerPlugin } from '@capacitor/core';

import type { BluetoothConnectPlugin } from './definitions';

const BluetoothConnect = registerPlugin<BluetoothConnectPlugin>(
  'BluetoothConnect',
  {
    web: () => import('./web').then(m => new m.BluetoothConnectWeb()),
  },
);

export * from './definitions';
export { BluetoothConnect };
