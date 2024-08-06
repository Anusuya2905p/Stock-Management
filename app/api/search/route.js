import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
const query = request.nextUrl.searchParams.get("query");  
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://mongodb:C2E21f9ToR8ACJKT@cluster0.kqf1dpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);
  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");
    // Query for a movie that has the title 'Back to the Future'

    const products = await inventory
      .aggregate([
        {
          $match: {
            $or: [
              { slug: { $regex: query, $options: "i" } }, // Partial match for name (case insensitive)
            ],
          },
        },
      ])
      .toArray();

    return NextResponse.json({ success: true, products });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
