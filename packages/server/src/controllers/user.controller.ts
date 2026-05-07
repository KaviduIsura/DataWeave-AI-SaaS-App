import type { Request, Response } from 'express';

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.json({ message: 'User profile endpoint (Not implemented yet)' });
};

export const updateUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.json({ message: 'Update user profile endpoint (Not implemented yet)' });
};
