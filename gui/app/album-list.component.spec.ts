import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AlbumListComponent } from './album-list.component';

let comp: AlbumListComponent;
let fixture: ComponentFixture<AlbumListComponent>;
let el: DebugElement;

describe('AlbumListComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AlbumListComponent], // declare the test component
        });

        TestBed.compileComponents();

        fixture = TestBed.createComponent(AlbumListComponent);

        comp = fixture.componentInstance; // AlbumListComponent test instance

        // get title DebugElement by element name
        el = fixture.debugElement.query(By.css('h2'));
    });

    it('should display original title', () => {
        fixture.detectChanges(); // trigger data binding
        expect(el.nativeElement.textContent).toContain(comp.artists[0].name);
    });

    it('should display a different test title', () => {
        comp.artists[0].name = 'Elvis Presley';
        fixture.detectChanges(); // trigger data binding
        expect(el.nativeElement.textContent).toContain('Test Title');
    });

});