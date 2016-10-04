import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/Rx';

import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-form',
  templateUrl: 'app/album-form.component.html'
  
})
export class AlbumFormComponent implements OnInit {

  album: Album;
  
  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  editMode = false;
  submitted = false;

  onSubmit() {
    if (!this.editMode) {
      this.submitted = true;
      this.editMode = !this.editMode;
    } else {
      // save, then, back to list screen 
      let link = ['/artists/43ZHCT0cAZBISjO8DG9PnE'];
      this.albumService.update(this.album).subscribe((res) => this.router.navigate(link));
    }
  }

  ngOnInit(): void {
    /*
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if (id) {
        this.album = this.albumService.getAlbum(id);
      } else {
        this.editMode = true;
      }
    });
    */
    
    this.route.params.flatMap(params => this.albumService.getById(params['id']))
              .subscribe(album => this.album = album);
  }

  goBack(): void {
    window.history.back();
  }
}
