import express from "express";
import { bookVisit, cancelBooking, createUser,getAllBookings, getAllFavorites, toFav } from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";
const router =  express.Router() 
router.post("/register",jwtCheck, createUser);
router.post("/bookVisit/:id",jwtCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", jwtCheck,cancelBooking);
router.post("/tofav/:rid", jwtCheck,toFav);
router.post("/favResd", jwtCheck,getAllFavorites);

export {router as userRoute}