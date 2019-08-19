import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  file=undefined;
  success:Boolean=false;
  constructor(private service: CrudService,private router:Router) {
    this.form = new FormGroup({
      name: new FormControl('', []),
      ad_first: new FormControl('', []),
      ad_second: new FormControl('', []),
      city: new FormControl('', []),
      country: new FormControl('', []),
      pincode: new FormControl('', []),
      phone_number: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      cpassword: new FormControl()
    });
  }
// ["name","ad_first","ad_second","city","country","pincode","image","password","email"]

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    let f=new FormData()
    f.append("image",this.file)
    f.append("Saloon",JSON.stringify(this.form.value))
    
    
    this.service.register(f).subscribe(response => {
        if(response){
          
          this.success=true;
          console.log(this.success);
          
        }else{
          this.success=false;
        }
        
      });
  }
f(){this.service.register(1)}

  onChange(event){
    this.file=<File>event.target.files[0]
    console.log(this.file)
    
  }
}
