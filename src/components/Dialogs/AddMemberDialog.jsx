import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/SampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddmember, chatId }) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const addMemberSubmitHandler = () => {

    closeHandler()
  };

  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack width={"20rem"} spacing={"2rem"} p={"2rem"}>
        <DialogTitle textAlign={"center"}> Add member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem
                key={i._id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No friends</Typography>
          )}
        </Stack>

        <Stack
          direction={"row-reverse"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button
            color="primary"
            variant="contained"
            disabled={isLoadingAddmember}
            onClick={addMemberSubmitHandler}
          >
            Submit Changes
          </Button>
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
