import express, { json } from 'express';
const app = express();
import { createConnection} from 'mysql';
import cors from "cors";
import { compare } from "bcrypt";
import bcrypt from "bcrypt";
import pkg from 'body-parser';
const { urlencoded } = pkg;
import cookieParser from "cookie-parser";
import session from "express-session";
import Status from "./lib/Status.js";
import { transports, format } from 'winston'
import expressWinston from 'express-winston'


app.use(json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(urlencoded({ extended: false }));

app.use(
  session({
    key: "userId",
    secret: "Douglas79240",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 80000,
    },
  })
);

const db = createConnection({
    user:"root",
    host:"localhost",
    port: "3306",
    password:"",
    database:"anime_list"

});


app.post("/register",(req,res)=>{
        const username = req.body.username;
        const password = req.body.password;
        bcrypt.hash(password, 10, function(err, hash) {
            db.query("insert into users(user_username_vc, user_pass_vc) VALUES(?,?)",[username, hash],
            (err, result )=>{ 
                if (err){
                    res.send(err);
                }else{
                    res.send(err);
                }
            }
            );
        });
        
    
});

app.post("/contact",(req,res)=>{
        const subjet = req.body.subjet;
        const email = req.body.email;
        const message = req.body.message;

        db.query("insert into message(mess_email_vc, mess_date_dt, mess_message, mess_sujet) VALUES(?,now(),?,?)",[ email, message, subjet],
        (err, result )=>{ 
            if (err){
                res.send(Status.getErrorMessage(500));
            }else{
                res.send(result);
            }
        }
        );
    
});

app.get("/login", (req, res) => {
    if(req.session.user) {
        if (req.session.user.loggedIn === true) { 
            res.send({
                loggedIn:   true, 
                user: req.session.user  
            });
        } else {
            res.send({ 
                loggedIn: false 
            });
        }
    } else {
        res.send({ 
            loggedIn: false 
        });
    }
});

app.post('/login',(req, res) => {
        const user = req.body.user;
        const pass = req.body.pass;
        db.query("select user_id, user_pass_vc, user_username_vc, user_isadmin_bo from users Where user_username_vc = ?;",
        user,
        (err, result )=>{
            if (err){
                res.send(Status.getStatus(true, false, 'err', err, 400));
            }  
            if(result.length){
                compare(pass, result[0].user_pass_vc, (error, response) =>{
                    if(response===true){
                        req.session.user = { 
                            'loggedIn': true,
                            'user_id': result[0].user_id,
                            'user_username_vc': result[0].user_username_vc, 
                            'user_isadmin_bo': result[0].user_isadmin_bo
                        };
                        res.send({ loggedIn: true, user: req.session.user })
                    }else{
                        res.send(Status.getStatus(false, true, 'password', 'Password incorrect', 401));
                    }
                })
            }else{
                res.send(Status.getStatus(false, true, 'password', 'Password incorrect', 401));
            }
        });
    
})

app.get("/contact",(req,res)=>{
    db.query("select * from message",
    (err, result )=>{
        if (err){
            console.log(err);
        }else{
            res.send(result);
            console.log(req.session);
        }
    });
});

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send({ loggedIn: false });
});

app.listen(3001, ()=>{
   console.log("Good to go");
});

app.use(expressWinston.logger({
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint()
    )
}));
