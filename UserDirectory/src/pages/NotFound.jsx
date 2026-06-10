import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404 - Page Not Found</h1>
      <p>Enter an invalid route intentionally to see this page.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;