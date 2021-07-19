import mongoose from "mongoose";
const destinationSchema = new mongoose.Schema({
  location: String,
  visited: Boolean,
  owner_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
},
{ timestamps: true });
const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;