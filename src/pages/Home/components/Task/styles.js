import styled from 'styled-components';
import styles from 'styles';

export const Wrapper = styled.div`
  border-top: ${p => p.bordered ? `1px solid ${styles.colors.border}` : 'none'};
  padding: ${styles.metrics.baseSpacing.regular} ${styles.metrics.baseSpacing.medium};
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Actions = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: ${styles.fonts.sizes.small};
  background-color: ${p => styles.colors.default[p.color]};
  color: ${p => styles.colors.revert[p.color]};
  margin: ${styles.metrics.baseSpacing.small} 0;
  padding: ${styles.metrics.baseSpacing.ultraSmall} ${styles.metrics.baseSpacing.medium};
  border-radius: 10px;
  line-height: 1.2em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  align-self: flex-start;
`;

export const Tooltip = styled.div``;

export const ActionButton = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${styles.metrics.baseSpacing.medium};
  background-color: ${p => styles.colors.default[p.backgroundColor]};
  color: ${p => styles.colors.revert[p.backgroundColor]};
  box-shadow: ${styles.metrics.baseShadow};
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  align-content: center;
  line-height: 1.75em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${styles.fonts.sizes.large};
`;

export const Description = styled.p`
  line-height: 1.75em;
  letter-spacing: 1px;
  width: 100%;
  margin-top: ${styles.metrics.baseSpacing.small};
`;

export const Date = styled.span`
  line-height: 1.75em;
  color: ${styles.colors.placeholder};
  letter-spacing: 2.5px;
  font-size: ${styles.fonts.sizes.small};
`;
