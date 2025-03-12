import { Component } from '@angular/core';
import data from "../../../../asset/dummy-data.json";
import {DatePipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-show-transactions',
  standalone: true,
  imports: [
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './show-transactions.component.html',
  styleUrl: './show-transactions.component.scss'
})
export class ShowTransactionsComponent {

  transactions = data.DUMMY_DATA;

  constructor() {
  }


  protected readonly data = data;
}
