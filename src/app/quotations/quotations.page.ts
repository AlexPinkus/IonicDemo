import { Component, OnInit } from '@angular/core';
import { Quotation } from '../models/Quotation';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.page.html',
  styleUrls: ['./quotations.page.scss'],
})
export class QuotationsPage implements OnInit {

  public quotations: Quotation[] = [];

  constructor(public popoverController: PopoverController) {
    for (let index = 0; index < 5; index++) {
      this.quotations.push(new Quotation());
    }
  }

  async presentPopover(ev: any, quotation: Quotation) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: quotation,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {
  }

}
