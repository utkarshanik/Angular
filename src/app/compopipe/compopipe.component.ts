import { Component } from '@angular/core';
import { CurrencyconverterPipe } from '../pipe/currencyconverter.pipe';

@Component({
  selector: 'app-compopipe',
  imports: [CurrencyconverterPipe],
  templateUrl: './compopipe.component.html',
  styleUrl: './compopipe.component.css'
})
export class CompopipeComponent {
money=100;
}
