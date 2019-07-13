export class listItemModel {
  public itemName: string;
  public isChecked: boolean;
  public id: number;

  constructor(a, b, c) {
    this.itemName = a;
    this.isChecked = b;
    this.id = c;
  }
}
