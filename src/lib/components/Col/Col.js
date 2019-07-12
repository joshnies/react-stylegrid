import styled, { css } from 'styled-components';

export default styled.div`
  ${props => props.size && css`
    grid-column: span ${props.size};
  `}

  ${props => props.start && css`
    grid-column-start: ${props.start};
    grid-column-end: ${props.end};
  `}
`;
