import { QrModule } from './qr.module';

describe('QrModule', () => {
  let qrModule: QrModule;

  beforeEach(() => {
    qrModule = new QrModule();
  });

  it('should create an instance', () => {
    expect(qrModule).toBeTruthy();
  });
});
