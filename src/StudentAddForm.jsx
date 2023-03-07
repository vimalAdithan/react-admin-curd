import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom";

export function StudentAddForm({list, setList}) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [emailid, setEmailid] = useState("");
  const [dob, setDob] = useState("");
  const [phno, setPhno] = useState("");
  
  const addUser = (e) => {
    e.preventDefault();
    const ids=uuid();
    let newid=ids.slice(0,8);
    list.push({
      id:newid,
      Username: user,
      Password: password,
      Email: emailid,
      Dateofbirth: dob,
      phonenumber: phno,
    });
    navigate("/student")
  };


  return (
    <div>
      <div className="full">
        <Box>
          <form className="wrap">
            <TextField
              id="outlined-error-helper-text"
              label="UserID"
              size="small"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Password"
              size="small"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="EmailID"
              size="small"
              value={emailid}
              onChange={(event) => setEmailid(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Date of Birth"
              size="small"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Ph.no"
              size="small"
              value={phno}
              onChange={(event) => setPhno(event.target.value)}
            />
            <Button
              onClick={(e)=>addUser(e)}
              variant="contained"
              size="small"
              color="success"
            >
              ADD
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
}
