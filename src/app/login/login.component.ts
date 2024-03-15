import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { RegistraionService } from '../registraion.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

user=new User();
msg='';


constructor(private service:RegistraionService, private router:Router){}


ngOnInit(): void {
    
}

loginUser(){
  this.service.loginUserFromRemote(this.user).subscribe(
    data=>{
      console.log("response recieved")
      this.router.navigate(['/home'])
    },
    error=>{
      console.log("exception occured")
      this.msg="Bad Credentials, Please enter Valid Email and Password";
    }
  )
  
}


}
