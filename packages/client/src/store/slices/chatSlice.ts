import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface Message {
  id?: string;
  _id?: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  title?: string;
}

export interface ChatHistory {
  _id: string;
  title: string;
  updatedAt: string;
}

export interface ChatState {
  messages: Message[];
  isThinking: boolean;
  selectedModel: string;
  activeChatId: string | null;
  chats: ChatHistory[];
  isLoadingChats: boolean;
}

const initialState: ChatState = {
  messages: [],
  isThinking: false,
  selectedModel: 'gpt-3.5-turbo',
  activeChatId: null,
  chats: [],
  isLoadingChats: false,
};

export const fetchChats = createAsyncThunk(
  'chat/fetchChats',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.user?.token;
      const response = await fetch('http://localhost:3000/api/history', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch chats');
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadChatMessages = createAsyncThunk(
  'chat/loadChatMessages',
  async (chatId: string, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.user?.token;
      const response = await fetch(
        `http://localhost:3000/api/history/${chatId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to load chat');
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

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
      const message = state.messages.find(
        (m) => m.id === action.payload.id || m._id === action.payload.id
      );
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
      state.activeChatId = null;
    },
    setActiveChatId: (state, action: PayloadAction<string>) => {
      state.activeChatId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.isLoadingChats = true;
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.isLoadingChats = false;
        state.chats = action.payload;
      })
      .addCase(fetchChats.rejected, (state) => {
        state.isLoadingChats = false;
      })
      .addCase(loadChatMessages.fulfilled, (state, action) => {
        state.activeChatId = action.payload._id;
        state.messages = action.payload.messages;
      });
  },
});

export const {
  addMessage,
  updateMessage,
  setThinking,
  setSelectedModel,
  clearMessages,
  setActiveChatId,
} = chatSlice.actions;

export default chatSlice.reducer;
