import { WebPlugin } from '@capacitor/core';

import type { BluetoothConnectPlugin } from './definitions';

export class BluetoothConnectWeb
  extends WebPlugin
  implements BluetoothConnectPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
