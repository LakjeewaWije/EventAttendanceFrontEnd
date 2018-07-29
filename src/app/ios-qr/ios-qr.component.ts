import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-qr',
  templateUrl: './ios-qr.component.html',
  styleUrls: ['./ios-qr.component.css']
})
export class IosQrComponent implements OnInit {

  constructor() { }

  elementType = 'url';
  value = 'https://itunes.apple.com/us/app/gradchat/id1166569810?mt=8';

  ngOnInit() {
  }

}
