import React, { useContext } from 'react';
import { DataContext } from '@hooks/DataContext';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { createContext, useState } from 'react';
import styled from "@emotion/styled";
import { SearchIcon } from "@components/icons";
import { CategoryCard} from "@components/news";
import { Article } from "@components/types";
import { createClient } from 'contentful';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  }) //temporary function for language change

  // export async function getStaticprops() {
  //   const spaceId = process.env.SPACE_ID || '';
  //   const accessToken = process.env.CONTENT_ACCESS_TOKEN || '';

  //    const client = createClient({
  //      space: spaceId,
  //      accessToken: accessToken,
  //     });

  //     const res = await client.getEntries({content_type: 'article'})

  //     return {
  //       props: {
  //         article: res.items
  //       }
  //     }

  // }

  const client = require('contentful').createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENT_ACCESS_TOKEN,
  })

  export const getStaticProps = async () => {
    const datas = await client.getEntries()
    return {
      props: {
        list:datas.items
      }
    }
  }


  export const SearchContext = createContext("");
  interface ICategorySection {
    title: string;
    articles?: Article[];
  }  

const Search = ({ articles }: ICategorySection) => {
  const { t } = useTranslation();
  const { newdata } = useContext(DataContext);
  // if(newdata && newdata.input){
  //   console.log(newdata.input);
  // }
  // console.log(newdata)

  try {
    console.log(articles)
  }catch (error) {
    console.log(error )
}
 

  return (
    <>
    <SearchPageContainer>
    <h1>Search Resulst</h1>
    <SearchBar>
    <SearchIcon width="20px" />
      <input 
      aria-label="search bar"
      style={{width: "100%", marginLeft: "1rem"}}
      />
    </SearchBar>
    {/* <div>
    <CategoryCard card={articles?.[7]} />
      <CategoryCard card={articles?.[8]} />
      <CategoryCard card={articles?.[9]} />
      <CategoryCard card={articles?.[10]} />
      <CategoryCard card={articles?.[11]} />
    </div> */}
    </SearchPageContainer>
    </>
  )
}

const SearchPageContainer = styled.div`
padding: 0 0 0 2rem
`
const SearchBar = styled.div`
border: solid black 1px;
width: 50rem;
height: 2rem;
display: flex;
justify-contents: center;
margin-top: 2rem;
`

export default Search