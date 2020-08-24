import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

interface Props {}

const StyledNavLink = styled(Nav.Link)`
  font-size: 20px;
  font-family: 'Museo Sans 500';
  color: #000080 !important;
  border-bottom: 1px solid #eeebeb;
  transition: 0.3s ease;

  &:hover {
    color: #f58634 !important;
  }

  @media screen and (min-width: 922px) {
    border-bottom: none;
  }
`;

const SignInButton = styled(Button)`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 21px;
  width: 48%;
  color: #000080;
  border-color: #000080;
`;

const SignUpButton = styled(Button)`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 21px;
  width: 48%;
  background-color: #000080;
  border-color: #000080;
`;

const NavBar = ({}: Props) => {
  return (
    <Navbar bg='light' expand='lg' className='navbar-pad'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            width={43}
            height={45}
            className='mr-2'
            src='/images/broadex-logo/LOGO@2x.png'
          />
          <img
            width={164}
            height={55}
            className='d-none d-lg-inline-block'
            src='/images/broadex-logo/broadex-logo@2x.png'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <StyledNavLink href='#home'>How it Works</StyledNavLink>
            <StyledNavLink href='#link'>Send Money</StyledNavLink>
            <StyledNavLink href='#link'>Recieve Money</StyledNavLink>
            <StyledNavLink href='#link'>About us</StyledNavLink>
          </Nav>

          <div className='d-flex w-100 justify-content-between d-lg-none'>
            <Link href='/sign-in' passHref>
              <SignInButton variant='outline-primary'>Sign In</SignInButton>
            </Link>

            <Link href='/sign-up' passHref>
              <SignUpButton variant='primary'>Register</SignUpButton>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
