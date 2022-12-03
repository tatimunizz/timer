import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 70rem;
  max-width: 100vh;
  height: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    top: 0;
    left: 0;
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
`
