import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function StudentEdit({ ucard}) {
  return ucard ? <EditStudentForm card={ucard} /> : <h1>Loading...</h1>;
}

function EditStudentForm({ card }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [emailid, setEmailid] = useState("");
  const [dob, setDob] = useState("");
  const [phno, setPhno] = useState("");
  let ucard = card[id];

  const addStudent = (e) => {
    e.preventDefault();
    ucard.Username = user;
    ucard.Password = password;
    ucard.Email = emailid;
    ucard.Dateofbirth = dob;
    ucard.phonenumber = phno;
    navigate("/student");
  };

  useEffect(() => {
    setUser(localStorage.getItem("User"));
    setPassword(localStorage.getItem("Password"));
    setEmailid(localStorage.getItem("Emailid"));
    setDob(localStorage.getItem("Dob"));
    setPhno(localStorage.getItem("Phno"));
  }, []);

  return (
    <div>
      <div className="full">
        <Box>
          <form className="wrap">
            <TextField
              id="outlined-error-helper-text"
              label="UserID"
              size="small"
              defaultValue={ucard.Username}
              onChange={(event) => setUser(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Password"
              size="small"
              defaultValue={ucard.Password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="EmailID"
              size="small"
              defaultValue={ucard.Email}
              onChange={(event) => setEmailid(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Date of Birth"
              size="small"
              defaultValue={ucard.Dateofbirth}
              onChange={(event) => setDob(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Ph.no"
              size="small"
              defaultValue={ucard.phonenumber}
              onChange={(event) => setPhno(event.target.value)}
            />
            <Button
              onClick={(e) => addStudent(e)}
              variant="contained"
              size="small"
              color="success"
            >
              SAVE
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
}
