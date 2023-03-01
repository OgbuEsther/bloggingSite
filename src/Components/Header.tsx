import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <Logo>Blog</Logo>
            <NavHold>
              <Navs>Read Blogs</Navs>
              <Navs>Go Pro</Navs>
              <Navs>Inspiration</Navs>
              <Navs>Read Stories</Navs>
            </NavHold>
          </First>
          <Second>
            <Search>
              <Icn>
                <BsSearch />
              </Icn>
              <Input placeholder="Search" type="search" />
            </Search>
            <UserImage></UserImage>
            <Button>Upload</Button>
          </Second>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const NavHold = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #ee2b76;
  font-weight: 600;
  cursor: pointer;
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const UserImage = styled.div``;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  flex: 1;
  width: 80%;
  height: 100%;
  margin-left: 10px;
`;

const Icn = styled.div`
  margin-left: 5px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
  width: 250px;
  height: 40px;
  margin-right: 20px;
  /* border: 1px solid darkgray; */
  border-radius: 5px;
  background-color: #d3d3d31d;
`;

const Navs = styled.div`
  font-size: 15px;
  color: #000000a2;
  font-weight: 500;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;

  :hover {
    color: black;
    font-weight: 600;
    text-decoration: underline;
    transition: all 350ms ease-in-out;
  }
`;

const Logo = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-style: italic;
  font-size: 25px;
  color: black;
  font-weight: 700;
  margin-right: 30px;
`;

const Second = styled.div`
  display: flex;
  align-items: center;
`;

const First = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: 100%;
  /* background-color: aliceblue; */
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 3px 0.6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
