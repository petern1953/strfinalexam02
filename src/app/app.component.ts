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

  constructor(private todoService: TodoService) {}

  onDeleteClick(todo: Todo) {
    let response = confirm(`Do you really want to delete todo ${todo.id}?`);
    if (response === true) {
      this.todoService.remove(todo).subscribe(() => {
        console.log('deleted');
        this.todos$ = this.todoService.getAll();
      });
    }
  }
}
