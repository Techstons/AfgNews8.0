import React, { useContext } from 'react';
import { DataContext } from '@hooks/DataContext';
import { DataProvider } from '@hooks/DataContext';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { createContext, useState } from 'react';
// import {withDataProvider} from '@hooks/HOC';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  }) //ano pani murag temp need nimo tanawon ang code ni kim


  export const SearchContext = createContext("");


const Search = () => {
  const { t } = useTranslation();
  const { newdata } = useContext(DataContext);
  // if(newdata && newdata.input){
  //   console.log(newdata.input);
  // }
  console.log(newdata)

  return (
    <>
    <h1>{"You've search for " + newdata}</h1>
    <div>
      hi hello
    </div>
    </>
  )
}

export default Search