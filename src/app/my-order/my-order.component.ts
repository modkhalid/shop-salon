import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  // console.log(JSON.parse(localStorage.getItem('added')));
  form;
  sucess=false;
  success:Boolean=false;
  constructor(private service: CrudService,private router:Router) {
    this.form = new FormGroup({
      name: new FormControl('', []),
      city: new FormControl('', []),
      phone_number: new FormControl(),
      email: new FormControl(),
    });
  }


  onSubmit(){
    // console.log(this.form.value);
    let data=this.form.value;
    let f=new FormData();
    f.append('data',JSON.stringify(data));
    f.append('order',localStorage.getItem('added'));
    // localStorage.removeItem('added');
    this.service.orderNow(f).subscribe(res=>{
      // console.log(res);
      if(res==true){
        this.success=true;
      }else{
        this.success=false;
      }
      
    });
    
  }
  ngOnInit() {
  }

}
