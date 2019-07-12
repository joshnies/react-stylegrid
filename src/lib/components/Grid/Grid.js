import styled, { css } from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.cols || 12},
    ${props => props.colSize || '1fr'}
  );
  grid-auto-rows: ${props => props.rowSize || 'auto'};
  grid-col-gap: ${props => props.colGap || 0};
  grid-row-gap: ${props => props.rowGap || 0};
`;
