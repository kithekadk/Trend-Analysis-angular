import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getCompanies(){
    return this.http.get<any>('https://data.nasdaq.com/api/v3/datasets.json?api_key=VtGYrpxTxY6oZsYMcu3V').pipe(
      map(res=>{
        const data= res.datasets
        return data
      })
    )
  }
  getOneCompany(){
    return this.http.get<any>('https://data.nasdaq.com/api/v3/datasets/OPEC/ORB.json?api_key=VtGYrpxTxY6oZsYMcu3V').pipe(
      map(res=>{
        const companyName=res.dataset.name
        const price=res.dataset.data
        const data= [companyName,price]
        // console.log(data);
        return data
      })
    )
  }
}
