import styled from "@emotion/styled";
import { FC } from "react";
import { WeatherInfo } from "@components/types";
import Image from "next/image";
import { PinMap } from "@styled-icons/bootstrap/PinMap";
import { format } from "date-fns";
import { HeaderWidget } from "./HeaderWidget";
import useFormattedDate from "@hooks/useFormattedDate";
const WeatherWidget: FC<WeatherInfo> = ({ data }) => {
  return (
    <Wrapper>
      <HeaderWidget>Weather</HeaderWidget>
      <WeatherDeets>
        <div className="date">
          <div>
            <div>Today</div>
          </div>
          <div>
            <div>{useFormattedDate(new Date(), "widget")}</div>
          </div>
        </div>

        <div className="main">
          <div className="temperature">
            30
            <sup className="celsius">&#8451;</sup>
          </div>

          <div className="weather">Clear skies</div>
        </div>

        <div className="timezone">
          <PinMap width={20} height={20} /> AFN / Kabul
        </div>

        {!!data && (
          <>
            {/* <div className="date">
              <div>
                <div>Today</div>
                <div>{format(data.current.dt, "h:m bb")}</div>
              </div>
              <div>
                <div>{format(data.current.dt, "MMM, do yy")}</div>
              </div>
            </div>

            <div className="main">
              <div className="temperature">
                {data.current.temp}
                <sup className="celsius">&#8451;</sup>
              </div>

              <div className="weather">
                {data.current.weather[0].description}
              </div>
            </div>

            <div className="timezone">{data.timezone}</div> */}
          </>
        )}
      </WeatherDeets>
    </Wrapper>
  );
};

export default WeatherWidget;

const Wrapper = styled.div`
  & h3 {
    font-size: 24px;
  }
`;

const WeatherDeets = styled.div`
  padding: 1.5rem;
  background-color: black;
  color: white;

  & .date {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .main {
    position: relative;
    text-align: center;
    padding-bottom: 1.5rem;

    & .temperature {
      font-size: 6rem;
      font-weight: var(--font-medium);

      & .celsius {
        position: absolute;
        color: yellow;
        font-size: 2.5rem;
      }
    }

    & .weather {
      font-size: 1.75rem;
      font-weight: var(--font-medium);
    }
  }

  & .timezone {
    text-align: center;
  }
`;
