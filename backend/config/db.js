const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://TabrezHira:Hamza.447@ide.4egrm.mongodb.net/?retryWrites=true&w=majority&appName=IDE",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
    
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectDB;