import { Component } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-sidebar-left',
  imports: [MainComponent, HeaderComponent],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css'
})
export class SidebarLeftComponent {
  
}
