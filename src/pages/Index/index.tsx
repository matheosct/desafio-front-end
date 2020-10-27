import React from 'react';

import PageHeader from '../../components/PageHeader';
import Carousel from '../../components/Carousel';
import Editoriais from '../../components/Editoriais';
import Acessos from '../../components/Acessos';
import Location from '../../components/Location';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

function Index() {
  return (
    <>
      <PageHeader/>
      <Carousel/>
      <Editoriais/>
      <Acessos/>
      <Location/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Index;