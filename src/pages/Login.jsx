import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";
import { gradient } from "../constants/color";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const togglelogin = () => setIsLogin((prev) => !prev);
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation();

  const avatar= useFileHandler("single")

  const handleLogin = (e)=>{
    e.preventDefault();
  }
  const handleSignup = (e)=>{
    e.preventDefault();
  }

  return (

    <div style={{ backgroundImage: gradient}}>
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
        {isLogin ? (
          <>
            <Typography variant="h3">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
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
              <Typography textAlign={"center"} variant="h5">
                OR
              </Typography>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={togglelogin}
              >
                Signup instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h3" sx={{ paddingTop: "60px" }}>
              Signup
            </Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignup}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      color: "rgba(0,0,0,0.5)",
                      bgcolor: "rgba(255,255,255,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                  </>
                </IconButton>
              </Stack>
              {avatar.error && (
                <Typography color="error" display={"block"} m={"1rrem auto"} width={"fit-content"} variant="caption">
                  {avatar.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
               {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
               {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign up
              </Button>
              <Typography textAlign={"center"} variant="h5">
                OR
              </Typography>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={togglelogin}
              >
                Login instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
   
  );
};

export default Login;
