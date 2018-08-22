/**
 * He has the general list actions so he's the Generalist!
 */
export class Generalist {
  public n: number[];

  public push(n): Array<number> {
    return n;
  }

  public pop(n): Array<number> {
    return n;
  }
}

/**
 * Last In First Out
 */
export class StackList extends Generalist {
  super(n) {
    n = [9, 0, 5, 2, 2, 7, 1, 2, 7, 2];
  }

  public push(n) {
    console.log(n); /* ? */
    return n; /* n? */
  }
  public pop(n) {
    return n;
  }
}
