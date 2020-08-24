import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import StarIcon from "../Vectors/StarIcon";

interface Props {}

const StyledCard = styled(Card)`
  background: #000080 0% 0% no-repeat padding-box;
  box-shadow: 0px 9px 6px #00000029;
  border-radius: 40px;
  color: #ffffff;
`;

const OuterCircle = styled.div`
  height: 160px;
  width: 160px;
  background: #ffffff;
  margin-left: -13px;
  position: relative;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) -3px 4px 7px inset;

  @media screen and (min-width: 992px) {
    margin-left: -50px;
    height: 200px;
    width: 200px;
  }
`;

const InnerCircle = styled.div`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 9px 6px #00000029;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 992px) {
    height: 180px;
    width: 180px;
  }
`;

const CardText = styled.p`
  @media screen and (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

const TestimonialCard = ({}: Props) => {
  return (
    <>
      <StyledCard>
        <Card.Body className='pt-3 pl-0 py-lg-4'>
          <div className='d-flex w-100'>
            <div className='d-lg-flex justify-content-lg-center align-items-lg-center'>
              <OuterCircle>
                <InnerCircle>
                  <img className='img-fluid' src='/images/pexels-photo-941555@2x.png' />
                </InnerCircle>
              </OuterCircle>
            </div>
            <div className='p-2 pl-3 pl-lg-4 pr-lg-3'>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim
                veniam, quis nostrud
              </CardText>

              <div className='d-flex justify-content-between'>
                <div>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className='mb-0'>Chidi Agwu</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </StyledCard>
    </>
  );
};

export default TestimonialCard;
