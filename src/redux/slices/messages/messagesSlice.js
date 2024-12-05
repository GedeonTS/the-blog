import { createSlice } from "@reduxjs/toolkit";
import { getMessages, postMessage } from "./messagesActions";
import { toast } from "react-toastify";

const initialState = {
  messages: [],
  isPostingMessage: false,
  messagePosted: false,
  isGettingMessages: false,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    resetMessagePosted: (state) => {
      return { ...state, messagePosted: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state) => {
      return { ...state, isGettingMessages: true };
    });
    builder.addCase(getMessages.fulfilled, (state, { payload }) => {
      return { ...state, isGettingMessages: false, messages: payload };
    });
    builder.addCase(getMessages.rejected, (state) => {
      toast.error("Couldn't get messages");
      return { ...state, isGettingMessages: false };
    });
    builder.addCase(postMessage.pending, (state) => {
      return { ...state, isPostingMessage: true };
    });
    builder.addCase(postMessage.fulfilled, (state, { payload }) => {
      toast.success("Message successfully sent!");
      return {
        ...state,
        isPostingMessage: false,
        messages: [...state.messages, payload],
        messagePosted: true,
      };
    });
    builder.addCase(postMessage.rejected, (state) => {
      toast.error("Couldn't post message");
      return { ...state, isPostingMessage: false };
    });
  },
});

export const { resetMessagePosted } = messagesSlice.actions;

export default messagesSlice.reducer;
