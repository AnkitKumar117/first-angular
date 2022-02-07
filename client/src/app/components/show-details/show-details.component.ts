import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  updateForm = new FormGroup ({
    username:new FormControl(''),
    email:new FormControl(''),
    number:new FormControl(''),
    gender:new FormControl(''),
    password:new FormControl(''),
    conf_password:new FormControl(' ')
  })




  userData: any;
  ID: any;
  constructor(private authService: AuthService,private http : HttpClient, private route :ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.profileDetails();
  
    console.log(this.userData); 
  }
  profileDetails(){
    return this.authService.profile().subscribe((response)=>{
      this.userData=JSON.parse(JSON.stringify(response)); 
      console.log(this.userData);
      this.ID=this.userData.id
      this.updateForm = new FormGroup ({
        username:new FormControl(this.userData['user_name']),
        email:new FormControl(this.userData['email']),
        number:new FormControl(this.userData['number']),
        gender:new FormControl(this.userData['gender']),
        password:new FormControl(this.userData['password']),
      })
      console.log(this.updateForm.value)
    })
  }
  updateData(){
    this.http.post(`/api/update/ID:${this.ID}`,this.updateForm.value).subscribe((result)=>{
     console.warn(result); 

      this.router.navigate(['/home'])
  });
  console.log(this.updateForm.value)
  }

}
