import React, { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "next-i18next";
import styled from "@emotion/styled";
import { SearchIcon } from "@components/icons";
import { Article } from "@components/types";
import { getContentfulData } from "@hooks/article";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
}); //temporary function for language change

interface ICategorySection {
  title: string;
  articles?: Article[];
}

const Search = () => {
  const [data, setData] = useState<Array<any>>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentfulData();
      if (data) {
        setData(data);
      } else {
        setData([]);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <SearchPageContainer>
        <h1>Search Resulst</h1>
        <SearchBar>
          <SearchIcon width="20px" />
          <input
            aria-label="search bar"
            style={{ width: "100%", marginLeft: "1rem" }}
          />
        </SearchBar>

        <div>
          {data.map((entry) => (
            <div key={entry.sys.id}>
              <h2>{entry.fields.title}</h2>
              <p>{entry.fields.content}</p>
            </div>
          ))}
        </div>
      </SearchPageContainer>
    </>
  );
};

const SearchPageContainer = styled.div`
  padding: 0 0 0 2rem;
`;
const SearchBar = styled.div`
  border: solid black 1px;
  width: 50rem;
  height: 2rem;
  display: flex;
  justify-contents: center;
  margin-top: 2rem;
`;

export default Search;
