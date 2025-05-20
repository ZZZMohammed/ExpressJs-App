

const User = require('../Model/User') ;
const jwt = require('jsonwebtoken') ;

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const register = async (req , res) =>{
    try{
        const {name , email , password , role } = req.body ;

        // Check if user already exists
            const existUser = await User.findOne({email}) ;
            if (existUser) {
                return res.status(400).json({ message: 'Email already registered' }) ;
            }

        // Create and save new user
            const newUser = await new User({name , email , password , role}) ;
            await newUser.save() ;

        // Generate JWT token
            const token = jwt.sign(
                { id : newUser._id , role : newUser.role} ,
                JWT_SECRET ,
                { expiresIn: '7d'}
            ) ;

        // Respond with user info (omit password)
            res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
    });

    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}



module.exports = {register} ;