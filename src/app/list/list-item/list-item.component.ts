import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { listItemModel } from "src/app/list-item-model";
import { trigger, transition, useAnimation } from "@angular/animations";
import { jello } from "ng-animate";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"],
  animations: [trigger("jello", [transition("* => *", useAnimation(jello))])]
})
export class ListItemComponent implements OnInit {
  jello: any;
  @Input() listItem: listItemModel;
  @Output() deletedItem = new EventEmitter<any>();
  @Output() editItem = new EventEmitter<any>();
  todoItem: String = "#fff2e0";
  deleteHidden: boolean = true;
  constructor() {}

  ngOnInit() {}

  onItemClick(item: listItemModel) {}

  onCompleteIconClick() {
    if (this.todoItem === "#fff2e0") {
      this.todoItem = "#c4faac";
    } else {
      this.todoItem = "#fff2e0";
    }
  }

  onDeleteIconClick() {
    if (this.todoItem === "#fff2e0") {
      this.todoItem = "#ff9c9c";
      this.deleteHidden = !this.deleteHidden;
    } else {
      this.todoItem = "#fff2e0";
      this.deleteHidden = !this.deleteHidden;
    }
  }

  onDelete(listItem) {
    this.deletedItem.emit(listItem);
  }
  onEditIconClick(listItem){
    this.editItem.emit(listItem);

  }
}
