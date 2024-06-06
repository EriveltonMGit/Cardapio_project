import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//angular material
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


//componetes
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section-1/section-1.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { Section4Component } from './section-4/section-4.component';
import { Section5Component } from './section-5/section-5.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component ,
    Section5Component,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FooterComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cardapio';
}
