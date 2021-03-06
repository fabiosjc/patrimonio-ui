import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class ItemService {

  URL = 'http://localhost:8080/api/itens';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.URL)
  }

}
