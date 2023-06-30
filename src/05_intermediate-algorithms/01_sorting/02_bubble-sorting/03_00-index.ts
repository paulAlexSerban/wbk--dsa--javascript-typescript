import { NumbersCollection } from "./03_02-NumbersCollection";
import { CharactersCollection } from "./03_03-CharactersCollection";
import { LinkedList } from "./03_04-LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 50, 100, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
    "Xaaybasdasdasdasadasdsdasdqwerfdscvbnjhgfvbjuytffghytreswertyuiolkmnbvcxz"
);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.add(0);
linkedList.add(-1);
linkedList.sort();
linkedList.print();
