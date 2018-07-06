import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html',
  styleUrls: ['./qr-view.component.css']
})
export class QrViewComponent implements OnInit {
<<<<<<< HEAD

  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'Example String';


=======
  // service: Service;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
>>>>>>> 6850d0bccaca2a6ea5df830d9ddd9e8e9a265fad
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
