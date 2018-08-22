/**
 * @file Task given by Mike! Explore stack and queue types.
 */

/**
 * He has the general list actions so he's the Generalist!
 */
export class Generalist {
  public n: number[];

  public push(n, x): Array<number> {
    return n;
  }

  public pop(n, x): Array<number> {
    return n;
  }
}

/**
 * Last In First Out : Plates!
 */
export class StackList extends Generalist {
  super(n) {
    n = [9, 0, 5, 2, 2, 7, 1, 2, 7, 2];
  }

  public push(n, x) {
    return [...n, x];
  }
  public pop(n, x) {
    return n;
  }
}
const y = [9, 0, 5, 2, 2, 7, 1, 2, 7, 2];
const stack = new StackList();
const newOne = stack.push(y, 4);
console.log(newOne);

// StackList.push(n);

/**
 * First In First Out : Circle!
 */
export class QueueList extends Generalist {
  super(n) {
    n = [1, 2, 3, 4, 5, 6];
  }

  public push(n, x) {
    return [x, ...n];
  }

  public pop(n, x) {
    return n;
  }
}
