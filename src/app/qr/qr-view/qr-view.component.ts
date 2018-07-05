import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html',
  styleUrls: ['./qr-view.component.css']
})
export class QrViewComponent implements OnInit {
  // service: Service;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  constructor() { }

  ngOnInit() {
    this.value  = Math.random().toString(36).substr(2, 9);
  }

}
// class Service {
//   generateId(): string {
//     return Math.random().toString(36).substr(2, 9);
//   }
// }
