import { Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
import { PrismaClient, Role, User } from "@prisma/client";
import config from "../config/config";

const prisma = new PrismaClient();

export const authorizeUser = (role: string) => {
  return async (req: any, res: Response, next: NextFunction) => {
    const getUserid = req.user.id;
    const userById = (await prisma.user.findUnique({
      where: { id: getUserid },
    })) as User;
    if (userById.role !== Role.ADMIN) {
      return res.status(403).send({ message: "Forbidden" });
    }
    next();
  };
};
