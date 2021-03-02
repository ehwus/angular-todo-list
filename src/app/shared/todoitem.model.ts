export class TodoItem {
  private static NEXT_ID = 0;
  public id: number;

  constructor(public task: string) {
    this.id = TodoItem.NEXT_ID;
    TodoItem.NEXT_ID++;
  }
}
