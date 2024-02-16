require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // env 파일에 저장되어있는 정보가져와서 mongoDB에 연결
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        // exit함수는 꼭 안넣어도 되지만 혹시모를 세션이 생길때 대비함
        process.exit(1);
    }
}
module.exports = connectDB;