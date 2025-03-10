import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-expense',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
  choices = ['housing', 'transportation', 'food & groceries', 'health and insurance', 'entertainment', 'clothing', 'vacations', 'other'];
  selectedOption = this.choices[0];
}
