import { Avatar, Stack,  Typography } from "@mui/material";
import React from "react";
import {Face as FaceIcon , AlternateEmail as UsernameIcon , CalendarMonth as CalendarIcon} from '@mui/icons-material'
// import {moment} from 'moment'

const Profile = () => {

  // const createdAt = "2024-02-12T10:41:30.630Z" ;
  // const timeAgo = moment(createdAt).fromNow();

  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 150,
          height: 150,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"bio"} text={"fuifitdydrdrstrstesesers"}  />
      <ProfileCard heading={"username"} text={"kfuykfufy"} Icon={< UsernameIcon/>}/>

      <ProfileCard heading={"name"} text={"ihooioiho"} Icon={< FaceIcon/>}/>
      {/* <ProfileCard heading={"joined"} text={timeAgo} Icon={< CalendarIcon/>}/> */}

    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"green"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
