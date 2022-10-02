import { Link } from "react-router-dom";

function Other() {
  return (
    <div>
      <a href="https://ldx.no">ldx.no link :)</a>
      <Link to={"/"}>Home</Link>
      <a href="/">Root page</a>
    </div>
  );
}

export default Other;
