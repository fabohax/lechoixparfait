import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/compos/header';
import Menu from '@/compos/menu';
import Footer from '@/compos/footer';
import Link from 'next/link';

const SinglePost = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const slug = router.query.slug; 
      const response = await fetch(`/api/single?slug=${slug}`);
      const data = await response.json();
      setPost(data);
    };
  
    fetchPost();
  }, [router.query.slug]); 
  

  if (!post) {
    return <p className='m-24 text-lg font-bold text-center'>...</p>;
  }

  return (
    <div>
        <Header/>
        <Menu/>
        <div className='p-8 lg:p-24 lg:m-12 lg:pt-12'>
            <Link href="/blog"><p className='mb-8 text-3xl font-bold'>Blog</p></Link>
            <br/>
            <h2 className='text-3xl font-bold '>
                {post.title}
            </h2>
            <p>{new Date(post.created_at).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}</p>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <Footer/>
    </div>
  );
};

export default SinglePost;
