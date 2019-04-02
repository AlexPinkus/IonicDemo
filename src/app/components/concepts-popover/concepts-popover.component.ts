import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Concept } from 'src/app/models/Concept';

@Component({
  selector: 'app-concepts-popover',
  templateUrl: './concepts-popover.component.html',
  styleUrls: ['./concepts-popover.component.scss'],
})
export class ConceptsPopoverComponent implements OnInit {

  public concept: Concept;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    console.log('concept :', this.concept);
  }

  public edit (event: any) {
    console.log('edit item');
    this.popoverController.dismiss('edit');
  }

  public delete (event: any) {
    console.log('delete item');
    this.popoverController.dismiss('delete');
  }

}
