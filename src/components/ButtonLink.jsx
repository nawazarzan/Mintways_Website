import { Link } from "react-router-dom";
import "./ButtonLink.css";

export default function ButtonLink({ to, text }) {
  return (
    <div className="btnn-wrapper">
      <Link to={to} className="btnn">
        {text}
      </Link>
    </div>
  );
}