const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://anuj_zeta:9621337879@cluster0.lv9gp.mongodb.net/localPeVocal?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
});