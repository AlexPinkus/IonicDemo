import { Component, OnInit } from '@angular/core';
// import { ViewController } from 'ionic-angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(navParams: NavParams) {
    console.log('this.quotation :', navParams.data);
  }

  ngOnInit() {}

  public edit (event: any) {
    console.log('edit item');
    // this.viewCtrl.dismiss();
  }

  public view (event: any) {
    console.log('view item');
  }

  public delete (event: any) {
    console.log('delete item');
  }

}
