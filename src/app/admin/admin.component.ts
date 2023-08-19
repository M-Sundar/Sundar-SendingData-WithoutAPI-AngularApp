import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../userprofile.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  title = "View Customers";
  constructor() {}

  ngOnInit(): void {
    
  }

  @Input() customers: UserProfile[]=[]

}
