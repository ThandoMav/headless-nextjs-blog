import React from 'react';
import Head from 'next/head';
import Header from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title, metaContent }) => (
  <>
     <Head>
        <title>{title ? title + ' - StudentFontein' : 'StudentFontein'}</title>
        <meta name="description" content={metaContent ? metaContent + ' - StudentFontein' : 'StudentFontein'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
