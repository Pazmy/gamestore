import styled from "styled-components";

export const SlideShowContainer = styled.div`
  max-width: 580px;
  height: 320px;
  margin: 0 auto;
  overflow: hidden;
`;

export const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: 200ms cubic-bezier(0.17, 0.17, 0.23, 1);
`;

export const Slide = styled.div`
  display: inline-block;
  padding: 20px;
  max-width: var(--maxWidth);
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  height: 320px;
  width: 100%;
`;

export const SlideShowDots = styled.div`
  text-align: center;
  transform: translateY(-50px);
`;

export const SlideShowDot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: ${(props) =>
    props.bgColor === "#717171" ? "#717171" : "#bbb"};
`;

export const Text = styled.div`
  white-space: initial;
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: white;
  /* h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
  } */
`;
