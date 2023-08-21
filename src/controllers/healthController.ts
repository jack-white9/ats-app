import { Request, Response } from "express";

const llmController = async (req: Request, res: Response): Promise<void> => {
  res.send("Success");
};

export default llmController;
