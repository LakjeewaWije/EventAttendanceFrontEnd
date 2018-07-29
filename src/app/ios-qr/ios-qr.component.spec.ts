import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosQrComponent } from './ios-qr.component';

describe('IosQrComponent', () => {
  let component: IosQrComponent;
  let fixture: ComponentFixture<IosQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
