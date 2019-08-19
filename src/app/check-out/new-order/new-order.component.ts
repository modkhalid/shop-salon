import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
// import { }
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  @Input() data;
  constructor(private servive:CrudService) { 
    // this.f();
    
  }
  f(){
    console.log(this.data);
  }
  
  markAsRead(id,el){
    // console.log(id);
    // console.log(el);
    
    this.servive.setOrderVisited(id).subscribe(res=>{
      console.log(res);
      el.target.style.display="none";
      
    })
    
  }
  ngOnInit() {
  }

}
