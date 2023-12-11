(() => {
  /**
   * Interface
   */
    interface Sum {
        first: number;
        second: number;
    }

    const addTwoNumbers = (params: Sum) => {
        return params.first + params.second;
    };

    const result = addTwoNumbers({
        first: 2,
        second: 4,
    });

    console.log(result);
})();

(() => {
    type Sum = {
        first: number;
        second: number;
    };

    const addTwoNumbers = (params: Sum) => {
        return params.first + params.second;
    };

    const result = addTwoNumbers({
        first: 2,
        second: 4,
    });

    console.log(result);
})();

(() => {
    const addTwoNumbers = (params: { first: number; second: number }) => {
        return params.first + params.second;
    };

    const result = addTwoNumbers({
        first: 2,
        second: 4,
    });

    console.log(result);
})();

(() => {
    const addTwoNumbers = ({ first, second }: { first: number; second: number }) => {
        return first + second;
    };

    const result = addTwoNumbers({
        first: 2,
        second: 4,
    });

    console.log(result);
})();
