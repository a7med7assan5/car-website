import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/tabs',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.homePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.searchPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.profilePageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/more.module').then(m => m.morePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.settingsPageModule)
      },
      {
        path: 'car',
        loadChildren: () => import('../car/car.module').then(m => m.carPageModule)
      },
      {
        path: 'add-car',
        loadChildren: () => import('../add-car/add-car.module').then(m => m.addCarPageModule)
      },
      {
        path: 'new-cars',
        loadChildren: () => import('../new-cars/new-cars.module').then(m => m.newCarsPageModule)
      },
      {
        path: 'preowned-cars',
        loadChildren: () => import('../preowned-cars/preowned-cars.module').then(m => m.preownedCarsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.notificationsPageModule)
      },
      {
        path: 'reviews',
        loadChildren: () => import('../reviews/reviews.module').then(m => m.reviewsPageModule)
      },
      {
        path: 'settings/change-email',
        loadChildren: () => import('../change-email/change-email.module').then(m => m.changeEmailPageModule)
      },
      {
        path: 'settings/change-password',
        loadChildren: () => import('../change-password/change-password.module').then(m => m.changePasswordPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../contact-us/contact-us.module').then(m => m.contactUsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
