import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  success:Boolean=false;
  constructor(private service: CrudService,private router:Router) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.form.value);
    let f=new FormData()
    // f.append("image",this.file)
    f.append("login",JSON.stringify(this.form.value))
    
    
    this.service.register(f).subscribe(response => {
        // if(response){
          
        //   this.success=true;
        //   console.log(this.success);
          
        // }else{
        //   this.success=false;
        // }
        console.log(response);
        
        
      });
  }

  ngOnInit() {
  }

}
