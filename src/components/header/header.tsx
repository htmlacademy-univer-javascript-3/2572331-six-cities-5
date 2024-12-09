import { AppRoute } from '../../consts/const';
import { useAppDispatch } from '../../hooks';
import { getEmail, getToken } from '../../services/auth-storage';
import { logoutAction } from '../../store/api-actions';

export function Header() : JSX.Element {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            {getToken()
              ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{getEmail()}</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" onClick={() => handleLogout()}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
              :
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a className="header__nav-link" href={AppRoute.Login}>
                    <span className="header__sign">Sign in</span>
                  </a>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}
