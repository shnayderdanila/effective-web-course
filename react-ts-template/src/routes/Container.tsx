import React, { FC } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';

const Container: FC = () => {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default Container;
