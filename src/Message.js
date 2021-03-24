import { Card, CardContent, Typography } from "@material-ui/core";
import React,  { forwardRef }  from "react";
import "./Message.css";

const Message= forwardRef(({ username, message },ref) =>{
  const isUser = username === message.username;

  return (
    <p ref={ref}
      className={
        isUser
          ? "message message__user message__userCard"
          : "message message__guest message__guestCard"
      }
    >
      {(!isUser && (message.username +':'))} {message.text}
    </p>
  );
});

export default Message;
