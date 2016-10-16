import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumFormComponent} from './component/album-form.component';
import { AlbumListComponent} from './component/album-list.component';
import { AboutComponent }    from './component/about-component';

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
