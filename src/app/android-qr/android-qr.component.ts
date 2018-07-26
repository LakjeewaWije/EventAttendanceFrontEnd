import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-android-qr',
  templateUrl: './android-qr.component.html',
  styleUrls: ['./android-qr.component.css']
})
export class AndroidQrComponent implements OnInit {

  constructor() {

  }

  elementType = 'url';
  value = 'https://play.google.com/store/apps/details?id=com.populo.gradchat&hl=en';

  ngOnInit() {
  }


}
