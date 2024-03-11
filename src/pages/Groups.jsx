import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { gradient, orange } from "../constants/color";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Links } from "../components/styles/StyledComponent";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../constants/SampleData";
import UserItem from "../components/shared/UserItem";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/Dialogs/ConfirmDeleteDialog")
);
const AddMemberDialog = lazy(() =>
  import("../components/Dialogs/AddMemberDialog")
);

const isAddMember = false;

const Groups = () => {
  const navigate = useNavigate();

  const chatId = useSearchParams()[0].get("group");
  // console.log(chatId);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [groupName, setGroupName] = useState("  ");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState(" ");

  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };

  const openConfirmDeleteHandleer = () => {
    setConfirmDeleteDialog(true);
    // console.log("member delete");
  };
  const closeConfirmDeleteHandleer = () => {
    setConfirmDeleteDialog(false);
    console.log("member delete close");
  };
  const openAddMemberHhandler = () => {
    console.log("member aaded");
  };

  const deletehandler = () => {
    console.log("close handler");
    closeConfirmDeleteHandleer();
  };

  const removeMemberHandler =(id)=>{
    console.log("remove member",id)

  }

  useEffect(() => {

    if(chatId) {
      setGroupName(`Group name ${chatId}`);
      setGroupNameUpdatedValue(`Group name ${chatId}`);
    }
   
    return () => {
      setGroupName(" ");
      setGroupNameUpdatedValue(" ");
      setIsEdit(false);
    };
  }, [chatId]);

  const Iconbtn = (
    <>
      <IconButton
        sx={{
          display: { xs: "block", sm: "none" },
          position: "absolute",
          top: "2rem",
          right: "2rem",
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "white",
          ":hover": {
            backgroundColor: "rgba(0,0,0,0.3)",
            color: orange,
          },
        }}
        onClick={handleMobile}
      >
        <MenuIcon />
      </IconButton>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            ":hover": {
              backgroundColor: "rgba(0,0,0,0.3)",
              color: orange,
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"1.5rem"}
        spacing={"1rem"}
      >
        {isEdit ? (
          <>
            <TextField
              value={groupNameUpdatedValue}
              onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
              sx={{
                border: "1px solid ",
                borderColor: orange,
                borderRadius: "5px",
                width: "45vw",
              }}
              placeholder="Enter your Group name"
            />
            <IconButton onClick={updateGroupName}>
              <DoneIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h4">{groupName}</Typography>
            <IconButton onClick={() => setIsEdit(true)}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </Stack>
    </>
  );

  const ButtonGroup = (
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      spacing={"1rem"}
      marginTop={"1rem"}
      p={{
        xs: "0",
        sm: "1rrem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        sx={{
          fontWeight: "700",
        }}
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandleer}
      >
        Delete member
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHhandler}
      >
        Add member
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
            overflowY:"auto",
          },
        }}
        sm={4}
      >
        <Grouplist myGroups={sampleChats} chatId={chatId}></Grouplist>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
          backgroundColor: "gray",
        }}
      >
        {Iconbtn}

        {groupName && (
          <>
            {" "}
            {GroupName}
            <Typography margin={"2em"} alignSelf={"flex-start"} variant="body1">
              members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              // bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
              borderRadius={"9px"}
            >
              {/* members */}
              {sampleUsers.map((i) => (
                <UserItem
                  user={i}
                  key={i._id}
                  isAdded
                  styling={{
                    boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                    padding: "0.5rem 2rem",
                    borderRadius: "1rem",
                    marginTop:"0"
                  }}
                  handler={removeMemberHandler}

                />
              ))}
            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          {" "}
          <AddMemberDialog />
        </Suspense>
      )}

      {confirmDeleteDialog && (
        <>
          {" "}
          <Suspense fallback={<Backdrop open />}>
            <ConfirmDeleteDialog
              open={confirmDeleteDialog}
              handleClose={closeConfirmDeleteHandleer}
              deletehandler={deletehandler}
            />
          </Suspense>
        </>
      )}

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
       
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        {" "}
        <Grouplist w={"50vw"} myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const Grouplist = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w} sx={{   backgroundImage: gradient, height: "100vh",overflowY:"auto"}}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id * (Math.random())} />
        ))
      ) : (
        <Typography textAlign={"center"} padding="1rem">
          {" "}
          no groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Links
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Links>
  );
});

export default Groups;
