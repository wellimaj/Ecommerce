const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User= require('./models/User')
const JwtStrategy = require('passport-jwt').Strategy;
const CookieExtractor = req=>{
    let token=null;
    if(req && req.cookies){
        token=req.cookies["access_token"]
    }
    return token;
}
// authorization
passport.use(new JwtStrategy({
    jwtFromRequest:CookieExtractor,
    secretOrKey:"abcdef123"
},(payload,done)=>{
    User.findById({_id: payload.sub},(err,user)=>{
        if(err)
        return done(err,false);
        if(user)
        return done(null,user);
        else
        return done(null,false);
    })
}))//authentication with local strategy using username and password 
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username},(err,user)=>{
if(err)//no db connection
    return done(err);
if(!user)//no user in db
        return done(null,false);
        //check pw is correct
    user.comparePassword(password,done);

    })
}));