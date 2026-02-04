import { Client, Query, TablesDB } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_METRICS;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client();
client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);
client.setProject(PROJECT_ID);

const database = new TablesDB(client);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    if (!searchTerm || typeof searchTerm !== "string") return;

    const normalizedTerm = searchTerm.toLowerCase().trim(); // to prevent duplicate searches

    const response = await database.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.equal("movie_id", movie.id)],
      limit: 1,
    });

    // If row exists → update count
    if (response.rows.length > 0) {
      const row = response.rows[0];
      const rowId = row.$id;

      if (!rowId) {
        console.error("Row ID missing:", row);
        return;
      }

      await database.updateRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId,
        data: {
          count: row.count + 1,
        },
      });

      return;
    }

    // If row does NOT exist → create new row
    await database.createRow({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      rowId: crypto.randomUUID(),
      data: {
        searchTerm: normalizedTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null,
      },
    });
  } catch (err) {
    console.error("Error updating search metrics:", err);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [
        Query.limit(5),
        Query.orderDesc("count")
      ]
    });
    return result.rows;
    
  } catch (error) {
    console.error(`Error getting trending movies from DB :${error}`);
  }
};
