import styled, { css } from 'styled-components';

export default styled.div`
  ${props => props.size && css`
    grid-row: span ${props.size};
  `}
`;
