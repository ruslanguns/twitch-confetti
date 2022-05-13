import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ul>
        <Link to="/confetti">
          <li>Confetti App</li>
        </Link>
        <Link to="/stars-paradax">
          <li>Animated Background: Stars Paradax</li>
        </Link>
      </ul>
    </div>
  );
};
export default App;
