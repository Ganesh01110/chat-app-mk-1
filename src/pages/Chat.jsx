import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponent';
import FileMenu from '../components/Dialogs/FileMenu';
import {  sampleMessage } from '../constants/SampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user={
  _id:"uigigig",
  name:"om",
}

const Chat = () => {
  const contaimerRef=useRef(null)

  return (
  <>
  <Stack ref={contaimerRef}
  boxSizing={"border-box"}
  padding={"1rem"}
  spacing={"1rem"}
  bgcolor={"gray"}
  height={"90%"}
  sx={{
    overflowX:"hidden",
    overflowY:"auto"
  }}>
{
  sampleMessage.map((i)=>(
    <MessageComponent message={i} key={i._id} user={user}/>
  ))
}
  </Stack>
  <form style={{
    height:"10%"
  }}>
      <Stack direction={"row"} height={"100%"} position={"relative"} padding={"0.5rem"} alignItems={"center"}>
        <IconButton  sx={{
          rotate:"30deg",
          backgroundColor:"white",
          marginRight:"1rem",
          padding:"0.5rem",
          "&:hover":{
            bgcolor:"primary.main",
            color:"orange"
          }
        }}>
          <AttachFileIcon/>
        </IconButton>
        <InputBox sx={{
          borderRadius:"3px",
        }} placeholder='Type yoour messege here...'/>
        <IconButton type='submit' sx={{
          rotate:"-30deg",
          backgroundColor:"white",
          marginLeft:"1rem",
          padding:"0.5rem",
          "&:hover":{
            bgcolor:"primary.main",
            color:"orange"
          }
        }}>
          <SendIcon/>
        </IconButton> 
      </Stack>
  </form>
  <FileMenu/>
  </> 
  )
}

export default AppLayout()(Chat);