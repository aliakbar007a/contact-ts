import { Response } from "express";

export const result = {
  success: (res: Response, data: any, message = "Success", status = 200) => {
    return res.status(status).json({
      success: true,
      message,
      data
    });
  },

  error: (res: Response, message = "Error", status = 400) => {
    return res.status(status).json({
      success: false,
      message
    });
  }
};