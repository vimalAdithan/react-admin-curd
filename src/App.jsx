import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { StudentAddForm } from "./StudentAddForm";
import { StudentInfo } from "./StudentInfo";
import { StudentList } from "./StudentList";
import { StudentEdit } from "./StudentEdit";
import { TeacherList } from "./TeacherList";
import { TeacherAddForm } from "./TeacherAddForm";
import { TeacherInfo } from "./TeacherInfo";
import { TeacherEdit } from "./TeacherEdit";

function App() {
  const [list, setList] = useState([
    {
      Username: "Arun",
      Password: "Arun123",
      Email: "Arun16@gmail.com",
      Dateofbirth: "03/06/2001",
      phonenumber: 1234567890,
      id: "1",
    },
    {
      Username: "Bharath",
      Password: "Password11",
      Email: "Bhrath16@gmail.com",
      Dateofbirth: "14/03/1999",
      phonenumber: 4612345678,
      id: "2",
    },
    {
      Username: "Charan",
      Password: "Charan2002",
      Email: "Charan02@gmail.com",
      Dateofbirth: "01/01/2002",
      phonenumber: 1122334455,
      id: "3",
    },
  ]);

  const [staff, setStaff] = useState([
    {
      Username: "Abishek",
      Password: "$Abishek11",
      Email: "Abishek/dhoni.gmail.com",
      Dateofbirth: "22/04/1994",
      phonenumber: 1245784691,
      id: "1",
    },
    {
      Username: "Dinesh",
      Password: "Dinesh_dk",
      Email: "Dinesh.dk@gmail.com",
      Dateofbirth: "09/02/1993",
      phonenumber: 4663849371,
      id: "2",
    },
    {
      Username: "Gokul",
      Password: "NOpassword",
      Email: "Gokul@gmail.com",
      Dateofbirth: "02/05/1995",
      phonenumber: 7463839382,
      id: "3",
    },
  ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/student"
          element={<StudentList list={list} setList={setList} />}
        />
        <Route
          path="/student/add"
          element={<StudentAddForm list={list} setList={setList} />}
        />
        <Route path="/student/:id" element={<StudentInfo list={list} />} />
        <Route
          path="/student/edit/:id"
          element={<StudentEdit ucard={list} />}
        />
        <Route
          path="/teacher"
          element={<TeacherList staff={staff} setStaff={setStaff} />}
        />
        <Route
          path="/teacher/add"
          element={<TeacherAddForm staff={staff} setStaff={setStaff} />}
        />
        <Route path="/teacher/:id" element={<TeacherInfo staff={staff} />} />
        <Route
          path="/teacher/edit/:id"
          element={<TeacherEdit ucard={staff} />}
        />
      </Routes>
    </div>
  );
}
export default App;
