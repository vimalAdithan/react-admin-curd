import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <h1>ADMIN</h1>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => navigate("/student")}>
            Student Details
          </Button>
          <Button variant="contained" onClick={() => navigate("/teacher")}>
            Teacher Details
          </Button>
        </Stack>
      </div>
    </div>
  );
}
