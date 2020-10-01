import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards';
import { Role } from './_models';
const routes: Routes = [

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),

  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then(m => m.startPageModule),
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.signInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.signUpPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.settingsPageModule)
  },


  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.searchPageModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then(m => m.carPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./add-car/add-car.module').then(m => m.addCarPageModule)
  },


  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
