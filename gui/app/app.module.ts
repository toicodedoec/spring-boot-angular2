import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }       from './app.component';
import { AlbumFormComponent}  from './album-form.component';
import { AlbumListComponent}  from './album-list.component';
import { AboutComponent }     from './about-component';
import { AlbumService }       from './album.service';
import { ArtistService }      from './artist.service';

import { routing }            from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
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
