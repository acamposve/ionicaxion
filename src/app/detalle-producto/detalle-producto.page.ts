import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  id: any;
  producto: any;
  cantidad: number = 1;
  private baseUrl = 'https://amontefusco-002-site1.ktempurl.com/';
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerProducto();
  }
  getImageUrl(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }
  
  
  disminuirCantidad(): void {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  aumentarCantidad(): void {
    this.cantidad++;
  }
  
  obtenerProducto(): void {
    const url = `https://amontefusco-002-site1.ktempurl.com/api/Products/${this.id}`;



    this.http.get(url).subscribe((response: any) => {
    
    console.log(response);
    
      this.producto = response;
    });
  }
}