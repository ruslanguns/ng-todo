import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  HostListener
} from '@angular/core';
import { listItemModel } from '../list-item-model';
import { ToastrService } from 'ngx-toastr';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [trigger('bounce', [transition('* => *', useAnimation(bounce))])]
})
export class ListComponent implements AfterViewInit {
  bounce: any;
  item = '';
  listItems: listItemModel[] = [];
  buttonname = 'Add Item';

  constructor(private toastr: ToastrService) {}

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    if (typeof localStorage !== 'undefined') {
      this.updateState();
    }
  }

  ngAfterViewInit() {
    if (typeof localStorage !== 'undefined') {
      this.listItems = JSON.parse(localStorage.getItem('listItems')) || [];
    }
  }

  addItem() {
    if (this.item == '') {
      this.toastr.error('Please Enter an Item', 'Uh Oh!', {
        timeOut: 1200
      });
    } else {
      const randomId = Math.floor(100000 + Math.random() * 900000);
      const newItem = new listItemModel(this.item, false, randomId);
      this.listItems.push(newItem);
      this.updateState();
      if (this.buttonname == 'Edit Item') {
        this.toastr.success('Item: ' + this.item, 'Item Edited!', {
          timeOut: 1500
        });
      } else {
        this.toastr.success('Item: ' + this.item, 'Item Added!', {
          timeOut: 1500
        });
      }
      this.item = '';
      this.buttonname = 'Add Item';
    }
  }

  deleteItemFromList(item: any) {
    this.toastr.info(item.itemName + ' deleted from list', 'Awesome!', {
      timeOut: 1500
    });
    this.listItems = this.listItems.filter(itemID => itemID.id !== item.id);
    this.updateState();
  }

  editItem(item: any) {
    this.item = item.itemName;
    this.buttonname = 'Edit Item';
    this.listItems = this.listItems.filter(itemID => itemID.id !== item.id);
    this.updateState();
  }

  private updateState(): void {
    localStorage.setItem('listItems', JSON.stringify(this.listItems));
  }
}
