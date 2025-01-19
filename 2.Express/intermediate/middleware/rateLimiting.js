import rateLimit from "express-rate-limit"
export const createBasicRateLimiter=(maxRequests,time)=>{
    return rateLimit({
        max:maxRequests,
        windowMs:time,
        message:"Too many requests,please try again later",
        standardHeaders:true,
        legacyHeaders:false
    })
}