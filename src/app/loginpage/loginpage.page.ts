import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  username: string;
  password: string;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder)
  {
}

  login() {
    console.log(this.ionicForm.value);
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(30)]],
      password:['', [Validators.required,Validators.minLength(5)]]
    });
  }

}
