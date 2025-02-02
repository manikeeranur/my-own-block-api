import { model, Schema } from "mongoose";


const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const usersModel = model("user", usersSchema);

export default usersModel;
