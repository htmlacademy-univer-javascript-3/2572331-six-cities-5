import {useAppSelector} from '../../hooks';
import { getError } from '../../store/main-data/selectors';
import './error-message.css';

export function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}
