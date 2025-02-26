import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {IncomeComponent} from "./income/income.component";
import {ExpenseComponent} from "./expense/expense.component";
import {ShowTransactionsComponent} from "./show-transactions/show-transactions.component";
import {ShowExpensesComponent} from "./show-expenses/show-expenses.component";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    RouterOutlet,
    IncomeComponent,
    ExpenseComponent,
    ShowTransactionsComponent,
    ShowExpensesComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
