/* eslint-disable react/prop-types */
import "./UserProfile.css";
export default function UserProfile({ img, name, age, email, children }) {
  return (
    <div className="card">
      {img ? (
        <img className="profile-img" src={img} alt="profile" />
      ) : (
        "Image not found"
      )}
      {name ? <p className="info">{name}</p> : <p>Name not found</p>}
      {age ? <p className="info">{age}</p> : <p>Age not found</p>}
      {email ? <p className="info">{email}</p> : <p>Email not found</p>}
      {children}
    </div>
  );
}
