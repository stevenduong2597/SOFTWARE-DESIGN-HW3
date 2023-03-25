const LocalStrategy = require("passport-local").Strategy
const bycrpt = require("bcrypt")


function initialize(passport, getUserByEmail, getUserById){
    //function to auth users
    const authenticateUsers= async (email, password, done) =>{
        //get users by email
        const user = getUserByEmail(email)
        if(user == null){
            return done(null,false,{message: "No user found with that email"})
        }

        try {
            if(await bycrpt.compare(password, user.password)){
                return done(null,user)
            }else{
                return done(null, false,{message: "Password Incorrect"})
            }
        } catch (e) {
            console.log(e);
            return done(e)
            
        }
    }
    passport.use(new LocalStrategy({usernameField: 'email'},authenticateUsers))
    passport.serializeUser((user, done)=>done(null,user.id))
    passport.deserializeUser((id, done)=>{
        return done(null, getUserById(id))
    })
}

module.exports = initialize