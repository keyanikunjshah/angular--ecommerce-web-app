import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
  productService: any;
  product: any;
  
  constructor(private ps: ProductService,
    private acr: ActivatedRoute) { }


  ngOnInit() {

    this.acr.paramMap.subscribe(
      () => {
        this.getProduct();
      }

    )

  }
  
  getProduct(){
    const theProductId:number= +this.acr.snapshot.paramMap.get('id')!;
  this.productService.getProduct(theProductId).subscribe(
    (      data: any)=>{
      console.log(data)
      this.product=data;
    }
  )
}


}
