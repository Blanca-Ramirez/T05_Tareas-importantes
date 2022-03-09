import { Component } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public impTasks: string[];
  public task: string;

  constructor(private taskService: TaskserviceService) {
    this.impTasks = this.taskService.getImportantTasks();
    this.task = '';
  }

  public unImportant(pos: number){
    this.taskService.unImportant(pos);
    this.impTasks = this.taskService.getImportantTasks();
  }

}
