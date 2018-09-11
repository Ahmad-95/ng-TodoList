import { Component, OnInit } from '@angular/core';
import { ListService } from '../list-service';
import { list } from '../list';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(public listService: ListService) { }

  ngOnInit() {
  }


  onAdd(enteredString: string){
    this.listService.addToList(enteredString);
  }
  onDelete(id: number){
    this.listService.deleteUser(id);
  }



}


