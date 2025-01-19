import cors from "cors";
export const configureCors=()=>{
    return cors({
        //origin->this will tell that which originyou want user access your api
        origin:(origin,callback)=>{
            const allowedOrigins=[
                `http://localhost:3000`,
                `http://yourcustomdomain.com` //your production domain
            ]
            if(!origin || allowedOrigins.indexOf(origin)!==-1){
                callback(null,true) //giving permission so that can be allowed
            }else{
                callback(new Error("Not allowed by cors"))
            }
        },
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Accept-Version'
        ],
        exposedHeaders:[
            'X-Total-Count','Content-Range'
        ],
        credentials:true, //enable support for cookies
        preflightContinue:false,
        maxAge:600 //cache pre flight responses for 10 mins->avoid sending options requests multiple times
    })
}