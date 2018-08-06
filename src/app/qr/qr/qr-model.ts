export class QuickResponseModel{
    private eventName: String;
    private eventId: String;
    private uuid: String;
    private browserToken: String;

    set $eventName(eventName){
        this.eventName =eventName;
    }

    set $eventId(eventId){
        this.eventId =eventId;
    }

    set $uuid(uuid){
        this.uuid = uuid;
    }

    set $browserToken(browserToken){
        this.browserToken = browserToken;
    }

    get $eventName(){
    return this.eventName;
    }

    get $eventId(){
        return this.eventId;
    }

    get $uuid(){
        return this.uuid;
    }

     get $browserToken(){
        return this.browserToken;
    }

                
}