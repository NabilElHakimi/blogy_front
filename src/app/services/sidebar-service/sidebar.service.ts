import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();

  toggleSidebar(): void {
    const currentState = this.sidebarOpenSubject.value;
    this.sidebarOpenSubject.next(!currentState);
  }

  closeSidebar(): void {
    this.sidebarOpenSubject.next(false);
  }

  openSidebar(): void {
    this.sidebarOpenSubject.next(true);
  }


}
