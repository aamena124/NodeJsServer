const article = require("mongoose");
const schema = article.Schema;

const articleSchema = new schema({  
    name: String,
    age: Number,
    gender: String,
    dateofbirth: Date,
});
const DB =article.model("DB", articleSchema);
module.exports = DB;
