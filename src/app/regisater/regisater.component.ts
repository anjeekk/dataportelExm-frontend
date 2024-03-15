import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistraionService } from '../registraion.service';
import { User } from '../user';

@Component({
  selector: 'app-regisater',
  templateUrl: './regisater.component.html',
  styleUrls: ['./regisater.component.scss']
})
export class RegisaterComponent implements OnInit{

  user=new User();
  msg='';
  
  
  constructor(private service:RegistraionService, private router:Router){}
  
  
  ngOnInit(): void {
      
  }
  

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response recieved");
        this.router.navigate(['/login'])
      },
      error=>{
        console.log("exception occured");
        this.msg="Bad Credentials, Please enter Valid Email and Password";
      },
      
      
    )
    
  }
 
  

}
