import styled, { css } from 'styled-components';
import rem from '../utils/rem';
import { mobile } from '../utils/media';
import { sidebarWidth } from '../utils/sizes';
import { bodyFont, headerFont } from '../utils/fonts';
import { blmMetal } from '../utils/colors';

export const Container = styled.div`
  padding-left: ${rem(sidebarWidth)};

  ${mobile(css`
    padding-left: 0;
  `)};
`;

export const Content = styled.div`
  margin: 0;
  padding: ${rem(90)} ${rem(60)} 0 ${rem(60)};
  box-sizing: border-box;
  font-family: ${bodyFont};
  transition: transform 150ms ease-out;

  p,
  li {
    max-width: 80ch;
  }

  ${mobile(css`
    padding: ${rem(100)} ${rem(20)} ${rem(30)} ${rem(20)};
    transform: translateX(${(p) => (p.moveRight ? rem(sidebarWidth) : 0)});
  `)};

  ${(p) =>
    p.hero &&
    css`
      font-family: ${headerFont};
      width: 75rem;
    `};
`;

export const Title = styled.h1`
  text-align: left;
  width: 100%;
  color: ${blmMetal};
  font-size: ${rem(42)};
  font-weight: bold;
  font-family: ${headerFont};
`;

export const Header = styled.h2`
  font-size: ${rem(32)};
  font-weight: 600;
  font-family: ${headerFont};
  margin: 1.5em 0 0.5em;
`;

export const SubHeader = styled.h3`
  margin: 1.5em 0 0.5em;
  font-size: ${rem(24)};
  font-weight: 600;
  font-family: ${headerFont};
`;

export const TertiaryHeader = styled.h4`
  margin: 1.5em 0 0.5em;
  font-size: ${rem(18)};
  font-weight: 600;
  font-family: ${headerFont};
`;
