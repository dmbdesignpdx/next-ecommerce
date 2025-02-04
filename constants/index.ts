export const MongoDB = {
  DATABASE: "learning",
  Collection: {
    USERS: "users",
    PRODUCTS: "products",
    CARTS: "carts",
  },
} as const;

export const COLLECTIONS = [...Object.values(MongoDB.Collection)] as const;

export type CollectionName = typeof COLLECTIONS[number];

export const URI =
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_KEY}`
  + "@clusterpdx.9aqd9.database.net/?retryWrites=true&w=majority&appName=ClusterPDX";
