import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  data
  constructor(private service:CrudService) { 
    this.service.register(1).subscribe(res=>{
      console.log(res);
      this.data=res;
      
    })
    
    // console.log(typeof(this.data));
    
  }

  ngOnInit() {
  }

}
