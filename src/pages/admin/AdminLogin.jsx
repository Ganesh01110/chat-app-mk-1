import React from "react";
import { Container, Paper, TextField, Typography, Button } from "@mui/material";
import { gradient } from "../../constants/color";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin= false ;

const AdminLogin = () => {
  const secretkey = useInputValidation("");

  const handleLogin = (e) => {
    e.prevent;
  };


if (isAdmin) return <Navigate to ="/admin/dashboard" />

  return (
    <div style={{ backgroundImage: gradient }}>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <>
            <Typography variant="h3">Admin Login</Typography>
            <form
              style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={secretkey.value}
                onChange={secretkey.changeHandler}
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
