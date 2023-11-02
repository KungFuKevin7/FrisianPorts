import {Observable} from "rxjs";

export interface IServiceTemplate<T> {
  get() : Observable<T[]>;
  getById(Id : number) : Observable<T>;
  add(objectToAdd : T) : T;
  delete(idOfItem : number) : number;
  update(updatedObject : T) : number;
}
