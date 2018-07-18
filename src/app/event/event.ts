
export class Event {
  private eName: string; // event name
  private eDate: Date; // event date object
  private eDsc: string; // event description
  setEName(name: string): void {
    this.eName = name;
  }
  getEName(): string {
    return this.eName;
  }
  setEDateTime(): void {
    this.eDate = new Date();
  }
  getEDateTime(): string {
    this.setEDateTime();
    return this.eDate.getUTCFullYear() + '-' + this.eDate.getUTCMonth() + '-' + this.eDate.getUTCDate() + ' ' + this.eDate.getHours() + ':' + this.eDate.getMinutes() + ':' + this.eDate.getUTCSeconds();
  }
}


