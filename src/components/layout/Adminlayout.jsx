import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import {
  Close as CloseIcon,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  ManageAccounts as ManageAccountsIcon,
  Groups as GroupsIcon,
  Message as MessageIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import { useLocation, Link as LinkComponent, Navigate } from "react-router-dom";
// import { adminTabs } from "../../constants/route";
// import Links from "../styles/StyledComponent";

const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem 2rem;
  border-radius: 2rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.54);
  }
`;

export const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/user-management",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Groups",
    path: "/admin/chat-management",
    icon: <GroupsIcon />,
  },
  {
    name: "Messeges",
    path: "/admin/messege-management",
    icon: <MessageIcon />,
  },
];
const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();

  const logoutHandler = () => {
    console.log("logout");
  };
  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}  >
      <Typography variant="h3" textTransform={"uppercase"}>
        Admin
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: "black",
                color: "white",
                ":hover": { color: "white" },
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}

        <Link onClick={logoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />
            <Typography>logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const isAdmin = true;

const Adminlayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handlemobile = () => setIsMobile(!isMobile);

  const hadleClose = () => setIsMobile(false);

  if (!isAdmin) return <Navigate to="/admin" />;
  return (
    <Grid container minHeight={"100vh"} >
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handlemobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: "#f5f5f5" }}>
        {children}
      </Grid>

      <Drawer open={isMobile} onClose={hadleClose}>
        <Sidebar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default Adminlayout;
