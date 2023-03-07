import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import InfoIcon from "@mui/icons-material/Info";

import Button from "@mui/material/Button";
import { Cards } from "./Cards";
import { useNavigate } from "react-router-dom";

export function StudentList({ list, setList }) {
  const navigate = useNavigate();

  const handleEdit = (usr) => {
    localStorage.setItem("User", usr.Username);
    localStorage.setItem("Password", usr.Password);
    localStorage.setItem("Emailid", usr.Email);
    localStorage.setItem("Dob", usr.Dateofbirth);
    localStorage.setItem("Phno", usr.phonenumber);
  };

  const deleteCard = (index) => {
    list.splice(index, 1);
    setList(list);
    navigate("/student");
  };

  return (
    <div>
      <div className="addbtn">
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/student/add")}
        >
          Add Student
        </Button>
      </div>
      <div className="useritems">
        {list.map((usr, index) => (
          <Cards
            key={index}
            user={usr}
            id={index}
            deletebutton={
              <IconButton onClick={() => deleteCard(index)}>
                <DeleteIcon />
              </IconButton>
            }
            editbutton={
              <IconButton
                onClick={() => {
                  navigate(`/student/edit/${index}`);
                  handleEdit(usr);
                }}
              >
                <CreateIcon />
              </IconButton>
            }
            infobutton={
              <IconButton onClick={() => navigate(`/student/${index}`)}>
                <InfoIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
