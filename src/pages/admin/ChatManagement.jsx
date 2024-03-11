import React, { useEffect, useState } from "react";
import Adminlayout from "../../components/layout/Adminlayout";
import Table from "../../components/shared/Table";
import { Avatar, Stack } from "@mui/material";
import { dashboardData } from "../../constants/SampleData";
import AvatarCard from "../../components/shared/AvatarCard";
import { transformImage } from "../../lib/features";

const columns = [
  {
    field: "id",
    headerName: "id",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "avatar",
    headerName: "AVATAR",
    width: 150,
    headerClassName: "table-header",
    renderCell: (params) => <AvatarCard avatar={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "name",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "totalmembers",
    headerName: "totalmembers",
    width: 120,
    headerClassName: "table-header",
  },
  {
    field: "members",
    headerName: "members",
    width: 150,
    headerClassName: "table-header",
    renderCell: (params) => (
      <AvatarCard max={100} avatar={params.row.members} />
    ),
  },
  {
    field: "totalmessages",
    headerName: "totalmessages",
    width: 120,
    headerClassName: "table-header",
  },
  {
    field: "creator",
    headerName: "created by",
    width: 250,
    headerClassName: "table-header",
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={"1rem"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span> {params.row.creator.name} </span>
      </Stack>
    ),
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: i.avatar.map((i) => transformImage(i, 50)),
        members: i.members.map((i) => transformImage(i.avatar, 50)),
        creator: { name:i.creator.name,
        avatar: transformImage(i.creator.avatar,50),}
      }))
    );
  }, []);

  return (
    <Adminlayout>
      <Table heading={"all groups"} rows={rows} columns={columns} />
    </Adminlayout>
  );
};

export default ChatManagement;
