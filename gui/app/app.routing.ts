import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumFormComponent} from './album-form.component';
import { AlbumListComponent} from './album-list.component';
import { AboutComponent }    from './about-component';

const appRoutes: Routes = [
  {
    path: 'artists/43ZHCT0cAZBISjO8DG9PnE',
    component: AlbumListComponent
  },
  {
    path: 'create',
    component: AlbumFormComponent
  },
  {
    path: '',
    redirectTo: 'artists/43ZHCT0cAZBISjO8DG9PnE',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: AlbumFormComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
