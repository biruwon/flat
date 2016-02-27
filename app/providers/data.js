import {Storage, SqlStorage} from 'ionic/ionic';
import {Injectable} from 'angular2/core';

@Injectable()
export class DataService{
  constructor(){

    this.storage = new Storage(SqlStorage, {name: 'item'});
    this.data = [];

    this.storage.get('items').then((todos) =>{
      this.data = JSON.parse(todos);
    })
  }

  getData(){
    return this.storage.get('items');
  }

  save(item){
    if(!this.data){
      this.data = [item];
      let items = JSON.stringify(item);
      this.storage.set('items', items);
    } else {
        this.data.push(item);
        let items = JSON.stringify(this.data);
        this.storage.set('items', items);
    }
  }

  remove(item){
    var elementToRemove = this.data.indexOf(item);
    this.data.splice(elementToRemove, 1);
    let items = JSON.stringify(this.data);
    this.storage.set('items', items);
  }
}
