import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';


import { Concept } from '../models/Concept';
import { AlertController } from '@ionic/angular';
import { ConceptsPopoverComponent } from '../components/concepts-popover/concepts-popover.component';



@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.page.html',
  styleUrls: ['./concepts.page.scss'],
})
export class ConceptsPage implements OnInit {

  public concepts: Concept[] = [];

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    public popoverController: PopoverController
  ) {
    for (let index = 0; index < 5; index++) {
      this.concepts.push(new Concept());
    }
  }

  ngOnInit() {
    // Check if concepts exist
    if (this.concepts.length === 0) {
      this.presentToast('Aún no tienes conceptos guardados en la base de datos');
    }
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Nuevo Concepto',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nuevo Concepto'
        },
        {
          name: 'price',
          type: 'number',
          placeholder: 'Precio (opcional)'
        },
      ],
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ACEPTAR',
          handler: ({name, price}) => {
            this.concepts.push(new Concept(name, price));
            this.presentToast('Concepto guardado con exito');
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentEditAlert(concept: Concept, index: number) {
    const alert = await this.alertController.create({
      header: 'Editar Concepto',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: concept.name,
          placeholder: 'Nombre del Concepto'
        },
        {
          name: 'price',
          type: 'number',
          value: concept.price,
          placeholder: 'Precio (opcional)'
        },
      ],
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ACEPTAR',
          handler: ({name, price}) => {
            concept.name = name;
            concept.price = price;
            // this.concepts.push(new Concept(name, price));
            this.presentToast('Concepto actualizado con exito');
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentDeleteAlert(index: number) {
    const alert = await this.alertController.create({
      header: 'Eliminar Concepto',
      message: '¿Estas seguro de querer eliminar este concepto de la base de datos?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ACEPTAR',
          handler: () => {
            this.concepts.splice(index, 1);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentPopover(ev: any, index: number, concept: Concept) {
    const popover = await this.popoverController.create({
      component: ConceptsPopoverComponent,
      componentProps: { concept },
      event: ev,
      translucent: true
    });

    popover.onDidDismiss().then(({data}) => {
      this.popOverAction(data, index, concept);
    });
    return await popover.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }

  private popOverAction (action: string, index: number, concept: Concept) {
    switch (action) {
      case 'edit':
        this.presentEditAlert(concept, index);
        break;
      case 'delete':
        this.presentDeleteAlert(index);
        break;
      default:
        break;
    }
  }

}
