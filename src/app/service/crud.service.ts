import { AppError } from './app.error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { NotFoundErrror } from './not-found-error';
import { BadRequestErrror } from './bad-request-error';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url;
  constructor(private http: HttpClient) {
    // this.url = 'http://localhost:1337/khalid/shop';
    this.url="http://modkhalid.pythonanywhere.com/register/";
   }
  register(post) {
    if(post==1 ){
       return this.http.get(this.url);
      }
    else
      return this.http.post(this.url,post);
  }



  salon_data(salon_id){
    return this.http.get(this.url+"?id="+salon_id);
    
  }



  addProduct(data){
    let user=123456;
    let f=new FormData();
    f.append('data',JSON.stringify(data));
    f.append('user',user.toString());
    return this.http.post("http://modkhalid.pythonanywhere.com/product/",f).pipe(
      catchError(this.ErrorHandlerMethod),
      map(res=>{
        if(res[0].code==200){
          return true;
        }
        return false;
      })
    );
    
  }

  orderNow(form){
    let url="http://modkhalid.pythonanywhere.com/order/"
    
    return this.http.post(url,form).pipe(
      catchError(this.ErrorHandlerMethod),
      map(res=>{
        if(res[0].code==200){
          return true;
        }
        return false;
      })
    );
  }
  getOrder(){
    let url="http://modkhalid.pythonanywhere.com/order/"
    return this.http.get(url).pipe(
      catchError(this.ErrorHandlerMethod),
    );
  }
 setOrderVisited(id){
  let user="123456";
  let form =new FormData()
  form.append("id",id)
  form.append('user',user)
  let url="http://modkhalid.pythonanywhere.com/order/"
  return this.http.post(url,form).pipe(
    catchError(this.ErrorHandlerMethod)
  )
 }

  protected ErrorHandlerMethod(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundErrror(error));
    }
    if (error.status === 400) {
      return throwError(new BadRequestErrror(error));
    }
    return throwError(new AppError(error));
  }

}


