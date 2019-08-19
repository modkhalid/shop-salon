import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  form;
  // success=false;
  file=undefined;
  success:Boolean=false;
  constructor(private service: CrudService,private router:Router) {
    this.form = new FormGroup({
      title: new FormControl('', []),
      price: new FormControl('', []),
      category: new FormControl('', []),
    });
  }
  onSubmit(){
    // console.log(this.form.value)
    this.service.addProduct(this.form.value).subscribe(res=>{
      // console.log(res);
      if(res){
        this.success=true;
      }else{
        this.success=false;
      }
      this.form.reset();
    })
  }

  ngOnInit() {
  }

}
