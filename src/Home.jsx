import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="dash">
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/student")}>Student</a>
            <a onClick={() => navigate("/teacher")}>Teacher</a>
          </div>
        </div>
      </div>
      <div className="home">
        <h1>ADMIN DASH</h1>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Student Details</Button>
          <Button variant="contained" onClick={() => navigate("/teacher")}>
            Teacher Details
          </Button>
        </Stack>
      </div>
    </div>
  );
}
