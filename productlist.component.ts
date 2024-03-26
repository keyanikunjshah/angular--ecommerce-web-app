import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component grid.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductListComponent {
 
  products: Product[] = [];

  currentCategoryId:number=0;
  ProductService: any;
  
  

 
  constructor(private ps: ProductService,
    private acr: ActivatedRoute) { }


  ngOnInit() {

    this.acr.paramMap.subscribe(
      () => {
        this.getProducts();
      }

    )

  }

  getProducts() {

    const hasCategoryId = this.acr.snapshot.paramMap.has('id');
    

    if(hasCategoryId){
      //readkarlo
      this.currentCategoryId = +this.acr.snapshot.paramMap.get('id')!;


    }else{
      this.currentCategoryId=1;
    

    }
    console.log('apna dynamic category '+this.currentCategoryId);



    this.ps.getListProduct(this.currentCategoryId).subscribe(

      data => {

        console.log(data);

        this.products = data;

        console.log(this.products);

      }

    );
    

  }
  

}