import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

const initialState = {
  count: 0,
  _count2: 0,
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ count }) => ({
    doubleCount: computed(() => count() * 2),
  })),
  withMethods((store) => ({
    increment: () => {
      patchState(store, (state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
      patchState(store, (state) => ({ count: state.count - 1 }));
    },
    update: (value: number) => {
      patchState(store, (state) => ({ count: value }));
    },
    reset: () => {
      patchState(store, (state) => ({ count: 0 }));
    },
  }))
);
