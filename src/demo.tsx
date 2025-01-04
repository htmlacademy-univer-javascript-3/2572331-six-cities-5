     // lodash
     import { memoize } from 'lodash';

     const expensiveCalculation = (x) => {
       console.log('Выполнение сложной операции');
       return x * x;
     };

     const memoizedCalculation = memoize(expensiveCalculation);

     console.log(memoizedCalculation(5));
     console.log(memoizedCalculation(5));



     // memoize-one
     import memoizeOne from 'memoize-one';

     const add = (a, b) => {
       console.log('Вычисление');
       return a + b;
     };

     const memoizedAdd = memoizeOne(add);

     console.log(memoizedAdd(1, 2));
     console.log(memoizedAdd(1, 2));



     // reselect
     import { createSelector } from 'reselect';

     const selectItems = (state) => state.items;
     const selectFilter = (state) => state.filter;

     const selectFilteredItems = createSelector(
       [selectItems, selectFilter],
       (items, filter) => {
         console.log('Фильтрация данных');
         return items.filter((item) => item.includes(filter));
       }
     );

     const state = { items: ['apple', 'banana'], filter: 'a' };
     console.log(selectFilteredItems(state));
     console.log(selectFilteredItems(state));



     // fast-memoize
     import memoize from 'fast-memoize';

     const multiply = (a, b) => {
       console.log('Вычисление');
       return a * b;
     };

     const memoizedMultiply = memoize(multiply);

     console.log(memoizedMultiply(2, 3));
     console.log(memoizedMultiply(2, 3));



     // proxy-memoize
     import { createProxy } from 'proxy-memoize';

     const state = { a: 1, b: 2 };

     const memoizedSelector = createProxy((state) => state.a + state.b);

     console.log(memoizedSelector(state));
     console.log(memoizedSelector(state));






     // React.memo
     function Greeting({ name }) {
        return (<h1>Hello, {name}!</h1>);
    });

    export default React.memo(Greeting);



    // useCallback
    import React, { useState, useCallback } from 'react';

    const Counter = React.memo(({ increment }) => {
      console.log('Counter рендерится');
      return <button onClick={increment}>Увеличить</button>;
    });

    const App = () => {
      const [count, setCount] = useState(0);

      const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
      }, []);

      return (
        <div>
          <div>Счетчик: {count}</div>
          <Counter increment={increment} />
        </div>
      );
    };

    export default App;



    // useMemo
    import React, { useState, useMemo } from 'react';

    const App = () => {
      const [count, setCount] = useState(0);
      const [multiplier, setMultiplier] = useState(2);

      const expensiveCalculation = useMemo(() => {
        console.log('Выполняется сложное вычисление');
        return count * multiplier;
      }, [count, multiplier]);

      return (
        <div>
          <div>Результат: {expensiveCalculation}</div>
          <button onClick={() => setCount(count + 1)}>Увеличить счетчик</button>
          <button onClick={() => setMultiplier(multiplier + 1)}>Изменить множитель</button>
        </div>
      );
    };

    export default App;