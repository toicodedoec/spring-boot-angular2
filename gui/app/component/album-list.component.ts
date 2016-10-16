import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Album } from '../model/album';
import { AlbumService } from '../service/album.service';
import { ArtistService } from '../service/artist.service';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'album-list',
  templateUrl: 'app/view/album-list.component.html',
  styles: [':host /deep/ .completer-dropdown {position: relative !important; border: 1px solid black;margin-top: 10px !important;}',
    ':host >>> .completer-selected-row {background-color: red !important;color: #ffffff;}'
  ]

})
export class AlbumListComponent {
  private searchStr: string;
  private dataService: CompleterData;
  private searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];

  albums: Album[];
  artists: Album[];

  selectedAlbum: Album;
  messageFromService: string;

  constructor(
    private albumService: AlbumService,
    private artistService: ArtistService,
    private router: Router,
    private completerService: CompleterService
  ) {
  }

  onSelect(album: Album): void {
    let link = ['/detail', album.id];
    this.selectedAlbum = album;
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.albumService.getAll()
      .subscribe(albums => {
        this.albums = albums;
      });
    this.artistService.getAll()
      .subscribe(artists => this.artists = artists);
    this.albumService.callToExternalService().subscribe(message => {
      this.dataService = this.completerService.local(message, 'name', 'name');
    });
  }

  public onQuoteSelected(selected: CompleterItem) {
    alert(selected.title);
  }
}
