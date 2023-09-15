
const mongoose = require('mongoose')

const DATABASE = process.env.

// ----- setting up our database -----
    // 1. connect to db
mongoose.connect(DATABASE)

    // 2. define the schema (the skeleton) using mongoose
const UserSchema = new mongoose.Schema ({
    firstName: {
            type: String,
            required: [true, 'Please provide your given name!']
    }, 
    lastName: {
            type: String,
            required: [true, 'Please add your last Name']
    },
    age: {
            type: Number,
            required: [true, 'Please add your age']
    },
    email: {
            type: String,
            required: [true, 'Please add your email']
    },
    username: {
            type: String,
            required: [true, 'Please add a username']
    },
    password: {
            type: String,
            required: [true, 'Please add a password']
    }

})

    // 3. define the model (the summoning of the schema)
const UserModel = mongoose.model('UserModel', UserSchema)


// ----- setting up our routes ------
    // we will define our routes below
app.get("/myPage", (req,res) => {
    response.send("My server is alife")
})

    // set the route that PRINTS TO THE CONSOLE
app.post("/newUser", (req,res) => {
    res.send("Hey we've received your form")
    console.log('First name: ' + req.body.firstName + '\n' + 'Last name: ' + req.body.lastName + '\n' + 'Age: '+ req.body.age + '\n' + 'Email: '+ req.body.email + '\n' + 'Username: '+ req.body.username + '\n' + 'Password: '+ req.body.password)
})

    // CRUD exercise -> 1. set the route that SAVES TO THE DATABASE (C - CREATE)
app.post("/saveUser", (req, res) => {
            // grab variable coming from the html file
    const { firstName, lastName, age, email, username, password } = req.body
            // save it to the database
    UserModel.create({ firstName, lastName, age, email, username, password})
    .then((response) => {
            res.status(200).json(response)
    })
    .catch((err) => {
            res.status(500).json({
                    error: 'Oops! Unable to create User.',
                    message: err
            })
    })
})

    // CRUD exercise -> 2. set the route that FINDS FROM THE DATABASE (R - READ)
app.get("/getUser", (req, res) => {
    UserModel.find()
    .then((users) => {
            res.status(200).json(users);
    })
    .catch((err) => {
            res.status(500).json({
                    error: 'Oops! Unable to get Users.',
                    message: err
            });
    });
});


    // functions that will be needed for 3 and 4
    // function userTable() {

    //         const result = UserModel.find().toArray()
    //         result.forEach( ()=> {
    //                 console.log(`${result.firstName}`) 
    //         });
    // };

    // CRUD exercise -> 3. set the route that UPDATES RECORDS IN THE DATABASE (U - UPDATE)

app.post("/updateUser", (req,res) => {
    const userId= req.body.userId
    const updateFields = req.body;
    UserModel.updateOne({ _id: userId }, updateFields)
    .then((result) => {
            if(result.modifiedCount===0){
                    res.status(404).json({
                        message:"Could not update user"     
                    })
            } else {
                    res.status(200).json({
                    message: "Succes! User has been updated"
                    })  
            }

    })
    .catch((err)=> {
            res.status(500).json({
                    error: "oops, internal error",
                    message: err
            })
    })



    
    // UserModel.updateOne( _id: req.body.userId, {$set: {"firstName":req.body.firstName}})

})









    // CRUD exercise -> 4. set the route that UPDATES RECORDS IN THE DATABASE (D - DELETE)

            //witout using the form, you just replace :userToDelete in the url with the _id 

// app.get("/deleteUser/:userToDelete", (req,res) => {
//         //const userToDelete = req.params.userToDelete
//         UserModel.deleteOne({ _id: req.params.userToDelete })
//                 .then((result) => {
//                         if (result.deletedCount === 0) { 
//                                 res.status(404).json({
//                                         message: 'User could not be found or already deleted.'
//                                 })
//                         } else {
//                                 res.status(200).json({
//                                         message: 'Succes! User has beeen deleted'
//                                 })
//                         }
//                 })
//                 .catch((err) => {
//                         res.status(500).json({
//                                 error: 'Oops! Unable to delete User.',
//                                 message: err 
//                         })
//                 })
// })
            

            //using the form
app.post("/deleteUser", (req,res) => {
    
    UserModel.deleteOne({ _id: req.body.userId})
            .then((result) => {
                    if (result.deletedCount === 0) { 
                            res.status(404).json({
                                    message: 'User could not be found or already deleted.'
                            })
                    } else {
                            res.status(200).json({
                                    message: 'Succes! User has beeen deleted'
                            })
                    }
            })
            .catch((err) => {
                    res.status(500).json({
                            error: 'Oops! Unable to delete User.',
                            message: err 
                    })
            })
})




// ----- launch server -----
app.listen(5501, ()=> {console.log("I'm listening on port 5501")}) // should be last, else it could not run the next lines
// good to know on wich port we are listening