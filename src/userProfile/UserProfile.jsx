/* eslint-disable react/prop-types */
import "./UserProfile.css";
export default function UserProfile({ img, name, age, email, children }) {
  return (
    <div className="card">
      <img className="profile-img" src={img} alt="profile" />
      <p className="info">{name}</p>
      <p className="info">{age}</p>
      <p className="info">{email}</p>
      {children}
    </div>
  );
}