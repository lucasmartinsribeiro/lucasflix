import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid  #DB202C;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  
  & img {
    width: 45px;
    opacity: .6;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
