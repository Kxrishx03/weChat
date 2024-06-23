const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    },
   
}, {
    timestamps: true
})

const Message = mongoose.model("Message", messageSchema)

module.exports = Message;
