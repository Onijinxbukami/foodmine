import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/login-signup/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, HttpClientModule, NgToastModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[AuthService]
})


export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm !: FormGroup;
  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService,
    ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required,]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin() {
    if (this.loginForm.valid) {
      //send to db
      console.log(this.loginForm.value)

      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.loginForm.reset();
          this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
          this.router.navigate(['dashBoard']);
        },
        error:(err)=>{
          this.toast.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
          alert(err?.error.message)
        }
      })

    } else {
      console.log("form is not valid")

      this.vaildALLFormFiels(this.loginForm);
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
