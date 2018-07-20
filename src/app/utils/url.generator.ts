import { environment } from '../../environments/environment';

export class UrlGenerator {

  private urlEndPoints: object = {
    'event': '/event',
    'con' : '/con',
    'qr' : '/qr'
  };

  public urlGenerator(key) {
      return `${environment.baseUrl}${this.urlEndPoints[key]}`;
  }


}
