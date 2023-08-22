import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from '../userprofile.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  title = "Add Customers";

    customers: UserProfile[]=[]

    @Output() customerAdded = new EventEmitter<UserProfile[]>;

    public regForm!: FormGroup;

    constructor(private rf: FormBuilder, private service: CustomerService){
      this.regForm = this.rf.group({
        name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        age: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.pattern('[0-9]*')]),
        color: new FormControl('', [Validators.required]),
      })
    }

  ngOnInit(): void {
    
  }

  onSubmit(customer_name: string, age: any, color: any) {
      if (this.regForm.valid){
        let customer:UserProfile = {
          name: customer_name,
          age: age,
          color: color
        };
        this.customers.push(customer);
        this.customerAdded.emit(this.customers);
        this.regForm.reset(true);
        this.service.openSnackBar('Customer added successfully');
      }
    }

}
