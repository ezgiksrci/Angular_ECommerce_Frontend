import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

// Uygulamadaki rotaları (yönlendirmeleri) tanımlayan bir dizi oluşturuyoruz.
const routes: Routes = [
  // Ana sayfa yoluna ('') gidildiğinde, ProductComponent'i yükler.
  // pathMatch: 'full', bu yolun tamamen eşleşmesini gerektirir.
  { path: '', pathMatch: 'full', component: ProductComponent },

  // '/products' yoluna gidildiğinde, yine ProductComponent'i yükler.
  { path: 'products', component: ProductComponent },

  // '/products/category/:categoryId' yoluna gidildiğinde,
  // belirli bir kategoriye ait ürünleri göstermek için ProductComponent'i yükler.
  // :categoryId, dinamik bir parametredir, yani farklı kategori ID'leri bu rotada kullanılabilir.
  { path: 'products/category/:categoryId', component: ProductComponent },

  // '/products/add' yoluna gidildiğinde, ProductAddComponent'i yükler.
  // Bu sayfada yeni bir ürün ekleme formu gösterilir.
  { path: 'products/add', component: ProductAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // routes dizisini uygulamaya dahil eder, uygulama rotalarını ayarlar.
  exports: [RouterModule], // RouterModule'ü dışa aktarır, böylece bu modül diğer modüller tarafından kullanılabilir.
})
export class AppRoutingModule {}
