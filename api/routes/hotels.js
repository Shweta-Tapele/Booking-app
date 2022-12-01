import express from "express";
import { createHotel, getHotel, updateHotel, deleteHotel, getHotels } from "../controllers/hotel.js";


import {verifyAdmin} from "../utils/verifyToken.js"
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

//router.post("/", createHotel);
//UPDATE
//router.put("/:id", updateHotel);
//DELETE
//router.delete("/:id", deleteHotel);
//GET
//router.get("/:id", getHotel);
//GETALL
//router.get("/",getHotels);
//CREATE
//router.post("/", verifyAdmin, createHotel);
//router.post("/", as)
//CREATE with JWT role-based authorization
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
//router.get("/countByCity", countByCity);
//router.get("/countByType", countByType);
//router.get("/room/:id", getHotelRooms);

export default router;