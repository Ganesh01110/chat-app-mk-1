import React, { useEffect, useState } from "react";
import Adminlayout from "../../components/layout/Adminlayout";
import Table from "../../components/shared/Table";
import { Avatar } from "@mui/material";
import{dashboardData} from "../../constants/SampleData";

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
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "name",
    headerName: "name",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "username",
    headerName: "username",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "friends",
    headerName: "friends",
    width: 150,
    headerClassName: "table-header",
  },
  {
    field: "groups",
    headerName: "groups",
    width: 200,
    headerClassName: "table-header",
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   setRows(dashboardData.users.map((i) => ({ ...i, id: i._id })));
  // }, []);
  // useEffect(() => {
  //   setRows( );
  // }, []);
  useEffect(() => {
     if (dashboardData.users) {
      setRows(dashboardData.users.map((i) => ({ ...i, id: i._id })));
     }
  }, []);
  
  return (
    <Adminlayout>
      <Table heading={"all users"} rows={rows} columns={columns}/>
    </Adminlayout>
  );
};

export default UserManagement;
