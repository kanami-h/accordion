import React from 'react';
import styled from '@emotion/styled/macro';

const Wrapper = styled.div({
  width: '100%',
  height: 0,
  overflow: 'hidden',
  transition: '0.5s',
}, props => {
  let styles = []
  console.log(styles)
  if(props.isOpen) {
    styles.push({
      height: 'auto',
      minHeight: '100px',
      padding: '10px',
    })
  }
  return styles
})

const AccordionBody = ({ procedure, isOpen }) => {
  <Wrapper isOpen={isOpen}>
    <p>
      {procedure.description}
    </p>
  </Wrapper>
}
  

export default AccordionBody