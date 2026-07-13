import path from "path";
import fs from "fs";

/*
 1. Create Product - a function
 2. Get Product - a function (All , Specific)
 3. Update Product - a function
 4. Delete Product - a function
*/

async function createProduct(req, res) {
  try {
    const product = req.body;
    if (Object.keys(product).length === 0) {
      return res.json({ message: "No product found!. Yet to create one" });
    }

    //
  } catch (error) {}
}

import { pathToFileURL } from "url";

async function getProduct(req, res) {
  const absolutePath = path.resolve("src/data/products.json");
  const fileUrl = pathToFileURL(absolutePath).href; // file://D

  try {
    const { default: data } = await import(fileUrl, {
      with: { type: "json" },
    });

    if (!data || Object.keys(data).length === 0) {
      return res.json({ message: "No product found!. Yet to create one" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getProduct };
