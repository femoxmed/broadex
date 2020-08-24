import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BannerCard from '../components/BannerCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import RandomShape1 from '../components/Vectors/RandomShape1';
import Link from 'next/link';
import NavBar from '../components/Navbar';
import MobileBanner from '../components/MobileBanner';
import DesktopBanner from '../components/DesktopBanner';

const H2S = styled.h3`
  margin-top: -1rem;
  font-size: 1.56rem;
  font-family: 'Museo Sans 500';

  @media screen and (min-width: 992px) {
    margin-top: 1rem;
    font-size: 2.3rem;
    margin-bottom: 2rem !important;
  }
`;

const TADW = styled.h3`
  font-size: 1.56rem;
  font-family: 'Museo Sans 900';
  font-style: normal;

  @media screen and (min-width: 992px) {
    font-size: 42px;
  }
`;

const TADWP = styled.p`
  font-size: 1rem;
  font-family: 'Museo Sans 500';
`;

const TADWA = styled.p`
  font-size: 1rem;
  letter-spacing: 0.32px;
  font-family: 'Museo Sans 300';
`;

const TADWP2 = styled.p`
  font-size: 1.56rem;
  font-family: 'Museo Sans 900';
  letter-spacing: 0.5px;
`;

const TADWSPAN = styled.span`
  font-style: italic;
  font-weight: normal;
  font-family: 'Museo Sans 500';
`;

const GBH = styled.h3`
  font-size: 1.56rem;
  font-family: 'Museo Sans 500';

  @media screen and (min-width: 992px) {
    font-size: 40px;
  }
`;

const GBHBG = styled.div`
  position: absolute;
  bottom: -71px;
  width: 100%;
`;

const GBHBGTAB = styled.div`
  position: absolute;
  bottom: -26px;
  width: 100%;
`;

const GBHBGD = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
`;

const GBHIMG = styled.img`
  margin-left: -16rem;
  height: 39rem;
`;

const GBHSPAN = styled.span`
  font-size: 1.56rem;
  font-family: 'Museo Sans 300';
  font-style: italic;
`;

const GBL = styled.p`
  font-size: 1rem;
  font-family: 'Museo Sans 500';
  color: #000000;
`;

const GBLIMGCONTAINER = styled.div`
  height: 269px;
  width: 290px;
  border-radius: 122px;
  box-shadow: -6px -6px 9px #00000029;
`;

const GBLIMGDCONTAINER = styled.div`
  height: 442px;
  width: 761px;
  margin-right: -11%;
  border-radius: 134px;
  overflow: hidden;
  box-shadow: -20px -9px 9px #00000029;
`;

const SMCButton = styled.button`
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f58634;
  border-radius: 20px;
  font-size: 1.3rem;
  font-family: 'Museo Sans 500';
  padding: 0.75rem 2.375rem;
  color: #fff;
  background-color: transparent;
`;

const TTU = styled.h3`
  font-size: 1.56rem;
  margin-bottom: 0;
  font-family: 'Museo Sans 900';

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;
const TTUP = styled.p`
  font-size: 1rem;
  font-family: 'Museo Sans 300';

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
    line-height: 26px;
  }
`;

const TPS = styled.h3`
  font-size: 1.56rem;
  margin-bottom: 0;
  font-family: 'Museo Sans 700';

  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

const TPSF = styled.h3`
  font-size: 1.56rem;
  margin-bottom: 0;
  font-family: 'Museo Sans 700';

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const TPSP = styled.p`
  @media screen and (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

const Shape1 = styled.div`
  position: absolute !important;
  top: 50%;
  left: -15.375rem;
  transform: rotate(9deg) scale(2);

  @media screen and (min-width: 992px) {
    top: 7%;
    left: -17.9rem;
    transform: rotate(-5deg) scale(3);
  }

  @media screen and (min-width: 1200px) {
    left: -20.375rem;
    transform: rotate(-5deg) scale(4);
  }
`;

const FooterLink = styled.a`
  font-family: 'Museo Sans 100';
  font-size: 1.56rem;
  color: #f58634 !important;
