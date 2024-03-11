import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../../constants/SampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupname = useInputValidation("");

  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  // console.log(selectedMembers);
  const submitHandleer = () => {};
  const cancelHandleer = () => {};
  return (
    <Dialog open>
      <Stack
        p={{ xs: "1rem", sm: "2rem" }}
        alignItems={"center"}
        display={"flex"}
      >
        <DialogTitle variant="h4">New group</DialogTitle>
        <TextField
          label="group name"
          value={groupname.value}
          onChange={groupname.changeHandler}
        />
        <Typography>members</Typography>

        <Stack>
          {sampleUsers.map((i) => (
            <UserItem
              justifyContent={"space-between"}
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(i._id)}
            ></UserItem>
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="text" color="error" onClick={cancelHandleer}>
            cancel
          </Button>
          <Button variant="contained" onClick={submitHandleer}>
            create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
