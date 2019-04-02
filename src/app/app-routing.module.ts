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
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'salary-calculator',
    loadChildren: './pages/salary-calculator/salary-calculator.module#SalaryCalculatorPageModule'
  },
  {
    path: 'quotations',
    loadChildren: './pages/quotations/quotations.module#QuotationsPageModule'
  },
  {
    path: 'concepts',
    loadChildren: './pages/concepts/concepts.module#ConceptsPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
