import styled from 'styled-components';
import styles from 'styles';

// Static
import logo from 'static/logo.svg';

export const Wrapper = styled.header`
  width: 100%;
  padding: 15px 25px;
  border-bottom: 1px solid ${styles.colors.border};
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  max-width: 100%;
  width: 150px;
`;
