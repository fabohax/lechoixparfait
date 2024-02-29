import { NextApiRequest, NextApiResponse } from 'next';
import { getPostBySlug } from '@/lib/posts'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { slug } = req.query;

    try {
      const post = await getPostBySlug(slug);

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ message: 'Method not allowed' });
  }
}
