import { Component } from '@angular/core';
import { UsersDataService } from './Services/users-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-info';
  constructor(private us:UsersDataService){}

  submitUers(value: any){  
    
    console.log(value) ;
   

    var fd = new FormData;
    fd.append("fname",value.fname);
    fd.append("lname",value.lname);
    fd.append("email",value.email);
    fd.append("address",value.address);
    fd.append("city",value.city);
    fd.append("inputZip",value.inputZip);
    this.us.demoapi(fd).subscribe((data)=>{
      console.log("this is the value from php:");
      console.log(data);
      
    });
    
  }
  ngOnInit(){
    localStorage.setItem("id","1011")
  } 

 
  
}
