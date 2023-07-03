import { MongoClient } from "mongodb";

const dbUrl = process.env.ATLAS_CONNECTION ?? "";

export const testDbConnection = async () => {
  try {
    const connection = await MongoClient.connect(dbUrl);

    console.log("Connected successfully to server");
    connection.db("test");
    connection.close();
  } catch (error) {
    console.log(error);
  }
};
