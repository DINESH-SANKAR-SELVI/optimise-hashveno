import React from 'react';
import HomeComponent from '../components/home/homeComponent/HomeComponent';
import { useTranslation } from 'react-i18next';

const HomePage = ({ id }) => {

  const { t } = useTranslation();
  
  return (
    <HomeComponent id={id} t={t} />
  );
};

export default HomePage;