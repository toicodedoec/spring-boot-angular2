import { DummyService } from './service/dummy.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  serviceResult: number = 0;

  constructor(
    private dummyService: DummyService
  ) { }

  callService() {
    this.dummyService.callToExternalService().subscribe((res: Object[]) =>
      this.serviceResult = res.length
    );
  }
}
