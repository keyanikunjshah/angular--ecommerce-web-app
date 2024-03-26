import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
   baseUrl="http://localhost:8080/products"
   
   //inject HttpClient in ProductService.ts file using constructor injection
   constructor(private http:HttpClient){}


 getListProduct(currentCategoryId:number){
  return this.http.get<GetProductResponse>(`${this.baseUrl}/search/findByCategoryId?id=${currentCategoryId}`).pipe(map(
    res=> res._embedded.products
  ))
 }
 getProduct(theProductId:number): Observable<Product>{
  //need to build url based on product id
  const productUrl=`${this.baseUrl}/${theProductId}`;
  return this.http.get<Product>(productUrl);
 }


}
interface GetProductResponse{
  _embedded:{products:Product[]}
}
