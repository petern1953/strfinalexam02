import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();

  filterText: string = '';
  filterKey: string = 'title';
  sorterKey: string = '';

  constructor(private todoService: TodoService) {}

  onDeleteClick(todo: Todo) {
    let response = confirm(`Do you really want to delete todo ${todo.id}?`);
    if (response === true) {
      this.todoService.remove(todo).subscribe(() => {
        // console.log('deleted');
        this.todos$ = this.todoService.getAll();
      });
    }
  }

  onUpdateClick(todo: Todo) {
    todo.active = !todo.active;
    this.todoService.update(todo).subscribe(() => {
      // console.log('updated');
      this.todos$ = this.todoService.getAll();
    });
  }

  onCreateClick(ctrls: any) {
    // console.log(ctrls.title.pristine);
    // console.log(ctrls.description.pristine);
    this.selectedTodo.active = true;
    // console.log(this.selectedTodo);
    this.todoService.create(this.selectedTodo).subscribe(() => {
      // console.log('created');
      this.todos$ = this.todoService.getAll();
      this.selectedTodo = new Todo();
      ctrls.title.pristine = true;
      ctrls.description.pristine = true;
    });
  }

  onSortClick() {
    this.sorterKey = 'title';
  }
}
