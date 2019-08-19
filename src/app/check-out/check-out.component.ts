import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  category="new-order"
  order_data:any;
  my_data:any;
  constructor(private service:CrudService) {
    this.service.getOrder().subscribe(res=>{
      this.order_data=res;
      console.log(this.order_data);
      this.my_data=res;
      
    })
   }

  changeCat(str){
    this.category=str;
    this.my_data=[];
    for(let el in this.order_data){
      this.my_data.push(this.order_data[el])
    }
    // console.log(this.my_data);
    
    if(str=="new-order"){
      for(let x of this.my_data){
        // if(x['is_visited']!="0"){
        //   // console.log(x+"done");
        //   this.my_data.splice(this.my_data.indexOf(x),1);
        // }
        // console.log(x['is_visited']);
        
        if(x['is_visited']==0){
         let index=this.my_data.indexOf(x);
         this.my_data.splice(index,1);
         console.log(this.my_data.indexOf(x));
         
        }
        
        
        // console.log(x);
        // console.log("hello");
        
        
      }
      console.log(this.my_data);
      
    }else if(str=="old-order"){
      for(let x of this.my_data){
        if(x['is_visited']=='0'){
          this.my_data.splice(this.my_data.indexOf(x),1);
        }
      }
      console.log(this.my_data);
      
    }
    
    
  }

  ngOnInit() {
  }

}
