/* eslint-disable react/prop-types */
import "./Button.css";
export default function Button({ text, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}
