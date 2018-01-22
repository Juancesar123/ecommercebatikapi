// chat-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const chat = new Schema({
    clientid: { type: String, required: true },
    Toclientid: { type: String, required: true },
    Message: { type: String, required: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('chat', chat);
};
