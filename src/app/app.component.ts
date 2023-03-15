import {Component} from '@angular/core';
import {IconSetService} from "@coreui/icons-angular";
import {iconSubset} from "./icons/icon-subset";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web_Auction';

  constructor(
    private iconSetService: IconSetService
  ) {
    iconSetService.icons = {...iconSubset};
  }
}
