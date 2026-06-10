import { Navigate } from "react-router-dom";

function Home() {
  // Home page direct ga Login ki redirect chestundi
  return <Navigate to="/login" />;
}

export default Home;