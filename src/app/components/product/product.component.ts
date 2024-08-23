import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  /* 
  any tipi ile her türlü veriyi tutabiliriz.
    product1: any = {
    productId: 1,
    productName: 'Dondurma',
    categoryId: 2,
    unitPrice: 15
  };*/
  /* 
  Angular'da API'dan veri çekmek için HttpClient kullanılır. React'te Axios kütüphanesi veya (built-in olan) Fetch kullanılır.  */

  /* 
  JS'te method'ların return tipi yoktur ama TS sayesinde void vb. şekilde return tipi belirtebiliriz. */
  /* 
  JS'te Class yapısı yoktur. Her şey methoddur. Bu yüzden aynı class ama farklı methoddan erişilecek yapılara "this" keywordü ile ulaşmak zorundayız. */

  products: Product[] = [];
  dataLoaded = false;
  message: string = '';
  filterText = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategoryId(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  /* 
  Eğer yazılan servisle ilgili component bazlı kurallar varsa subscribe işlemi component içinde yapılır. Aksi durumda subscribe kısmı da service içinde yapılır. Ama genellikle component tarafında yapılması tercih edilir.*/
  /* 
  Service'ler Observable'dır. Asenkron çalışırlar. Bu nedenle service'lerle subscribe olarak çalışılır.*/

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
      this.message = response.message;
    });
  }

  getProductsByCategoryId(categoryId: number) {
    this.productService
      .getProductsByCategoryId(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
        this.message = response.message;
      });
  }
}
