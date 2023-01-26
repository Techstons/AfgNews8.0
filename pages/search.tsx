import React, { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import styled from "@emotion/styled";
import { SearchIcon } from "@components/icons";
import { Article } from "@components/types";
import { getContentfulData } from "@hooks/article";
import moment from "moment";
import { useSelector } from "react-redux";
import type { RootState } from "../hooks/store";

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

  // console.log(data);
  let listOfNews = data.map((entry) => {
    return entry;
  });

  // console.log(listOfNews);

  let searchWord = "tesla";

  // let filteredSentences = listOfNews.filter(
  //   (sentence) =>
  //     typeof sentence === "string" &&
  //     sentence.toLowerCase().includes(searchWord)
  // );
  // let filteredSentences = listOfNews.filter(
  //   (sentence) => sentence.fields.title === searchWord
  // );

  // console.log(filteredSentences);
  let filteredArray = listOfNews.filter(
    (object) =>
      object.fields &&
      object.fields.title &&
      object.fields.title.toLowerCase().includes(newSearch)
  );

  // console.log(filteredArray);

  return (
    <>
      <SearchPageContainer>
        <h1>Search Results {newSearch}</h1>
        <SearchBar>
          <SearchIcon width="20px" style={{ marginLeft: "1rem" }} />
          <input
            aria-label="search bar"
            style={{ width: "100%", marginLeft: "1rem" }}
          />
        </SearchBar>

        <div>
          {/* {data.map((entry) => (
            <div key={entry.sys.id}>
              <h2>{entry.fields.title}</h2>
              <p>{entry.fields.content}</p>
              <img src={entry.fields.featuredImage[0].original_url} />
            </div>
          ))} */}
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
                    {entry.fields.category && entry.fields.category.fields && (
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

export default Search;
