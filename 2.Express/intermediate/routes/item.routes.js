import express from "express";
import { asyncHandler } from "../middleware/errorHandler.js";
export const router=express.Router();
const items=[
    {
        id:'1',
        name:'item 1'
    }, {
        id:'2',
        name:'item 2'
    }, {
        id:'3',
        name:'item 3'
    }, {
        id:'4',
        name:'item 5'
    }, {
        id:'6',
        name:'item 7'
    },
]
router.get("/items",asyncHandler(async(req,res)=>{
    res.json(items);
}))