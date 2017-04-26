import { Component, OnInit, Inject } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import { AppState } from '../app.reducer';
import * as ListActions from '../list/list.actions';
import axios from 'axios';

@Component({
  selector: 'app-muscle-list',
  templateUrl: './muscle-list.component.html',
  styleUrls: ['./muscle-list.component.css']
})
export class MuscleListComponent implements OnInit {

  // I wouild have liked to have seen an array of muscles here and then you use an ngFor in your
  // html file to display that content.
  // <button type='button' class='btn btn-default' (click)='handleListClicked($event.target.innerText)'>{{muscle.name}}</button>
  // all those lines are the same. 👆🏾
  // that would have required you use a model for the muscles.

  constructor(@Inject(AppStore) private store: Store<AppState>) {
  }

  getAllExercises(inputMuscle) {
    const apiUrl = 'http://paolitaclo-routinegenerator.herokuapp.com/api/exercises';
    return axios
    .get(apiUrl)
    .then((response) => {
      inputMuscle.split('-').join(' ')
      let array = response.data.filter((exercise) => {
        if (exercise.muscle.name === inputMuscle) {
          return exercise
        }
      })
      return array
    })
  }

  handleListClicked(muscle) {
    this.getAllExercises(muscle).then((result) => {
      this.store.dispatch(ListActions.doSearch(result));
    })
  }

  ngOnInit() {
  }

}
