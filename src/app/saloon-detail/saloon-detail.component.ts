import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-saloon-detail',
  templateUrl: './saloon-detail.component.html',
  styleUrls: ['./saloon-detail.component.css']
})
export class SaloonDetailComponent implements OnInit {
  data;
  products;
  added_products;
  size=1;
  constructor(private service:CrudService,private route:ActivatedRoute,private router:Router) {
      let id=this.route.snapshot.paramMap.get('id');
      this.service.salon_data(id).subscribe(res=>{
        this.data=res[0];//convert array to object
        // console.log(this.data);
        this.products=this.data['item']
        console.log(this.products);
        this.added_products=[];
        
      })
      // // console.log(this.data.name);
      // console.log(this.data); we cant use it here due to observable
      
      
   }
   add(pro){
    //  if(this.added_products==false)
        // console.log(pro);
        
      // console.log(this.added_products);
      
     this.added_products.push(pro)
     this.products.splice(this.products.indexOf(pro),1);
     this.size++;
   }
   remove(pro){
    this.products.push(pro)
    this.added_products.splice(this.added_products.indexOf(pro),1);
    this.size--;
  }
  orderNow(){
    // this.service.add_order(this.added_products)
    // console.log(this.added_products);
    localStorage.setItem("added",JSON.stringify(this.added_products))
    this.router.navigate(['/my','orders']);
    
  }

  ngOnInit() {

  }

}
