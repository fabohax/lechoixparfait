import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/compos/header';
import Footer from '@/compos/footer'; 
import Menu from '@/compos/menu';
import '../app/globals.css';

import { useSession, signIn, signOut } from "next-auth/react";

const Blog = () => {
  
  const { data: session } = useSession();
  interface Post {
      id: number;
      title: string;
      content: string;
      created_at: string;
      slug: string;
  }
    
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
          const fetchPosts = async () => {
          const response = await fetch('/api/posts');
          const data = await response.json();
          setPosts(data);
      };

      fetchPosts();
  }, []);

  return (
    <>
      <div>
        <Header />
        <Menu />
        <div className="p-8 lg:p-24 lg:m-12 lg:pt-12">
          <p className="mb-8 text-3xl font-bold">Blog</p>
          {posts.length > 0 ? (
            posts.map((post) => (
            <div key={post.id}> 
              <Link
                href={`/blog/${post.slug}`} 
                className="text-blue-900 hover:underline"
              >
                <h2 className="text-3xl font-bold">{post.title}</h2>
              </Link>
                <p>
                    {new Date(post.created_at).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                </p>
              <br />
            </div>
          ))) : (
            <p>Chargement des publications...</p>
          )}
          <hr></hr>
          {session && (
            <Link href="/publier" className='mb-8 text-lg font-bold hover:underline'>Publier</Link>
          )}
        </div>
        
        <Footer/>
        </div>
    </>
  );
};

export default Blog;
