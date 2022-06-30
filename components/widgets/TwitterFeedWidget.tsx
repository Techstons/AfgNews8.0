import styled from "@emotion/styled";
import { HeaderWidget } from "./HeaderWidget";
import Image from "next/image";
import { Heart, Share, Twitter } from "@styled-icons/bootstrap";
import { formatDistanceToNow } from "date-fns";
import { Verified } from "@styled-icons/material";
import { FC } from "react";
import { TwitterData } from "@types";

const TwitterFeedWidget: FC<TwitterData> = ({ data, meta }) => {
  const renderTweets = () => {
    return !!data ? (
      data.map((item, index) => {
        return (
          <TwitterFeedContainer key={index}>
            <TwitterFeedHeader>
              <div>
                <div className="profile">
                  <Image
                    src="/assets/flags/inr.png"
                    alt="AFGNews Twitter account profile picture"
                    layout="fixed"
                    width="30px"
                    height="30px"
                  />
                </div>
                <div className="user">
                  <p>
                    AFGNews <Verified size={12} color="#1da1f2" />
                  </p>
                  <p>@AFGNews</p>
                </div>
              </div>
              <div>
                <Twitter size={24} />
              </div>
            </TwitterFeedHeader>
            <TwitterContent>{item.text}</TwitterContent>
            <TwitterFeedBottom>
              <div>
                <Heart size={16} />
                <Share size={16} />
              </div>
              <div>{formatDistanceToNow(new Date(2014, 6, 2))}</div>
            </TwitterFeedBottom>
          </TwitterFeedContainer>
        );
      })
    ) : (
      <div>No tweets available</div>
    );
  };

  return (
    <Wrapper>
      <HeaderWidget>Twitter</HeaderWidget>
      <WidgetContainer>{renderTweets()}</WidgetContainer>
    </Wrapper>
  );
};

export default TwitterFeedWidget;

const Wrapper = styled.div``;

const WidgetContainer = styled.div`
  max-height: 660px;
  overflow-y: auto;
`;

const TwitterFeedContainer = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  max-height: 660px;
  overflow-y: auto;
`;

const TwitterFeedHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:first-of-type {
    display: flex;
    gap: 0.5rem;

    & .profile {
      & img {
        border-radius: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    & .user {
      font-size: 12px;
    }
  }

  & > div:last-of-type {
    color: #1da1f2;
  }
`;

const TwitterContent = styled.div`
  padding: 1rem 0;
`;

const TwitterFeedBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 12px;
  color: var(--primary-light);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & > div:first-of-type {
    display: flex;
    gap: 1rem;
  }
`;
