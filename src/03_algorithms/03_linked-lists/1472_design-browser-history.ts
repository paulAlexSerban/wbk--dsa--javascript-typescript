/**
 * To implement the BrowserHistory class, we can use two stacks to manage the back and forward history
 * efficiently. Here's a step-by-step approach to design this class:
 *
 * Initialization: When the BrowserHistory object is initialized with a homepage, we set the current
 * page to the homepage and initialize empty stacks for back and forward history.
 *
 * Visit: When visiting a new URL, we push the current page onto the back stack and set the current page
 * to the new URL. We also clear the forward stack because visiting a new URL should remove any forward history.
 *
 * Back: To move back in history, we need to check if we can move back the requested number of steps.
 * For each step, we push the current page onto the forward stack and pop a page from the back stack to
 * make it the current page. If we run out of history in the back stack before taking all requested steps, we stop.
 *
 * Forward: To move forward in history, we follow a similar process as moving back. For each step, we push
 * the current page onto the back stack and pop a page from the forward stack to make it the current page.
 * If we run out of forward history, we stop.
 */

export class BrowserHistory {
  private current: string;
  private backStack: string[];
  private forwardStack: string[];

  constructor(homepage: string) {
    this.current = homepage;
    this.backStack = [];
    this.forwardStack = [];
  }

  visit(url: string): void {
    this.backStack.push(this.current);
    this.current = url;
    this.forwardStack = []; // Clear forward history
  }

  back(steps: number): string {
    while (steps > 0 && this.backStack.length > 0) {
      this.forwardStack.push(this.current);
      this.current = this.backStack.pop()!;
      steps--;
    }
    return this.current;
  }

  forward(steps: number): string {
    while (steps > 0 && this.forwardStack.length > 0) {
      this.backStack.push(this.current);
      this.current = this.forwardStack.pop()!;
      steps--;
    }
    return this.current;
  }
}

/**
 * Explanation:
 *
 * Constructor: Initializes the BrowserHistory with the homepage, sets the current page,
 * and initializes the back and forward stacks.
 * Visit: Adds the current page to the back stack, sets the new URL as the current page,
 * and clears the forward stack.
 * Back: Moves the current page to the forward stack and pops from the back stack to
 * update the current page, stopping when there are no more steps or back history left.
 * Forward: Moves the current page to the back stack and pops from the forward stack to
 * update the current page, stopping when there are no more steps or forward history left.
 * This design ensures efficient management of browser history and provides a
 * straightforward implementation for the required functionality.
 */

interface HistoryEntry {
  url: string;
  prev: HistoryEntry | null;
  next: HistoryEntry | null;
}

export class BrowserHistoryFastest {
  current: HistoryEntry;

  constructor(homepage: string) {
    this.current = { url: homepage, prev: null, next: null };
  }

  visit(url: string): void {
    const newEntry = { url, prev: this.current, next: null };
    this.current.next = newEntry;
    this.current = newEntry;
  }

  back(steps: number): string {
    let entry = this.current;
    for (let i = 0; i < steps; i++) {
      if (!entry.prev) break;
      entry = entry.prev;
    }
    this.current = entry;
    return entry.url;
  }

  forward(steps: number): string {
    let entry = this.current;
    for (let i = 0; i < steps; i++) {
      if (!entry.next) break;
      entry = entry.next;
    }
    this.current = entry;
    return entry.url;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
