import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalaryCalculatorPage } from './salary-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: SalaryCalculatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalaryCalculatorPage]
})
export class SalaryCalculatorPageModule {}
