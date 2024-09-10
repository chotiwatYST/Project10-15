import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-frontlayout',
  standalone: true,
  imports: [AppComponent,NavbarComponent,RouterOutlet,FooterComponent],
  templateUrl: './frontlayout.component.html',
  styleUrl: './frontlayout.component.scss'
})
export class FrontlayoutComponent {

}
