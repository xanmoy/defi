const express = require('express')
const app = express()
require('./database/config');
const Users = require('./database/Users');
const cors = require('cors');
app.use(express.json())
app.use(cors())


app.post('/signup',async(req,res)=>{
    try{
        const user = new Users(req.body);
        let result = await user.save()
        result = result.toObject();
        delete result.password;
        res.status(201).json({ message: 'User created successfully', user: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/signin',async (req,res)=>{
    if(req.body.email && req.body.password){
      const result = await  Users.findOne(req.body).select("-password");
      if(result){
        res.send(result)
      }else{
        res.status(403).json({message:"Invalid email or password"})
      }
    }else{
      res.send("Email or Password missing")
    }
  })



app.listen(5000, () => {
    console.log('Server is listening on port 5000');
  });
  