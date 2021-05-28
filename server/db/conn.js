const mongoose = require("mongoose");
const Data = process.env.DATABASE;

mongoose
  .connect(Data, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(" DB is connected");
  })
  .catch((e) => {
    console.log(" DB not connnected");
  });
