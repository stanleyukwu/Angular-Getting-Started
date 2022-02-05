import { ProductService } from './product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product LIst';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  Sub!: Subscription;
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter;
    //console.log('In sette', value);
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.Sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },

      error: (err) => (this.errorMessage = err),
    });

    console.log(this._listFilter);
  }

  ngOnDestroy(): void {
    this.Sub.unsubscribe();
  }
  onRatingClicked(message: string): void {
    
  }
}
