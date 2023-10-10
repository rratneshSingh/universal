import { Component } from '@angular/core';
import { UiService } from '../ui/services/ui.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private uiSrv: UiService) {
  }

  ngOnInit( ) {
    this.uiSrv.setMetaData({
      title: 'Products',
      description: 'Check out the latest products'
    })
  }

}
