import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/compos/header';
import Menu from '@/compos/menu';
import '../app/globals.css';

const LeManuel = () => {

    return (
        <>
            <div>
                <Header/>
                <Menu/>
                <div className='border-2 border-black rounded-3xl p-8 lg:p-24 lg:m-24 w-full'>
                    
                    <p className='text-3xl font-bold'>GUIDE D&apos;UTILISATION</p>
                    <br></br>
                    <p className='text-lg'>Pour saisir en détail le fonctionnement de la méthode LE CHOIX PARFAIT, il est essentiel de consulter le Manuel.</p>
                    <br></br>
                    <p className='mt-8'><Link href="/LeChoixParfaitEDoubleVote_Manuel.pdf" target="_blank" className='font-bold bg-black text-white p-4 rounded-full'>Téléchargez le manuel ici</Link></p>
                    <br></br>
                    <p className='mt-8 text-lg'>
                        <Link href="/ThePerfectChoice_Manual.pdf" target="_blank" className='inline font-bold text-black pr-4 rounded-full'>Download English version</Link> |
                        <Link href="/LaSceltaPerfetta_Manuale.pdf" target="_blank" className='inline font-bold text-black p-4 rounded-full'>Scarica la versione Italiana</Link> |
                        <Link href="/ThePerfectChoice_Manual.pdf" target="_blank" className='inline font-bold text-black pl-4 rounded-full'>Descargar versión en Español</Link>
                    </p>
                </div>
                <div className='block mt-12 text-center'>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="auteur">À propos de l&apos;auteur</Link>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="lemanuel">Lire le manuel</Link>
                    <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="don">Faire un don</Link>
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

export default LeManuel;