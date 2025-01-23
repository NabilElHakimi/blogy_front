import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar-service/sidebar.service';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.applyTheme();
  }

  changeMode(): void {
    const currentTheme = localStorage.getItem('color-theme');

    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }


  private applyTheme(): void {
    const currentTheme = localStorage.getItem('color-theme');

    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }


  private isSidebarOpen = false;


  getSidebarState(): boolean {
    return this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }


  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }


}
