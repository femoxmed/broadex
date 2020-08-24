import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
  title: string;
  last?: boolean;
  imgSrc: string;
}

const StyledHeader = styled(Card.Header)`
  height: 124px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 9px #00000033;
  border: 2px solid #000080;
  border-radius: 30px 0px !important;
  text-align: center;

  @media screen and (min-width: 768px) {
    height: 108px;
  }
  @media screen and (min-width: 992px) {
    height: 180px;
    box-shadow: 9px 9px 9px #00000033;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1rem;
  font-family: "Museo Sans 500";
  letter-spacing: 0px;
  color: #000080;

  @media screen and (min-width: 992px) {
    font-size: 23px;
    text-align: left;
  }
`;

const StyledImg = styled.img`
  height: 105px;
`;

const StyledText = styled.p`
  color: #ffffff;
  font-size: 0.75rem;
  font-family: "Museo Sans 500";
  margin: 0;

  @media screen and (min-width: 992px) {
    font-size: 16px;
    text-align: center;
  }
`;

const StyledBody = styled(Card.Body)`
  background: #f58634 0% 0% no-repeat padding-box;
  box-shadow: 3px -3px 9px #00000033;
  border-radius: 30px 30px 30px 0px;
  margin-top: -45px;

  @media screen and (min-width: 992px) {
    box-shadow: 9px -9px 9px #00000033;
  }
`;

const BannerCard = ({ title, last, imgSrc }: Props) => {
  return (
    <Card className='border-0'>
      <StyledHeader className='px-lg-3 px-xl-5'>
        <Row>
          <Col className='d-none d-lg-block' lg={5}>
            <StyledImg className='img-fluid' width={130} src={imgSrc} alt={title} />
          </Col>
          <Col lg={7} className={`align-self-end ${last ? "align-self-center" : ""}`}>
            <StyledTitle>{title}</StyledTitle>
          </Col>
        </Row>
      </StyledHeader>
      <StyledBody>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor
          ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </StyledText>
      </StyledBody>
    </Card>
  );
};

export default BannerCard;
