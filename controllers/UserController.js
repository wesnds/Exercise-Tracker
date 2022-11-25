const User = require('../models/User');

module.exports = class UserController {

    static async newUser(req, res) {
        const {username} = req.body;
        
        const userExists = await User.findOne({username});
        if (userExists) {
            res.status(400).json({
                error: 'Username already taken'
            })
        } else {
            const user = new User({username});
            await user.save();
            const userId = user._id.toString();
            console.log(userId);
            
            let responseObj = {
                username: user.username,
                _id: userId
            }
            res.json(responseObj);
        }
    }

    static async getUsers(req, res) {
        const users = await User.find({});
        res.json(users);
    }
   
}

