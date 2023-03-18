import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent {
  sidebarActiveSubject: Subject<any> = new Subject();
  deactivateSidebar(){
    this.sidebarActiveSubject.next(-1)
  }
}
