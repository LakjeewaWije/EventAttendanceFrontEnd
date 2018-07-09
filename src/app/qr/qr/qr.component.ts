import { Component, OnInit } from '@angular/core';
import {QrService} from '../qr.service';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  constructor(private qrservice: QrService) {
  }
  value: string = Math.random().toString(36).substr(2, 60);
  ngOnInit(): void {
    this.qrservice.getTokenGG();
  }

}
