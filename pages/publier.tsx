import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/compos/header';
import Menu from '@/compos/menu';
import Footer from '@/compos/footer';
import '../app/globals.css';

import { useSession, signIn, signOut } from "next-auth/react";

interface FormData {
  title: string;
  content: string;
  slug: string;
}

const Publier = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [slug, setSlug] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session]);

  function slugify(text:any) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous error

      // Generate slug from title
      const generatedSlug = slugify(title); 
      setSlug(generatedSlug);

      try {
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, image, slug }),
        });

        if (response.ok) {
            console.log('PUBLISHED');
            router.push('/blog');
        } else {
            const errorData = await response.json(); 
            setError(errorData?.message || response.statusText);
            console.error('Error:', errorData?.message || response.statusText);
        }
      } catch (error) {
        console.error('Error:', error); // Log the actual error
      } finally {
        setIsLoading(false); // Set loading state to false after the request finishes
      }
  };
  if(session) {
    return (
        <>
            <div>
                <Header/>
                <Menu/>
                <div className='p-0 lg:p-24 lg:m-12 lg:pt-0'>
                    <form onSubmit={handleSubmit} className='block'>
                        <input type='text' placeholder='Titre' value={title} onChange={(e) => setTitle(e.target.value)} className='block m-4 p-4 rounded-lg w-full bg-transparent text-black border-gray-400 border-2'/>
                        <textarea placeholder='Contenu' value={content} onChange={(e) => setContent(e.target.value)} className='block m-4 p-4 rounded-lg w-full bg-transparent text-black border-gray-400 border-2 h-72'/>
                        <input
                          type='text'
                          placeholder='Image URL'
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                          className='block m-4 p-4 rounded-lg w-full bg-transparent text-black border-gray-400 border-2'
                        />
                        <button type='submit' className='block m-4 p-4 rounded-lg bg-black text-white w-full'>Publier</button>
                    </form>
                </div>
                <Footer/>
            </div>
        </>
    );
  }
};

export default Publier;



