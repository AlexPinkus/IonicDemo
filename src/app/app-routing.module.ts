import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'salary-calculator',
    loadChildren: './salary-calculator/salary-calculator.module#SalaryCalculatorPageModule'
  },
  {
    path: 'quotations',
    loadChildren: './quotations/quotations.module#QuotationsPageModule' 
  },
  {
    path: 'concepts',
    loadChildren: './concepts/concepts.module#ConceptsPageModule' 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
