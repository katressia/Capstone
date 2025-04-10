import { Router } from "express";
import Chakra from "../models/Chakra.js";

const router = Router();

// Create chakra route
router.post("/", async (request, response) => {
  try {
    const newChakra = new Chakra(request.body);

    const data = await newChakra.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all chakras route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Chakra.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single chakra by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Chakra.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a chakra by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Chakra.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single chakra by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Chakra.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          chakra: body.chakra,
          color: body.color,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
