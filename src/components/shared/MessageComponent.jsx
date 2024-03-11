import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachment = [], createdAt } = message;

  const sameSender = sender?._id == user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : " flex-start",
        backgroundColor: "white",
        padding: "0.4rem 1rem",
        margin: "0.5rem",
        borderRadius: "5px",
        maxWidth: "50%",
      }}
    >
      {!sameSender && (
        <Typography
          sx={{ fontWeight: "600", color: "green", lineHeight: "0.6" }}
          variant="caption"
        >
          {sender.name}
        </Typography>
      )}
      {content && <Typography lineHeight={"0.6"}>{content}</Typography>}

      {attachment.length > 0 &&
        attachment.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <Box key={index}>
             
              <a href={url} target="_blank" download style={{ color: "black" }}>
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography
        fontSize={"10px"}
        variant="caption"
        color={"text.secondary"}
        lineHeight={"0.6"}
      >
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
