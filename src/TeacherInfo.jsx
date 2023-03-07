import { useParams } from "react-router-dom";

export function TeacherInfo({ staff }) {
  const { id } = useParams();
  const Staff = staff[id];
  return (
    <div className="userdetails">
      <div className="card">
        <div className="title">
          <p>Name: {Staff.Username}</p>
        </div>
        <div className="cardinner">
          <p><b>Password:</b> {Staff.Password}</p>
          <p><b>Email:</b> {Staff.Email}</p>
          <p><b>Date of birth:</b> {Staff.Dateofbirth}</p>
          <p><b>phone number:</b> {Staff.phonenumber}</p>
        </div>
      </div>
    </div>
  );
}
