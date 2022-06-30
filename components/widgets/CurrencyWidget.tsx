import { CurrencyInfo } from "@components/types";
import styled from "@emotion/styled";
import { FC } from "react";
import { HeaderWidget } from "./HeaderWidget";

const CurrencyWidget: FC<CurrencyInfo> = ({ ...data }) => {
  // This is for rendering all currencylist dynamically for what is fetched in the exchange rates api
  // const renderData = () => {
  //   return !!data?.data
  //     ? Object.entries(data.data).map((item, idx) => {
  //         return (
  //           <CurrencyList key={idx}>
  //             <div>{item[1].code}</div>
  //             <div>{item[1].value} AFN</div>
  //           </CurrencyList>
  //         );
  //       })
  //     : "Currencies are not available right now";
  // };

  return (
    <Wrapper>
      <HeaderWidget>Currency</HeaderWidget>
      <CurrencyDeets>
        <CurrencyList>
          <div className="base-currency">
            <img src="/assets/flags/usa.jpg" alt="US" /> 1 USD
          </div>
          <div className="afn-currency">89.20AFN</div>
        </CurrencyList>
      </CurrencyDeets>
    </Wrapper>
  );
};

export default CurrencyWidget;

const Wrapper = styled.div`
  & h3 {
    font-size: 24px;
  }
`;

const CurrencyDeets = styled.div`
  background-color: var(--container-color);
  border-top: 1px solid var(--primary-light);
`;

const CurrencyList = styled.div`
  padding: 1.5rem;
  display: flex;
  border-bottom: 1px solid var(--primary-light);
  justify-content: space-between;

  & .base-currency {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
