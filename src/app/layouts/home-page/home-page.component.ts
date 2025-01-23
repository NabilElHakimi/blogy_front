import { Component } from '@angular/core';
import { SidebarLeftComponent } from "../../components/sidebar-left/sidebar-left.component";
import { SidebarRightComponent } from "../../components/sidebar-right/sidebar-right.component";
import { BlogCardComponent } from "../../components/blog-card/blog-card.component";

@Component({
  selector: 'app-home-page',
  imports: [SidebarLeftComponent, SidebarRightComponent, BlogCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
