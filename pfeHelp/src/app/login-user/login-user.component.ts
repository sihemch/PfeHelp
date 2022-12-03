import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { publicationsService } from 'src/services/publication.services';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user:User = new User();
  constructor(public publicationservice:publicationsService , public router: Router) { }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.user)
    this.publicationservice.LoginUser(this.user).subscribe( data=>{
      alert("Authentification réussite");
      this.router.navigate(['about'])
    }
    
    
    );
    
  }   
}
