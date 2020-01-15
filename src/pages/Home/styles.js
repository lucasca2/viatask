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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperContentInfo = styled.div`
  display: flex;
  flex: 1;
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


const BaseButton = styled.button`
  flex-shrink: 1;
  border: none;
  border-radius: ${styles.metrics.baseRadius};
  padding: ${styles.metrics.baseSpacing.medium} ${styles.metrics.baseSpacing.regular};
  
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  transition: opacity .18s;
  will-change: opacity;
  
  &:hover {
    opacity: .75;
  }
`;

export const AddButton = styled(BaseButton)`
  background-color: ${styles.colors.default.success};
  color: ${styles.colors.revert.success};
  
  @media (max-width: 650px) {
    width: 100%;
    margin: 0 ${styles.metrics.baseSpacing.medium};
    margin-top: ${styles.metrics.baseSpacing.large};
  }
`;
