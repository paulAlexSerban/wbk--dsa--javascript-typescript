(()=>{
  // Exhaustiveness checking with never
  // involves checking a value against a type that has no members
  // this is helpful for ensuring that we have checked all possible values of a union type
  // this is also helpful for ensuring that we have checked all possible cases of a discriminated union
  // this is also helpful for ensuring that we have checked all possible cases of a switch statement
  // this is also helpful for ensuring that we have checked all possible cases of an enum

  enum Color {
    Red,
    Green,
    Blue,
    // Purple
  }

  const printColor = (color: Color) => {
    switch (color) {
      case Color.Red:
        console.log("Red");
        break;
      case Color.Green:
        console.log("Green");
        break;
      case Color.Blue:
        console.log("Blue");
        break;
      default:
        const exhaustiveCheck: never = color;
        console.log(exhaustiveCheck);
    }
  }

  printColor(Color.Red);
  printColor(Color.Green);
  printColor(Color.Blue);
  // printColor(Color.Purple);
})()