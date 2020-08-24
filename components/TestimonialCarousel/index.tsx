import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import TestimonialCard from "../TestimonialCard";
import styled from "styled-components";

interface Props {}

const StyledContainer = styled(Container)`
  // @media screen and (min-width: 992px) {
  padding-bottom: 70px !important;
  // }
`;

const items = [1, 2, 3];

const TestimonialCarousel = ({}: Props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, _e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <StyledContainer className='pl-lg-5 py-lg-5'>
      <Carousel
        className='brdx-testmonial-carousel'
        controls={false}
        activeIndex={index}
        onSelect={handleSelect}>
        {items.map((_x, ind) => (
          <Carousel.Item key={ind}>
            <TestimonialCard />
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledContainer>
  );
};

export default TestimonialCarousel;
