import express from "express";
import jwtCheck from './../config/auth0Config.js';
import {
  createUser,
  bookVisit,
  allBookings,
  cancelBooking,
  toFav,
  getAllFavorites,
} from "../controllers/userCntrl.js";
const router = express.Router();

//route to register a user
router.post("/register" ,jwtCheck,createUser);
router.post("/bookVisit/:id", jwtCheck,bookVisit);
router.post("/allBookings" ,allBookings);
router.post("/removeBooking/:id", jwtCheck ,cancelBooking);
router.post("/toFav/:rid",jwtCheck , toFav);
router.post("/allFav/" , getAllFavorites);

//have to add jwt tokens to all these routes 



export { router as userRoute };
