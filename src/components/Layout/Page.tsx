import { NextPage } from 'next';
import Head from 'next/head';
import { memo, PropsWithChildren } from 'react';
import { HomepageMeta } from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({ children, title, description }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        <link href={``} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />

        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />


      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
