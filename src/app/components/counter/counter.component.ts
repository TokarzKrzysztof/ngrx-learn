import { Component, inject, Signal } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/counter/counter.actions';
import { AsyncPipe } from '@angular/common';
import { BooksStore } from '../../store/signalStore';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly store = inject(BooksStore);
  // count: Signal<number>

  // constructor(private store: Store<{ count: number }>) {
  //   this.count = store.selectSignal((state) => state.count);
  // }

  // increment() {
  //   this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }

  // reset() {
  //   this.store.dispatch(reset());
  // }
}
