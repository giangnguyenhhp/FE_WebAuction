import {Component} from '@angular/core';
import { navItems } from './_nav';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  public navItems = navItems;


  constructor() {
  }

}
