import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/compos/header';
import Menu from '@/compos/menu';
import Footer from '@/compos/footer';
import '../app/globals.css';


export default function Admin() {
  return (
    <>
        <Header/>
        <Menu/>
        <div>Log In</div>
        <Footer/>
    </>
  )
}
