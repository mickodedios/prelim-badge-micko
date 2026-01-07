import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-joinus',
  imports: [FormsModule],
  templateUrl: './joinus.html',
  styleUrl: './joinus.css',
})
export class Joinus {
  showForm: boolean = false;

  user = {
    firstName: '',
    lastName: '',
    email: '',
    institution: ''
  };
}
