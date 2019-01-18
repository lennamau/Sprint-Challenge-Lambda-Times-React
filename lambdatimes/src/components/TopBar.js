import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  
  @media (min-width: 1280px) {
    width: 1280px;
  }
  

`;
const Left = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const SpanLC = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;


const TopBar = () => {
  return (
    <Top>
      <Container>
        <Left>
          <SpanLC>TOPICS</SpanLC><SpanLC>SEARCH</SpanLC>
        </Left>
        <CenterContainer>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </CenterContainer>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </Container>
    </Top>
  )
}

export default TopBar;