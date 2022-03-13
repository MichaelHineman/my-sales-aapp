import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from './supplier.dto';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(environment.api + 'suppliers');
  }

  public getById(id: Number): Observable<Supplier> {
    return this.http.get<Supplier>(environment.api + 'suppliers/' + id);
  }

  public save(supplier: Supplier): Observable<Supplier> {
    console.log('supplier.id?', supplier.id)
    if (supplier.id) return this.http.put<Supplier>(environment.api + 'suppliers/' + supplier.id, supplier);

    console.log('new supplier')
    return this.http.post<Supplier>(environment.api + 'suppliers', supplier);
  }

  public delete(id: number) {
    return this.http.delete(environment.api + 'suppliers/' + id);
  }
}
