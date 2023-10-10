import { Component } from '@angular/core';
import { UiService } from '../ui/services/ui.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private uiSrv: UiService) {
  }

  ngOnInit( ) {
    this.uiSrv.setMetaData({
      title: 'Cart',
      description: 'You have items in cart'
    })
  }
}
