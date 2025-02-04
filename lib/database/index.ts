// Theirs
import {
  type Collection,
  MongoClient,
  ServerApiVersion
} from "mongodb";

// Ours
import type { User, Product, Cart } from "@/types";
import { URI, MongoDB } from "@/constants";

const {
  USERS,
  CARTS,
  PRODUCTS,
} = MongoDB.Collection;


type Collections = {
  [USERS]: () => Collection<User>;
  [CARTS]: () => Collection<Cart>;
  [PRODUCTS]: () => Collection<Product>;
}


const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  maxPoolSize: 10,
});



export async function useMongoCollections(): Promise<Collections> {
  try {
    await client.connect();
    const db = client.db(MongoDB.DATABASE);

    return ({
      [PRODUCTS]: () => db.collection<Product>(PRODUCTS),
      [USERS]: () => db.collection<User>(USERS),
      [CARTS]: () => db.collection<Cart>(CARTS),
    });
  } catch (e) {
    throw new Error(`${e}`);
  }
}


process.on("SIGINT", async () => {
  await client.close();
  console.log("Closing client due to 'SIGINT'.");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await client.close();
  console.log("Closing client due to 'SIGTERM'.");
  process.exit(0);
});
