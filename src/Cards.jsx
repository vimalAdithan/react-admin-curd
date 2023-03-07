export function Cards({ user, deletebutton,editbutton,infobutton}) {
  return (
    <div>
      <div className="card">
        <div className="title">
          <p>{user.Username}</p>
        </div>
        <div className="cardinner">
          <p>{user.Password}</p>
          <p>{user.Email}</p>
          <p>{user.Dateofbirth}</p>
          <p>{user.phonenumber}</p>
        </div>
        <div className="icons">
          {infobutton}
          {editbutton}
          {deletebutton}
        </div>
      </div>
    </div>
  );
}
