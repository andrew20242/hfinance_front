import { Component, inject } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Observable } from 'rxjs';
import { Account } from '../../types/account.type';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {

  accountService = inject(AccountsService)
  accounts$: Observable<Account[]> = this.accountService.getAll()
}
