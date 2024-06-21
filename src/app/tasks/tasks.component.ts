import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() name?: string;
  @Input() id?: string;
  @Input({required: true}) userId!:string;
  isAddingTask =false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask= true;
  }

  onCloseAddTask(){
    this.isAddingTask=false;
  }

}