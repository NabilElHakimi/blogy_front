import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarLeftComponent } from "./components/sidebar-left/sidebar-left.component";
import { HomePageComponent } from "./layouts/home-page/home-page.component";
import { SidebarRightComponent } from "./components/sidebar-right/sidebar-right.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent , SidebarLeftComponent, HomePageComponent, SidebarRightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blogy_front';
}
