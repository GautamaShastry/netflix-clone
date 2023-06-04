const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require("./routes/UserRoute")

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://gautam:gautam02@netflix.h1dy0db.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB Connected");
});

app.use("/api/user", userRoutes);

app.listen(5000, console.log(`Server started`))