`;

const FooterLinkContainer = styled.div`
  @media screen and (min-width: 992px) {
    padding: 110px 0;
  }
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <MobileBanner />
      <DesktopBanner />
      <section className='d-flex flex-column align-items-center pb-5'>
        <div className='text-center'>
          <H2S className='text-navyblue mb-4'>
            How to send <br className='d-lg-none' /> Money from USD
            <br className='d-lg-none' /> to NGN
          </H2S>
        </div>

        <Container>
          <Row>
            <Col xs={6} md={4} className='mb-5'>
              <BannerCard imgSrc='/images/svgs/free-reg.svg' title='Free Registration' />
            </Col>
            <Col xs={6} md={4} className='mb-5'>
              <BannerCard
                imgSrc='/images/svgs/chosehowmuch.svg'
                title='Choose How much to send'
              />
            </Col>
            <Col xs={6} md={4} className='mb-5'>
              <BannerCard
                imgSrc='/images/svgs/bank-details.svg'
                title='Recipient Bank Details'
              />
            </Col>
            <Col xs={6} md={4} className='mb-5'>
              <BannerCard
                imgSrc='/images/svgs/verify-identiy.svg'
                title='Verify your Identity'
              />
            </Col>
            <Col xs={6} md={4} className='mb-5'>
              <BannerCard
                imgSrc='/images/svgs/pay-4-transfer.svg'
                title='Pay for your Transfer'
              />
            </Col>
            <Col xs={6} md={4} className='mb-5'>
              <BannerCard imgSrc="/images/svgs/that's-it.svg" title="That's it" last />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='bg-whisper d-flex flex-column align-items-center pt-5 pb-100  position-relative'>
        <GBHBG className='d-md-none w-100 d-lg-none'>
          <img className='img-fluid' src='/images/group-393.png' alt='' />
        </GBHBG>
        <GBHBGTAB className='d-none d-md-block w-100 d-lg-none'>
          <img className='img-fluid' src='/images/group-393-tab.png' alt='' />
        </GBHBGTAB>
        <GBHBGD className='d-none d-md-block w-100 d-none d-lg-block'>
          <img className='img-fluid' src='/images/svgs/gbl-bg.svg' alt='' />
        </GBHBGD>

        <Container>
          <Row>
            <Col lg={6} className='d-lg-flex flex-lg-column justify-content-lg-center'>
              <Container>
                <div className='text-center text-lg-left'>
                  <GBH className='text-navyblue mb-4'>
                    Global support in <br /> a range of languages
                  </GBH>
                </div>

                <div className='text-center text-lg-left px-4 px-lg-0'>
                  <GBL>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </GBL>
                </div>
              </Container>
            </Col>
            <Col lg={6}>
              <GBLIMGCONTAINER className='mx-auto d-lg-none'>
                <img
                  className='img-fluid w-100'
                  src='/images/pexels-photo-941555@2x.png'
                  alt=''
                />
              </GBLIMGCONTAINER>
              <GBLIMGDCONTAINER className='d-none d-lg-block'>
                <img
                  className='img-fluid w-100 h-100 object-cover'
                  src='/images/pexels-photo.png'
                  alt=''
                />
              </GBLIMGDCONTAINER>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='banner-taodw d-flex flex-column align-items-center  trusted-bg'>
        <Container>
          <div className='text-center'>
            <TADW className='text-uppercase'>
              Trusted <TADWSPAN className='text-lowercase'>all over the</TADWSPAN>{' '}
              <br className='d-lg-none' />
              world
            </TADW>
          </div>
          <div className='text-center px-4 pb-5 pt-2'>
            <TADWP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </TADWP>
          </div>

          <Row>
            <Col md={3}>
              <div className='text-center px-4 py-2 px-sm-0'>
                <TADWP2>
                  14 Office <br /> World wide
                </TADWP2>
              </div>
            </Col>
            <Col md={3}>
              <div className='text-center px-4 py-2 px-sm-0'>
                <TADWP2>
                  Over $3 Billion <br className='d-lg-none' />
                  sent <br className='d-none d-xl-block' /> every month
                </TADWP2>
              </div>
            </Col>
            <Col md={3}>
              <div className='text-center px-4 py-2 px-sm-0'>
                <TADWP2>
                  Over 4 Million
                  <br /> customers
                </TADWP2>
              </div>
            </Col>
            <Col md={3}>
              <div className='text-center px-4 py-2 px-sm-0'>
                <TADWP2>
                  Over $1.1 Billion
                  <br className='d-lg-none' /> Saved by customer
                  <br className='d-lg-none' /> every year
                </TADWP2>
              </div>
            </Col>
          </Row>

          <div className='banner-world-map'></div>

          <div className='text-center px-4 py-5'>
            <TADWA>
              We’re available in 59 countries, and we add new currencies all the time. If
              you think we should add a specific currency, let us know. Be the first to
              know when we add more by <br className='d-lg-none' />
              <span>
                <a className='text-jaffa' href='/#'>
                  signing up to our mailing list.
                </a>
              </span>
            </TADWA>
          </div>
        </Container>

        <Container className='mb-5'>
          <Row>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
          </Row>

          <Row className='d-none d-lg-flex'>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-right text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
            <Col xs={6} lg={1}>
              <div className='text-left text-lg-center'>
                <img
                  width={94}
                  height={94}
                  src='/images/flags/argentina-flag-country-nation-union-empire-32919-1.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </Col>
          </Row>
        </Container>

        <SMCButton className='d-lg-none'>See more countries</SMCButton>
        <button className='d-none d-lg-block btn brdx-btn'>See more countries</button>
      </section>

      <section className='position-relative pt-50 d-flex flex-column align-items-center bg-whisper'>
        <Container className='pt-lg-5 pb-lg-0'>
          <Row>
            <Col lg={6}>
              <div className='text-center text-lg-left px-4 py-2 mb-50 py-lg-5'>
                <TTU className='text-navyblue mt-lg-5'>They Trusted Us</TTU>
                <TTUP className='text-navyblue '>
                  We are happy because we <br /> have happy customers
                </TTUP>

                <button className='btn brdx-btn'>See more</button>
              </div>
            </Col>
            <Col lg={6} className='overflow-hidden'>
              <TestimonialCarousel />
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center px-4 py-50 position-relative bg-whisper'>
        <Shape1>
          <RandomShape1 />
        </Shape1>
        <TPS className=''>TrustPilot score 4.7 out of 5, from 91,112 reviews</TPS>
        <TPSP>
          It’s your money. You can trust us to get it where it needs to be, but don’t take
          our word for it. <br /> Read our reviews at{' '}
          <a className='text-blue'>Trustpilot.com</a>
        </TPSP>
      </div>

      <section className='d-flex flex-column pt-5 align-items-center bag-bg-d'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='text-center pt-lg-5'>
                <GBH className='text-navyblue'>
                  <GBHSPAN>Become an</GBHSPAN> AGENT <br className='d-none d-lg-block' />{' '}
                  <GBHSPAN>and</GBHSPAN> <br className='d-lg-none' /> EARN COMMISSIONS
                </GBH>
              </div>
            </Col>
            <Col lg={6} className='px-0'>
              <div className='w-100 d-lg-none'>
                <img className='img-fluid' src='/images/agent-img@2x.png' alt='' />
              </div>
              <div className='d-none d-lg-block'>
                <GBHIMG src='/images/agent-image-d.png' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className='brdx-footer d-flex flex-column align-items-center text-white py-150 bg-darkblue position-relative'>
        <Container>
          <Row>
            <Col lg={5}>
              <div className='text-center mb-3 text-lg-left'>
                <img
                  width={83}
                  height={88}
                  className='mr-2 d-lg-none'
                  src='/images/broadex-logo/LOGO@2x.png'
                />
                <img
                  width={155}
                  height={164}
                  className='mr-2 d-none d-lg-block'
                  src='/images/broadex-logo/broadex-logo2@2x.png'
                />
              </div>

              <TPSF className='mb-4 text-center text-lg-left'>BROADEX</TPSF>

              <Container className='px-lg-0'>
                <div className='text-center text-lg-left px-4 px-lg-0'>
                  <TADWP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </TADWP>
                </div>
              </Container>
            </Col>
            <Col lg={7}>
              <FooterLinkContainer>
                <ul className='list-unstyled text-center z3 d-lg-flex justify-content-lg-around'>
                  <li className='py-50 mr-lg-2'>
                    <Link href='/#' passHref>
                      <FooterLink>Links</FooterLink>
                    </Link>
                  </li>
                  <li className='py-50 mr-lg-2'>
                    <Link href='/#' passHref>
                      <FooterLink>Blog</FooterLink>
                    </Link>
                  </li>
                  <li className='py-50 mr-lg-2'>
                    <Link href='#' passHref>
                      <FooterLink>Help and support</FooterLink>
                    </Link>
                  </li>
                  <li className='py-50 mr-lg-2'>
                    <Link href='/#' passHref>
                      <FooterLink>Follow Us</FooterLink>
                    </Link>
                  </li>
                </ul>
              </FooterLinkContainer>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
