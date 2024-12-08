import { useState } from 'react';
import { SORTING_ALGORITHMS } from '../../consts/sortingAlgorithms';

type SortingProps = {
  sortingIndex: number;
  setSorting: (sortingIndex: number) => void;
}

export function Sorting({sortingIndex, setSorting} : SortingProps): JSX.Element {
  const [isVisible, setVisibility] = useState<boolean>(false);

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setVisibility(!isVisible)}>
        {SORTING_ALGORITHMS[sortingIndex].name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${isVisible ? '--opened' : ''}`}>
        {SORTING_ALGORITHMS.map((sortingAlgorithm, index) =>
          (
            <li className={`places__option places__option${index === sortingIndex ? '--active' : ''}`}
              tabIndex={0}
              key={sortingAlgorithm.name}
              onClick={() => {
                setSorting(index);
                setVisibility(false);
              }}
            >
              {sortingAlgorithm.name}
            </li>
          )
        )}
      </ul>
    </form>
  );
}
