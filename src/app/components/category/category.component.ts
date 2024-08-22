import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  emptyCategory: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
    console.log(this.currentCategory);
  }

  clearCurrentCategory() {
    this.currentCategory = this.emptyCategory;
  }

  getCurrentCategory() {
    return this.currentCategory;
  }

  getCategoryItemStyle(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllProductsItemStyle() {
    if (this.currentCategory) {
      return 'list-group-item';
    } else {
      return 'list-group-item active';
    }
  }
}
