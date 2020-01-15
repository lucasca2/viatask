import styled from 'styled-components';
import styles from 'styles';

export const Title = styled.h2`
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${styles.fonts.sizes.ultraLarge};
  padding: ${styles.metrics.baseSpacing.medium};
  letter-spacing: 2.5px;
  color: ${p => styles.colors.default[p.color]};
  
  &:not(:first-child) {
    border-top: 1px solid ${styles.colors.border};
    padding-top: ${styles.metrics.baseSpacing.ultraLarge};
    margin-top: ${styles.metrics.baseSpacing.ultraLarge};
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.span`
  padding: ${styles.metrics.baseSpacing.small} ${styles.metrics.baseSpacing.medium};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  & > svg {
    margin-right: ${styles.metrics.baseSpacing.medium};
    color: ${p => styles.colors.default[p.color]}
  }
`;
