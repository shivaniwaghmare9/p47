
const express=require("express");
const app=express();
const dataRoute=require("./routes/dataRoute")
const mongoose=require("mongoose");
const bodyparser=require("body-parser");

mongoose.connect("mongodb+srv://shivaniw69:QrGsyB2168Rrx9Na@cluster0.fyrj258.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database Successfully Connected")
})

//Bodyparser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use("/",dataRoute)

app.listen(4000,()=>{
    console4.log("Server is running on port 3000")
})



///==========================================================MIDDALEWARE(APP MIDDALEWARE)==================================================================================

// const express=require("express");
// const app=express();
// const dataRoute=require("./routes/dataRoute")
// const mongoose=require("mongoose");
// const bodyparser=require("body-parser");

// mongoose.connect("mongodb+srv://shivaniw69:QrGsyB2168Rrx9Na@cluster0.fyrj258.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
//     console.log("Database Successfully Connected")
// })

// //Bodyparser middleware
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());

//==========================================================MIDDALEWARE(APP MIDDALEWARE)==================================================================================

// app.use((req,res,next)=>{
//     console.log("Server is app ")
//     next();
// })
// app.get("/home",(req,res)=>{
//     console.log("hii this is my name page")
//     res.send("hii this >")
// })
// app.get("/about",(req,res)=>{
//     console.log("hii this is my name page")
//     res.send("hii this >")
// })

               //==========================================================MIDDALEWARE(PATH MIDDALEWARE)==================================================================================

// app.use("/",(req,res)=>{
//     console.log("Server is app ")
//     res.send("okk")
// })
// app.get("/home",(req,res)=>{
//     console.log("hii this is my home page")
//     res.send("hii this ")
// })

// app.get("/about",(req,res,next)=>{
//     console.log("hii this is my name page")
//     next();
// },(req,res)=>{
//     console.log("thie is my about page!!");
//     res.send("About okk")
// })

// app.get("/service",(req,res,next)=>{
//     console.log("hii this is myservcie 1 page")
//     next();
// },(req,res,next)=>{
//     console.log("thie is my service 2 page!!");
//     next();
// },(req,res)=>{
//     console.log("thie is my service 3 page!!");
//     res.send("Contact okk")
// })

// app.use("/",dataRoute)

// app.listen(4000,()=>{
//     console4.log("Server is running on port 3000")
// })


//==========================================================MIDDALEWARE(PATH MIDDALEWARE)==================================================================================

// const express=require("express");
// const app=express();
// const bodyparser=require("body-parser");
// const errorHandling=require("./Middleware/errhandleMidware")
// const cors = require("cors");


// //Bodyparser middleware
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());
// app.use(cors());

// app.get("/",(req,res)=>{
//     console.log("something went wrong")
//     res.send("okk")
// })
// app.get("/about",(req,res,next)=>{
//     console.log("hii this is my about page")
//     const err=new Error("about page error")
//     next(err)
//     res.send("OKK")
// })

// app.get("/service",(req,res)=>{
//     try {
//     console.log("hii this is my service page")
//      const err=new Error("service page error")
//    //  res.status(200).send("service OKK")
//      throw err
    
//     } catch  {
//         console.log(Error)
//         res.status(500).send("Internal server error")
//     }
    
// })

// app.use(errorHandling)

// app.listen(3000,()=>{
//     console.log("Server is running on port 3000")
// }) 