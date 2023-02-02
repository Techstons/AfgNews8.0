import React, { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import styled from "@emotion/styled";
import { SearchIcon } from "@components/icons";
import { Article } from "@components/types";
import { getContentfulData } from "@hooks/article";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../hooks/store";
import { ChangeEvent } from "react";
import { updateValue } from "slices/searchSlices";
import Head from "next/head";

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
  const newSearch = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const [data, setData] = useState<Array<any>>([]);
  const [newSearchData, setNewSearchData] = useState("");
  const [showNoResults, setShowNoResults] = useState(false);

  let listOfNews = data.map((entry) => {
    return entry;
  });

  let filteredArray = listOfNews.filter(
    (object) =>
      object.fields &&
      object.fields.title &&
      object.fields.title.toLowerCase().includes(newSearch)
  );

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setNewSearchData(event.target.value);
  }

  function pushNewSearch(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      dispatch(updateValue(newSearchData));
    }
  }

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

  useEffect(() => {
    if (filteredArray.length <= 0) {
      const timeoutId = setTimeout(() => {
        setShowNoResults(true);
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    setShowNoResults(false);
  }, [filteredArray.length]);

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <SearchPageContainer>
        {newSearch ? (
          <h1>Search Results for {newSearch}</h1>
        ) : (
          <h1>All articles</h1>
        )}
        <SearchBar>
          <SearchIcon width="20px" style={{ marginLeft: "1rem" }} />
          <input
            aria-label="search bar"
            style={{ width: "100%", marginLeft: "1rem" }}
            placeholder="search for news articles"
            onChange={handleSearch}
            onKeyDown={pushNewSearch}
          />
        </SearchBar>
        {filteredArray.length > 0 ? (
          <div>
            {filteredArray.map((entry) => (
              <ArticleWrapper key={entry.sys.id}>
                <PerArticle>
                  {entry.fields.featuredImage &&
                    entry.fields.featuredImage.length > 0 && (
                      <ArticleImage
                        src={entry.fields.featuredImage[0].original_url}
                      />
                    )}
                  <InfoWrapper>
                    <ArticleTitle>{entry.fields.title}</ArticleTitle>
                    <div style={{ display: "flex", color: "black !important" }}>
                      {entry.fields.category &&
                        entry.fields.category.fields && (
                          <p
                            style={{
                              borderRight: "2px solid #d32011",
                              marginRight: "1rem",
                              padding: "0 5px 0 0",
                            }}
                          >
                            {entry.fields.category.fields.name}
                          </p>
                        )}
                      <p>{moment(entry.sys.createdAt).fromNow()}</p>
                    </div>
                  </InfoWrapper>
                  {/* <p>
                  {entry.fields.body &&
                    entry.fields.body.content &&
                    entry.fields.body.content[0] &&
                    entry.fields.body.content[0].content &&
                    entry.fields.body.content[0].content[0] &&
                    entry.fields.body.content[0].content[0].value
                      ? entry.fields.body.content[0].content[0].value
                      : 'No content available'}
                </p> */}
                  {/* accessing contents */}
                </PerArticle>
              </ArticleWrapper>
            ))}
          </div>
        ) : showNoResults ? (
          <NoSearchResults>No search results</NoSearchResults>
        ) : (
          <NoSearchResults>Loading...</NoSearchResults>
        )}
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

const ArticleImage = styled.img`
  width: 40rem;
  height: 20rem;
  border-radius: 10px;
  object-fit: cover;
`;

const ArticleTitle = styled.h2`
  width: 30rem;
  font-size: 2.5rem;
`;

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0 0 0;

  &:hover {
    cursor: pointer;
    color: var(--primary-color);
  }
`;

const PerArticle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
`;

const InfoWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NoSearchResults = styled.h1`
  display: flex;
  justify-content: center;
  height: 70vh;
  align-items: center;
  font-size: 3rem;
`;

export default Search;
