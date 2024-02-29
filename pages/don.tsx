import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/compos/header';
import Menu from '@/compos/menu';
import '../app/globals.css';

const Don = () => {

    return (
        <>
            <div>
                <Header/>
                <Menu/>
                <div className='border-2 border-black rounded-3xl p-8 lg:p-24 lg:m-24'>
                    
                    <p className='text-3xl font-bold'>Faire un Don</p>
                    <br></br>
                    <p className='text-lg'>
                    &quot;Le Choix Parfait e Double Vote&quot; sont des projets en cours de développement entièrement financés par leur créateur, Emanuele Nusca, qui a investi personnellement pour concrétiser l&apos;idée de cette méthode à un niveau de développement permettant son utilisation sur ce site, afin qu&apos;elle puisse être testée dans son fonctionnement et comprise à mesure qu&apos;elle est pratiquée gratuitement par les utilisateurs.
                    </p>
                    <p className='text-lg'>
                        Cependant, le développement continu de ce portail et de ses fonctionnalités nécessitera beaucoup d&apos;énergie. Ainsi, les utilisateurs ont la possibilité de coopérer de différentes manières pour contribuer au succès de ce projet. Les contributions peuvent être financières, mais également prendre la forme de partages sur les réseaux sociaux, de commentaires sur le site, de compétences techniques (artistiques, programmation, traduction, etc.), de signalisations du projet à des groupes intéressés, ou même d&apos;organiser des événements informatifs ou des conférences pour expliquer la méthode.
                    </p>
                    <p className='text-lg'>
                        L&apos;implication personnelle dans la création d&apos;une &quot;S.P.&quot; (Scelta Perfetta) et l&apos;invitation d&apos;amis et connaissances à participer à un vote avec le &quot;VOTO DUALE&quot; est également encouragée comme moyen naturel de soutenir le projet et de comprendre son fonctionnement de manière créative.
                    </p>
                    <br></br>
                    <p className='text-lg'>Adresses pour faire des dons de cryptomonnaies:</p>
                    <div>
                        <br/>
                        <p>Bitcoin (BTC): </p>
                        <input type="text" className='bg-transparent mt-8 flex font-bold border-orange-500 border-2 text-black p-4 rounded-full text-lg w-full' value="1H43KsGRsQiJMYPKj6YcQne9to4K7DVDsN"/>
                        </div>
                    <br></br>
                    <p className='italic'>
                    *** IMPORTANT! ***
                        – Avant d&apos;envoyer des crypto via adresse, il est de bonne pratique de toujours vérifier que l&apos;adresse collée dans votre wallet correspond à celle copiée !!!
                        – Si vous souhaitez faire don d&apos;autres cryptomonnaies que celles-ci, faites-le-nous savoir et nous ajouterons d&apos;autres adresses !
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

export default Don;



