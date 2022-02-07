import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Images: any;
  registerForm : FormGroup;
  constructor( private http : HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      number: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10)]),
      gender: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      image: new FormControl("",[Validators.required]),
    });
  }
  uploadImg(event:any){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.Images=file;
      console.log(this.Images)
    }
    const formData = new FormData();
    formData.append("image",this.Images);
    console.log(formData);
    return this.http.post(`/api/upload/ID:`, formData).subscribe((response)=>{
      console.log(response);
    })
  }
  register() : void {
    this.authService.register(this.registerForm.value).subscribe((msg)=>console.log(msg));
  }
}
