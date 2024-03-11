import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/SampleData";

const Search = () => {

const [users, setUsers] = useState(sampleUsers)
  const addFriendHandler =(id)=>{
console.log(id);
  }
const isLoadingSendFriendRequest = false;

  const search = useInputValidation("");
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find people</DialogTitle>

        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>

        <List>
          {users.map((i) => (
          <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}></UserItem>
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
