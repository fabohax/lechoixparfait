require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Function to fetch a post by its slug
async function getPostBySlug(slug) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM lcp_posts WHERE slug = $1`,
      [slug]
    );

    const post = result.rows[0];
    await client.release();
    return post;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    throw error; // Re-throw the error for handling in the API route
  }
}

module.exports = {
  getPostBySlug,
};
