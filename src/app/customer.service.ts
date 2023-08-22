import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private snackbar: MatSnackBar) { }

  openSnackBar(msg: string, action: string = 'Ok'){
    this.snackbar.open(msg, action, {
      duration: 5000,
      verticalPosition: 'top',
    })
   }
   
}
