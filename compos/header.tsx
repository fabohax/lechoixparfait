// compos/header.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex static m-2 mt-4">
      <div className='relative'>
        <Link href="/" className=''>
          <Image src="/lechoixparfait.svg" height="30" width="210" alt="lcp-title" className='pl-4' priority></Image>
        </Link>
      </div>
    </div>
  );
};

export default Header;
