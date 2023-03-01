import React from "react";
import styled from "styled-components";
import pic from "../assests/dribOne.webp";

const AllBooks = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Card>
            <ImageHold>
              <img src={pic} alt="main" />
            </ImageHold>
            <TextHold></TextHold>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AllBooks;

const TextHold = styled.div`
  width: 100%;
  height: 20%;
  background-color: pink;
`;

const ImageHold = styled.div`
  width: 100%;
  height: 80%;
  /* background-color: blue; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;
  }
`;

const Card = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 350px;
  /* background-color: red; */
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: gray; */
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;
  background-color: aliceblue;
`;
