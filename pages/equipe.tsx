import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/compos/header';
import Menu from '@/compos/menu';
import '../app/globals.css';

const Auteur = () => {

    return (
        <>
            <div>
                <Header/>
                <Menu/>
                <div className='text-center border-2 border-black rounded-3xl p-8 lg:p-24 lg:m-24'>
                    <Image src="/nusca.jpg" height="250" width="250" alt="emanuele_nusca" className='text-center mx-auto mb-8 rounded-full'></Image>
                    <div className='text-center text-lg '>
                        <Link href="https://twitter.com/EmanueleNusca" target='_blank'><p className='text-3xl font-bold'>Emanuele Nusca</p></Link>
                        <br></br>
                        <p>Visionnaire, expert en marque et propriété intellectuelle, avocat spécialisé en transactions avec des compétences dans les domaines technologique/numérique, corporatif et des médias et du divertissement, je vous accompagne pour naviguer à travers les défis complexes du monde des affaires. Avec une expertise approfondie dans la protection des marques et de la propriété intellectuelle, je m&apos;efforce de garantir la sécurité et la réussite de vos initiatives commerciales. Mon engagement est d&apos;apporter une perspective novatrice tout en offrant des conseils juridiques pointus pour vous aider à atteindre vos objectifs.</p>
                    </div>
                </div>
                <div className='block mt-12 text-center'>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="/equipe">Équipe</Link>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="/lemanuel">Lire le manuel</Link>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="/don">Faire un don</Link>
                </div>

                <div className='block mt-8 mb-12 lg:mt-2 lg:mb-8 text-center'>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://theperfectchoice.eu">theperfectchoice.eu</Link>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://lasceltaperfetta.it">lasceltaperfetta.it</Link>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://laeleccionperfecta.es">laeleccionperfecta.es</Link>
                </div>
            </div>
        </>
    );

};

export default Auteur;



