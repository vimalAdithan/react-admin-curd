import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import { Cards } from "./Cards";
import { useNavigate } from "react-router-dom";


export function TeacherList({ staff, setStaff }) {
  const navigate = useNavigate();

  const handleEdit = (usr) => {
    localStorage.setItem("User", usr.Username);
    localStorage.setItem("Password", usr.Password);
    localStorage.setItem("Emailid", usr.Email);
    localStorage.setItem("Dob", usr.Dateofbirth);
    localStorage.setItem("Phno", usr.phonenumber);
  };

  const deleteCard = (index) => {
    staff.splice(index, 1);
    setStaff(staff);
    navigate("/teacher");
  };

  return (
    <div>
      <div className="addbtn">
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/teacher/add")}
        >
          Add Staff
        </Button>
      </div>
      <div className="useritems">
        {staff.map((usr, index) => (
          <Cards
            key={index}
            user={usr}
            id={index}
            deletebutton={<IconButton onClick={() => deleteCard(index)}>
              <DeleteIcon />
            </IconButton>}
            editbutton={<IconButton
              onClick={() => {
                navigate(`/teacher/edit/${index}`);
                handleEdit(usr);
              }}
            >
              <CreateIcon />
            </IconButton>}
            infobutton={<IconButton onClick={() => navigate(`/teacher/${index}`)}>
            <InfoIcon />
          </IconButton>}
            />
        ))}
      </div>
    </div>
  );
}
