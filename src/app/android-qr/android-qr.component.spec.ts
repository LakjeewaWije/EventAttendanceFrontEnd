import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidQrComponent } from './android-qr.component';

describe('AndroidQrComponent', () => {
  let component: AndroidQrComponent;
  let fixture: ComponentFixture<AndroidQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
