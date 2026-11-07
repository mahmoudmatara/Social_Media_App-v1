import { Response } from "express";
export interface IResponse<T = any, Z = any> {
  res: Response;
  data?: T;
  message?: boolean;
  status?: number;
  extra?: Z;
}
