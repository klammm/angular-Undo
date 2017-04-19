import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import { AppState } from '../app.reducer';
import { List } from '../list/list.model'


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  @Input() value: List;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
  }

  ngOnInit() {
  }

}
