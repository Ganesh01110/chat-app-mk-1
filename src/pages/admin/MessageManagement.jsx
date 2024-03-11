import React, { useState, useEffect } from "react";
import Adminlayout from "../../components/layout/Adminlayout";
import Table from "../../components/shared/Table";
import { dashboardData } from "../../constants/SampleData";
import { transformImage , fileFormat} from "../../lib/features";
import { Avatar, Stack , Box } from "@mui/material";
import moment from "moment";
import   RenderAttachment from "../../components/shared/RenderAttachment";

const columns = [
  {
    field: "id",
    headerName: "id",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "attachmentts",
    headerName: "attachmentts",
    width: 200,
    headerClassName: "table-header",
    renderCell: (params) => {
      const { attachments } = params.row;
      return attachments?.length > 0
        ? attachments.map((i) => {
            const url = i.url;
            const file = fileFormat(url);
            return  <Box>
              <a href={url} download target="_blank" style={{color:"black"}}>
                  {RenderAttachment(file,url)}
              </a>
            </Box>
          })
        : " no attachment";

      // return <Avatar alt={params.row.name} src={params.row.avatar} />;
    },
  },
  {
    field: "content",
    headerName: "content",
    width: 400,
    headerClassName: "table-header",
  },
  {
    field: "sender",
    headerName: "sent by",
    width: 200,
    headerClassName: "table-header",
    renderCell: (params) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "chat",
    width: 220,
    headerClassName: "table-header",
  },
  {
    field: "groupchat",
    headerName: "groupchat",
    width: 100,
    headerClassName: "table-header",
  },
  {
    field: "createdat",
    headerName: "time",
    width: 250,
    headerClassName: "table-header",
  },
];

const MessageManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.meesagges.map((i) => ({
        ...i,
        id: i._id,
        sender: {
          name: i.sender.name,
          avatar: transformImage(i.sender.avatar, 50),
        },
        createdat: moment(i.createdat).format("MMMM Do YYYY, h:mm:ss a"),
      }))
    );
  }, []);

  return (
    <Adminlayout>
      <Table heading={"all messages"} rows={rows} columns={columns}></Table>
    </Adminlayout>
  );
};

export default MessageManagement;
