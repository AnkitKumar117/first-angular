import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData:any;
  ID:any;
  Images:any;
  constructor(private authService: AuthService,private http : HttpClient, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.profileDetail();
    console.log(this.userData); 
  }

  profileDetail(){
    return this.authService.profile().subscribe((response)=>{
      console.log('Response is:'+JSON.stringify(response));
      this.userData=JSON.parse(JSON.stringify(response)).data;
      console.log(this.userData.user_name,"profile details home");
    })
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
    return this.http.post(`/api/upload/ID:${this.ID}`, formData).subscribe((response)=>{
      console.log(response);
    })
  }

}
