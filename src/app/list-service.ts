import { Injectable } from '@angular/core';
import { ListComponent } from '../app/list/list.component';
import { list } from './list';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class ListService {
    private list$$: BehaviorSubject<list[]> = new BehaviorSubject<list[]>([]);
    public readonly list$: Observable<list[]> = this.list$$.asObservable();
    arrayOfToDos: list[] = [];
    addToList(recievedString: string){
        this.arrayOfToDos.push({
            id: this.arrayOfToDos.length + 1,
            text: recievedString,
            done: false
        });
    this.list$$.next(this.arrayOfToDos);
    console.log("Array",this.arrayOfToDos);
    }

    deleteUser(id: number){
        
        const indexOfRecordToDelete =  this.arrayOfToDos.map(list => list.id).indexOf(id);
        console.log('xaxa delete', indexOfRecordToDelete, this.arrayOfToDos);
        
        this.arrayOfToDos.splice(indexOfRecordToDelete, 1);
        console.log('xaxa2', this.arrayOfToDos);
        this.list$$.next(this.arrayOfToDos);


    }

    

}