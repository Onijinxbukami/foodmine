import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassForm !: FormGroup;
  constructor(private fb: FormBuilder){ }
  ngOnInit(): void {
    this.forgetPassForm = this.fb.group({
      email:['', Validators.required],
      
    })
  }

  onSubmit(){
    if(this.forgetPassForm.valid){
      //send to db
      console.log(this.forgetPassForm.value)
    }else{
      console.log("form is not valid")
  
      this.vaildALLFormFiels(this.forgetPassForm);
      alert("Please enter your email!!!")
    }
   }

    emailValidator(control: FormControl) {
    const email = control.value;
    if (email && email.indexOf('@') === -1) {
      return { invalidEmail: true };
    }
    return null;
  }

   private vaildALLFormFiels(formgroup: FormGroup){
    Object.keys(formgroup.controls).forEach(field=>{
      const control = formgroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true}); 
      }else if(control instanceof FormGroup){
        this.vaildALLFormFiels(control)
      }
    })
   }
  

}
