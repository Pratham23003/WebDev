import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

if (!process.env.DB_URI) {
  throw new Error("DB_URI is missing in .env");
}

console.log(process.env.DB_URI);

function generateUser({
  firstName = "Unknown",
  lastName = "Unknown",
  state = "",
  country = "",
  city = "",
  pincode = null,
} = {}) {
  const user = { firstName, lastName };
  if (state) user.state = state;
  if (country) user.country = country;
  if (city) user.city = city;
  if (pincode !== null) user.pincode = pincode;
  return user;
}

async function runGetStarted() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri);

  try {
    const database = client.db("test");
    const users = database.collection("TestDB");

    //READ
    // const query = { pincode: 141122 };
    const usersList = await users.find({}).toArray();
    // console.log(usersList);

    //INSERT (CREATE)
    // const insertUser = await users.insertMany([
    //     generateUser({ firstName: 'Nikhil', lastName: 'Deora', state: 'Punjab', country: 'India', city: 'Firozpur' }),
    //     generateUser({ firstName: 'ABC', lastName: 'XYZ' })
    // ]);

    //UPDATE
    const dataUpdate = await users.updateOne(
      {firstName: "Nikhil",},
      {$set: {'city':'LDH'}},
    );

    //DELETE
    const deleteUser = await users.deleteOne({
        "firstName" : 'ABC'
    });

    console.log(usersList);

  } finally {
    await client.close();
  }
}

runGetStarted().catch(console.error);
