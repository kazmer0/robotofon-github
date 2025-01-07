import { Component, OnInit } from '@angular/core';
import { BluetoothService } from '../../services/bluetooth.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private bluetoothService: BluetoothService) {}

  async connect() {
    try {
      await this.bluetoothService.connectToESP32();
      alert('Connected to ESP32');
    } catch (error) {
      alert('Failed to connect to ESP32');
    }
  }
  async connectToESP32() {

    let bluetoothDevice = await (navigator as any).bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'],
    });

    let bluetoothWriter: any;
    try {

      bluetoothDevice = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'],
      });

      const server = await bluetoothDevice.gatt!.connect();

      const service = await server.getPrimaryService('4fafc201-1fb5-459e-8fcc-c5c9c331914b');

      const characteristic = await service.getCharacteristic('beb5483e-36e1-4688-b7f5-ea07361b26a8');
      bluetoothWriter = characteristic;

      alert('Bluetooth connected');
    } catch (error) {
      console.error('Error connecting to Bluetooth device:', error);
    }
  }


  ngOnInit() {}
}
