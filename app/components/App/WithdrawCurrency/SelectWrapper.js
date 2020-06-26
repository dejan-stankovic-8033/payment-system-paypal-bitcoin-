import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;

  @media screen and (min-width: ${PHONE_LANDSCAPE_VIEWPORT_WIDTH}) {
    width: 17rem;
  }
`;

export default SelectWrapper;
