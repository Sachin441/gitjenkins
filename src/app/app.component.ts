import { Component } from '@angular/core';
import {UserServiceService} from './user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private user: UserServiceService) {
    this.user.getData().subscribe(data=>{
      console.log(data);
    });
  }
  // register(data: any)
  // {
  //   console.log(data);
  //   this.user.saveData(data).subscribe(result=>{
  //     console.log(result);
  //   });
  // }
}
