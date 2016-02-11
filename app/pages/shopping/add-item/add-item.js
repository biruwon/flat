import {Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/shopping/add-item/add-item.html',
})
export class AddItemPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.item = '';
  }

  saveItem(){
    let item = this.item;

    this.navParams.get('ShoppingListPage').saveItem(item);
    this.nav.pop();
  }
}
