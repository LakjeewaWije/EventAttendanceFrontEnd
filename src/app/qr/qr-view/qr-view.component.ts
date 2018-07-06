import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html',
  styleUrls: ['./qr-view.component.css']
})
export class QrViewComponent implements OnInit {

  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'Example String';


  constructor() { }

  ngOnInit() {
  }

}
