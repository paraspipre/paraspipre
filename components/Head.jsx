import Head from 'next/head';
const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Paras Pipre is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="paras pipre, paras, pipre, web developer portfolio, paras web developer, paras developer, mern stack, paras pipre portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Paras Pipre's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/YWieU1Y" />
      <meta property="og:url" content="https://paraspipre.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Paras Pipre',
};
