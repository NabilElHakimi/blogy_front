import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarService } from '../../services/sidebar-service/sidebar.service';

@Component({
  selector: 'app-sidebar-left',
  imports: [ HeaderComponent],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css'
})
export class SidebarLeftComponent {

  isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.sidebarOpen$.subscribe(
      (isOpen) => (this.isSidebarOpen = isOpen)
    );
  }

  closeSidebar(): void {
    this.sidebarService.closeSidebar();
  }

}
