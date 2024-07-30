import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  activeSessionId: string='';
  constructor() { }

  setActiveSessionId(id: string) {
    this.activeSessionId = id;
  }

  getActiveSessionId() {
    return this.activeSessionId;
  }

}
