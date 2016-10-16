import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }       from './app.component';
import { AlbumFormComponent}  from './component/album-form.component';
import { AlbumListComponent}  from './component/album-list.component';
import { AboutComponent }     from './component/about-component';
import { AlbumService }       from './service/album.service';
import { ArtistService }      from './service/artist.service';

import { routing }            from './app.routing';
import { Ng2CompleterModule } from 'ng2-completer';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing, Ng2CompleterModule],
  declarations: [AppComponent,
    AlbumFormComponent,
    AlbumListComponent,
    AboutComponent
  ],
  providers: [
    AlbumService,
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
