import { Request, Response } from 'express';
import Chat from '../models/Chat';

// @desc    Get all chats for user
// @route   GET /api/history
// @access  Private
export const getChats = async (req: Request, res: Response) => {
  try {
    const chats = await Chat.find({ user: req.user._id })
      .select('-messages') // Exclude messages for the list view to save bandwidth
      .sort({ updatedAt: -1 });

    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).json({ message: 'Server error fetching chats' });
  }
};

// @desc    Get chat by ID
// @route   GET /api/history/:id
// @access  Private
export const getChatById = async (req: Request, res: Response) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    res.json(chat);
  } catch (error) {
    console.error('Error fetching chat:', error);
    res.status(500).json({ message: 'Server error fetching chat' });
  }
};

// @desc    Delete chat
// @route   DELETE /api/history/:id
// @access  Private
export const deleteChat = async (req: Request, res: Response) => {
  try {
    const chat = await Chat.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    res.json({ message: 'Chat removed' });
  } catch (error) {
    console.error('Error deleting chat:', error);
    res.status(500).json({ message: 'Server error deleting chat' });
  }
};

// @desc    Update chat title
// @route   PUT /api/history/:id
// @access  Private
export const updateChatTitle = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const chat = await Chat.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title },
      { new: true }
    );

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    res.json(chat);
  } catch (error) {
    console.error('Error updating chat:', error);
    res.status(500).json({ message: 'Server error updating chat' });
  }
};
