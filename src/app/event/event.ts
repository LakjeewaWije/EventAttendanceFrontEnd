
export class Event {
  private eventName: string; // event name
  private eventDate: Date; // event date object
  private eventDescription: string; // event description
  setEName(name: string): void {
    this.eventName = name;
  }
  getEventName(): string {
    return this.eventName;
  }
  setEventDate(): void {
    this.eventDate = new Date();
  }
  getEventDate(): string {
    this.setEventDate();
    // tslint:disable-next-line:max-line-length
    return this.eventDate.getUTCFullYear() + '-' + this.eventDate.getUTCMonth() + '-' + this.eventDate.getUTCDate() + ' ' + this.eventDate.getHours() + ':' + this.eventDate.getMinutes() + ':' + this.eventDate.getUTCSeconds();
  }
}


