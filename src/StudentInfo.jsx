import { useParams } from "react-router-dom";

export function StudentInfo({list}) {
  const { id } = useParams();
  return (
    <div className="userdetails">
      <div className="card">
        <div className="title">
          <p>Name: {list[id].Username}</p>
        </div>
        <div className="cardinner">
          <p><b>Password:</b> {list[id].Password}</p>
          <p><b>Email:</b> {list[id].Email}</p>
          <p><b>Date of birth:</b> {list[id].Dateofbirth}</p>
          <p><b>phone number:</b> {list[id].phonenumber}</p>
        </div>
      </div>
    </div>
  );
}
