import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup; // Ürün ekleme formunu temsil eden bir form grubunu tanımlar.

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastr: ToastrService
  ) {} // FormBuilder'i kullanarak form oluşturabilmek için bir servis enjekte eder.

  ngOnInit(): void {
    // Bu bileşen başlatıldığında (ngOnInit), ürün ekleme formunun oluşturulması için createProductAddForm fonksiyonunu çağırır.
    this.createProductAddForm();
  }

  // Bu fonksiyon, ürün ekleme formunu oluşturur ve her bir form alanı için validasyon (doğrulama) kurallarını belirler.
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required], // ['default deger', validation kurallari]
      categoryId: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
    });
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel: Product = Object.assign({}, this.productAddForm.value);

      this.productService.add(productModel).subscribe({
        next: (response) => {
          this.toastr.success(response.message);
        },
        error: (responseError) => {
          if (responseError.error && responseError.error.Errors) {
            responseError.error.Errors.forEach(
              (error: { ErrorMessage: any }) => {
                this.toastr.error(error.ErrorMessage);
              }
            );
          } else {
            this.toastr.error(responseError.error.message);
          }
        },
        complete: () => {
          console.log('Request completed');
        },
      });
    } else {
      this.toastr.error('Please check the input fields.');
    }
  }
}
