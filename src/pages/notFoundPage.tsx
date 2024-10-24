import { Link } from 'react-router-dom';

export function CreateNotFoundPage(): JSX.Element {
  return(
    <div style={{marginTop: '20%', textAlign: 'center'}}>
      <h1>
        404
        <br />
        <small>Page not found</small>
      </h1>
      <Link to='/' style={{ color: '#4481C3' }}>Go to main page</Link>
    </div>
  );
}
