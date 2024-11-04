import { Component, inject } from '@angular/core';
import { BooksStore } from '../../store/signalStore';

@Component({
  selector: 'app-another',
  standalone: true,
  imports: [],
  templateUrl: './another.component.html',
  styleUrl: './another.component.scss'
})
export class AnotherComponent {
  readonly store = inject(BooksStore);
}
