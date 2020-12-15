import React from 'react';
import styled from '@emotion/styled/macro';

const Wrapper = styled.div({
  backgroundColor: 'rgb(242, 241, 239)',
  cursor: 'pointer',
  paddin: '10px 20px',
  height: 'auto',
  borderBottom: '1px solid #ddd'
})

const Title = styled.h3({
  fontSize: '14px',
  fontWeight: 'bold',
  margin: 0,
})

const AccordionHeader = ({
  procedure,
  handleToggle
}) => (
  <Wrapper onClick={handleToggle}>
    <Title>手順{procedure.order}</Title>
  </Wrapper>
)

export default AccordionHeader