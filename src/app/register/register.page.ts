import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  username: string;
  email: string;
  password: string;
  cpassword: string;
  mobile: string;
  // fullAddress: string;
  // zipcode: string;
  // state: string;
  // city: string;
  ionicForm: FormGroup;
  submitted = false;


  constructor(public formBuilder: FormBuilder) {

    }


  register() {
    // console.log(this.username);
    // console.log(this.email);
    // console.log(this.password);
    // console.log(this.cpassword);
    // console.log(this.mobile);
    // console.log(this.fullAddress);
    // console.log(this.zipcode);
    // console.log(this.state);
    // console.log(this.city);
    // console.log(this.ionicForm.value);
    this.submitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide valid details!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }

  get f(){
    return this.ionicForm.controls;
  }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(30)]],
      email: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(30),
         Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(15),Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(30)]],
        cpassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
      });
  }

}
