import { Pool } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';

require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Check if the request method is GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await pool.connect();

    // Retrieve all posts from the table
    const query = 'SELECT * FROM lcp_posts'; // Remove the WHERE clause

    const result = await client.query(query);

    client.release();

    res.status(200).json(result.rows); // Send all fetched posts as JSON
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default handler;
