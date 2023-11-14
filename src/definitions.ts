export interface BluetoothConnectPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
