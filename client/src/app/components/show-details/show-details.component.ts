import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private authService: AuthService,private http : HttpClient, private route :ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     this.authService.profile().subscribe((data)=>console.log(data,"show ts"));
  }

}
