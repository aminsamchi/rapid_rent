import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  apiURL ="http://localhost/rapidrent/client/cars/";
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.apiURL+'list-cars.php');
  }

  create(){

  }
}
