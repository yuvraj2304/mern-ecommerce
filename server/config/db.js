const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://akash:4080@cluster0.qfkcgib.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
