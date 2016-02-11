import {Page, NavController} from 'ionic/ionic';
import {AddItemPage} from '../add-item/add-item';
import {DataService} from '../../../providers/data';

@Page({
  templateUrl: 'build/pages/shopping/list/list.html'
})

export class ShoppingListPage {
  constructor(nav: NavController, dataService: DataService) {
    this.nav = nav;
    this.dataService = dataService;

    this.dataService.getData().then((todos) => {
      this.items = JSON.parse(todos) || [];
    });
  }

  addItem(){
    this.nav.push(AddItemPage, {ShoppingListPage: this});
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(item);
  }
}
