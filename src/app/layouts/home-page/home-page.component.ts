import { Component } from '@angular/core';
import { SidebarLeftComponent } from "../../components/sidebar-left/sidebar-left.component";
import { SidebarRightComponent } from "../../components/sidebar-right/sidebar-right.component";

@Component({
  selector: 'app-home-page',
  imports: [SidebarLeftComponent, SidebarRightComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
