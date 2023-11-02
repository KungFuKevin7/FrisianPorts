import {Observable} from "rxjs";

export interface IServiceTemplate<T> {
  get() : Observable<T[]>;
  getById(Id : number) : Observable<T>;
  add(objectToAdd : T) : Observable<T>;
  delete(idOfItem : number) : Observable<number>;
  update(updatedObject : T) : Observable<number>;
}
