import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <Root>
      <TopContent>
        <div>---</div>
        <div>Logo</div>
        <div>Button</div>
      </TopContent>
      <BottomContent>
        <div className="menu">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <h1>-</h1>
            </div>
          ))}
        </div>
        <div className="search"></div>
      </BottomContent>
    </Root>
  );
};

const Root = styled.nav`
  padding: 0 1rem;
  background-color: var(--nav-color);
  color: var(--nav-text);
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & .menu {
    display: flex;
  }

  & .search {
  }
`;

export default Navbar;
