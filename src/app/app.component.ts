import { Component } from '@angular/core';
import { UserProfile } from './userprofile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apiCrudApp';
  
  customers: UserProfile[]=[]


  getData(customers: UserProfile[]){
      this.customers = customers;
  }
  
}
