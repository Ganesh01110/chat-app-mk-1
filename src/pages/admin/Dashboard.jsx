import React from "react";
import Adminlayout from "../../components/layout/Adminlayout";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  NotificationAdd as NotificationAddIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import moment from "moment";
import { SearchField } from "../../components/styles/StyledComponent";
import { DoughnutCharts, LineCharts } from "../../components/Specific/Charts";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems="center" spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder="search...." />
        <Button variant="contained" color="primary">
          search
        </Button>
        <Box flexGrow={1}></Box>
        <Typography
          display={{ xs: "none", lg: "block" }}
          textAlign={"center"}
          color={"rgba(0,0,0,0.7)"}
        >
          {moment().format("MMMM Do YYYY ,h:mm:ss a")}
        </Typography>
        <NotificationAddIcon />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={"center"}
      display={"flex"}
      margin={"2rem 0"}
      justifyContent={"space-between"}
      width={"100%"}
      spacing={"2rem"}
    >
      <Widget title={"users"} value={34} icon={<PersonIcon />} />
      <Widget title={"chatss"} value={3} icon={<GroupIcon />} />
      <Widget title={"messages"} value={4} icon={<MessageIcon />} />
    </Stack>
  );
  return (
    <Adminlayout>
      <Container component={"main"}>
        {Appbar}
        <Stack direction={{xs:"column",lg:"row"}} spacing={"2rem"} alignItems={{lg:"stretch",sm:"center"}} flexWrap={"wrap"} justifyContent={"center"}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width:{ xs: "100%", lg: "60%" } ,
              maxWidth: "45rem",
            }}
          >
            <Typography margin={"2rem 0"} variant="h4">
              last messege
            </Typography>

            <LineCharts value={[2, 33, 59, 12, 60]} />
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width:{ sm: "100%", lg: "35%" } ,
              position: "relative",
              width: "35%",
              maxWidth: "25rem",
              height: "25rem",
            }}
          >
            <DoughnutCharts
              labels={["single chat", "group chat"]}
              value={[23, 66]}
            />

            <Stack
              position={"absolute"}
              direction={"row"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon /> <Typography>vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>

          
        </Stack>
        <Stack
           sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          >
            {Widgets}
          </Stack>
      </Container>
    </Adminlayout>
  );
};

const Widget = ({ title, value, icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "1.5rem",
      margin: "1.5rem 0",
      borderRadius: "1rem",
      width: "20rem",
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: "5px solid rgba(0,0,0,0.9)",
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);
export default Dashboard;
