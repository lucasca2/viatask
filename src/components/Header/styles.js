import styled from 'styled-components';
import styles from 'styles';

// Static
import logo from 'static/logo.svg';

export const Wrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid ${styles.colors.border};
`;

export const Content = styled.div`
  max-width: ${styles.metrics.maxWidth};
  margin: 0 auto;
  padding: ${styles.metrics.baseSpacing.regular} ${styles.metrics.baseSpacing.ultraLarge};
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  max-width: 100%;
  width: 150px;
`;
