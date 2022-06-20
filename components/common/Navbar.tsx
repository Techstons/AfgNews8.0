import { MenuIcon, SearchIcon } from "@components/icons";
import styled from "@emotion/styled";
import data from "@test-data";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <Root>
      <TopContent>
        <div>
          <span onClick={() => setActive(!active)}>
            <MenuIcon width="25px" />
          </span>
        </div>
        <div>
          <span>LOGO</span>
        </div>
        <div>
          <span>
            <button className="signup">Join AFGNews</button>
          </span>
        </div>
      </TopContent>
      <BottomContent className={`${active ? "active" : ""}`}>
        <div className="menu">
          {data.menuitems.map((menu, i) => (
            <div key={i}>
              <Link href={menu.url}>
                <MenuItem>{menu.title}</MenuItem>
              </Link>
            </div>
          ))}
        </div>
        <div className="search">
          <SearchIcon width="20px" />
          <input />
        </div>
      </BottomContent>
    </Root>
  );
};

const Root = styled.nav`
  padding: 0.5rem 1rem;
  background-color: var(--nav-color);
  font-weight: var(--font-medium);
  color: var(--nav-text);

  & .active {
    display: block;
  }
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;

  & div {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  & > div:nth-child(2) {
    font-size: 1.25rem;
    font-weight: var(--font-bold);
  }

  & div:first-child > span {
    cursor: pointer;
    margin: auto auto auto 0;

    @media only screen and (min-width: 728px) {
      display: none;
    }
  }

  & div:last-child > span {
    margin-left: auto;
  }

  .signup {
    color: var(--primary-color);
  }
`;

const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;

  & .menu {
    display: flex;
    gap: 2rem;

    @media only screen and (max-width: 728px) {
      flex-direction: column;
    }
  }

  & .search {
    display: flex;
    padding: 0.5rem;
    background-color: #202224;
    border-radius: 0.25rem;
    margin-left: 2rem;

    & input {
      color: white;
      width: 100%;
      padding-left: 0.35rem;
      outline: none;
      border: none;
      background-color: transparent;
    }

    @media only screen and (max-width: 728px) {
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 728px) {
    display: none;
    justify-content: flex-start;
  }
`;

const MenuItem = styled.a`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid var(--primary-color);
  }
`;

export default Navbar;
