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
  messages: [
    {
      id: '1',
      role: 'user',
      content: 'make the subhead line from "Time Tracker Dashboard"',
    },
    {
      id: '2',
      role: 'assistant',
      title: '"Time Tracker Dashboard"',
      content:
        'Effortlessly Manage and Optimize Your Time for Maximum Productivity',
    },
    {
      id: '3',
      role: 'user',
      content:
        'Make short paragraphs under this title "Time Tracker Dashboard"',
    },
    {
      id: '4',
      role: 'assistant',
      content:
        'The Time Tracker Dashboard is a powerful tool designed to help individuals and teams monitor and manage their time efficiently. It provides a centralized interface to track hours spent on tasks, projects, and activities, ensuring better productivity and time utilization.',
    },
  ],
  isThinking: false,
  selectedModel: 'NokatFlex',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
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

export const { addMessage, setThinking, setSelectedModel, clearMessages } =
  chatSlice.actions;

export default chatSlice.reducer;
