import styled from 'styled-components';
import styles from 'styles';

export const Content = styled.main`
  max-width: ${styles.metrics.maxWidth};
  margin: 0 auto;
  padding: ${styles.metrics.baseSpacing.ultraLarge};

  @media (max-width: 650px) {
    padding: ${styles.metrics.baseSpacing.ultraLarge} ${styles.metrics.baseSpacing.medium};
  }
`;
