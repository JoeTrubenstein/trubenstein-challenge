import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  public query: any = '';

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Bitcoin', price: 500, cols: 4, rows: 1 },
          { title: 'Ethereum', price: 700, cols: 4, rows: 1 },
          { title: 'Cardano', price: 200, cols: 4, rows: 1 },
          { title: 'Monero', price: 600,  cols: 4, rows: 1 }
        ];
      }

      return [
        { title: 'Bitcoin', price: 500, cols: 1, rows: 1 },
        { title: 'Ethereum', price: 700, cols: 1, rows: 1 },
        { title: 'Cardano', price: 200, cols: 1, rows: 1 },
        { title: 'Monero', price: 600, cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
