import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// import {DATABASE_URL} from "../.env"
console.log("before url in schema ");
export { prisma };
console.log("after export")
// console.log(DATABASE_URL)