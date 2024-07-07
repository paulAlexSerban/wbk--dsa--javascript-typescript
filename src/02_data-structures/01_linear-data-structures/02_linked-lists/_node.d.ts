export interface INode {
    value: any;
    next: INode | null;
}

export class Node implements INode {
    value: any;
    next: INode | null;
  
    constructor(val: any) {
      this.value = val;
      this.next = null;
    }
  }
  