import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from '@hed/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'hed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hello$ = this.http.get<Message>('/api/hello');

  items$: Observable<Message[]>;

  form = new FormGroup({
    message: new FormControl('')
  });

  constructor(
    private http: HttpClient
  ) {
    this.refreshItems();
  }

  refreshItems() {
    this.items$ = this.http.get<Message[]>('/api/items');
  }
  removeItem(index: number) {
    this.http.delete(`/api/items/${index}`)
      .subscribe((result) => {
        console.log(result)
        this.refreshItems();
      })
  }
  onSubmit() {
    console.log(this.form.value);
    this.http.post('/api/items', this.form.value)
      .subscribe(result => {
        console.log(result)
        this.refreshItems();
      })
  }
}
