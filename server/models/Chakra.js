import mongoose from "mongoose";

const chakraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/,
  },
  chakra: {
    type: String,
    required: true,
    enum: [
      "crown",
      "third-eye",
      "throat",
      "heart",
      "solar-plexus",
      "sacral",
      "root",
    ],
  },
  color: {
    type: String,
  },
});

const Chakra = mongoose.model("Chakra", chakraSchema);

export default Chakra;
