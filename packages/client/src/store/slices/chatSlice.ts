import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  title?: string;
}

export interface ChatState {
  messages: Message[];
  isThinking: boolean;
  selectedModel: string;
}

const initialState: ChatState = {
  messages: [],
  isThinking: false,
  selectedModel: 'gpt-3.5-turbo',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    updateMessage: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      const message = state.messages.find((m) => m.id === action.payload.id);
      if (message) {
        message.content += action.payload.content;
      }
    },
    setThinking: (state, action: PayloadAction<boolean>) => {
      state.isThinking = action.payload;
    },
    setSelectedModel: (state, action: PayloadAction<string>) => {
      state.selectedModel = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const {
  addMessage,
  updateMessage,
  setThinking,
  setSelectedModel,
  clearMessages,
} = chatSlice.actions;

export default chatSlice.reducer;
