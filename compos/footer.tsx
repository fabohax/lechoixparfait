// compos/header.tsx

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
        <div className="block mt-12 text-center">
                <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="lemanuel">
                Lire le manuel
                </Link>
                <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="equipe">
                Voir l'équipe
                </Link>
                <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="don">
                Faire un don
                </Link>
        </div>
        <div className="block mt-8 mb-12 lg:mt-2 lg:mb-8 text-center">
                <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://theperfectchoice.eu">
                theperfectchoice.eu
                </Link>
                <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://lasceltaperfetta.it">
                lasceltaperfetta.it
                </Link>
                <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://laeleccionperfecta.es">
                laeleccionperfecta.es
                </Link>
        </div>
    </>
  );
};

export default Footer;


