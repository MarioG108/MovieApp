import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => {
      history.push("/")
    }, 3000);
  })
  return (
    <div className="center">
      <h2><code>404 Page Not Found</code></h2>
      <h3>Redirecting...</h3>
    </div>
  );
}

export default NotFound;