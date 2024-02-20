import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/login-signup/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, HttpClientModule,NgToastModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers:[AuthService]

})
export class SignUpComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm !: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  emailValidator(control: FormControl) {
    const email = control.value;
    if (email && email.indexOf('@') === -1) {
      return { invalidEmail: true };
    }
    return null;
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      //send to db
      console.log(this.signUpForm.value)

      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })

    } else {
      console.log("form is not valid")

      this.vaildALLFormFiels(this.signUpForm);
      alert("Your form is invaild")
    }
  }




  private vaildALLFormFiels(formgroup: FormGroup) {
    Object.keys(formgroup.controls).forEach(field => {
      const control = formgroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.vaildALLFormFiels(control)
      }
    })
  }
}
