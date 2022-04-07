import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  createProduct(payload: any) {
    const baseUrl = "http://localhost:3000/products"
    return this.http.post(baseUrl, payload)
  }
  viewProduct(productId: any) {
    const baseUrl = "http://localhost:3000/product/" + productId
    return this.http.get(baseUrl)
  }
  updateProduct(productId: any, payload: any) {
    const baseUrl = "http://localhost:3000/product/" + productId
    return this.http.put(baseUrl, payload)
  }
  deleteProduct(productId: any) {
    const baseUrl = "http://localhost:3000/product/" + productId
    return this.http.delete(baseUrl)
  }
  searchCatProduct(categoryId: any) {
    const baseUrl = "http://localhost:3000/product/category=" + categoryId
    return this.http.get(baseUrl)
  }
  searchDateProduct(dateparam: any) {
    const baseUrl = "http://localhost:3000/product/date=" + dateparam
    return this.http.get(baseUrl)
  }
}

