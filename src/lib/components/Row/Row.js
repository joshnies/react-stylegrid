import styled, { css } from 'styled-components';

export default styled.div`
  ${props => props.size && css`
    grid-row: span ${props.size};
  `}

  ${props => props.start && css`
    grid-row-start: ${props.start};
    grid-row-end: ${props.end};
  `}
`;
