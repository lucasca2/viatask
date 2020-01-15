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
`;

export const Form = styled.form`
  
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: ${styles.fonts.sizes.small};
  flex-direction: column;
  padding: ${styles.metrics.baseSpacing.medium}; 
`;

export const Input = styled.input`
  border: none;
  margin-top: ${styles.metrics.baseSpacing.small};
  border-radius: ${styles.metrics.baseRadius};
  background-color: ${styles.colors.input};
  padding: ${styles.metrics.baseSpacing.medium};
  
  resize: vertical;
`;

export const WrapperActions = styled.div`
  padding: ${styles.metrics.baseSpacing.medium};
  display: flex;
  justify-content: flex-end;
`;

const BaseButton = styled.button`
  border: none;
  border-radius: ${styles.metrics.baseRadius};
  padding: ${styles.metrics.baseSpacing.medium} ${styles.metrics.baseSpacing.regular};
  margin-left: ${styles.metrics.baseSpacing.regular};
  
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  transition: opacity .18s;
  will-change: opacity;
  
  &:hover {
    opacity: .75;
  }
`;

export const SaveButton = styled(BaseButton)`
  background-color: ${styles.colors.default.success};
  color: ${styles.colors.revert.success};
`;

export const CancelButton = styled(BaseButton)`
  background-color: ${styles.colors.default.danger};
  color: ${styles.colors.revert.danger};
`;

export const BackButton = styled.button`
  border: none;
  padding: ${styles.metrics.baseSpacing.medium};
  
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  transition: opacity .18s;
  will-change: opacity;
  
  & > svg {
    font-size: ${styles.fonts.sizes.ultraLarge};
    margin-right: ${styles.metrics.baseSpacing.medium};
    color: ${styles.colors.default.success};
    margin-top: -2px;
  }
  
  &:hover {
    opacity: .75;
  }
`;
