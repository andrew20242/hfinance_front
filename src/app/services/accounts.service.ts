import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Account } from '../types/account.type';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private readonly baseURL = '/accounts'
  private readonly API_URL = environment.API_URL + environment.API_VERSION + this.baseURL

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Account[]>(this.API_URL)
  }
}
