import React from 'react';
import styled from '@emotion/styled/macro';
import AccordionItem from './AccordionItem'

const Wrapper = styled.div({
  height: 'auto',
  border: '1px solid #ddd',
  display: 'flex',
  flexDirection: 'column'
})

const Accordion = ({procedures}) => {
  // orderの値で手順の並び替えを行う
  const orderedProcedures  = procedures.sort((p1, p2) => {
    return p1.order < p2.order
  })
  // mapファンクションを利用して並び替えた手順を処理する
  let AccordionItems = orderedProcedures.map((procedure) => {
    return <AccordionItem
    key={`procedure-${procedure.id}`}
    procedure={procedure} />
  })
  return (
    <Wrapper id="accordion-items">
      {AccordionItems}
    </Wrapper>
  )
}

export default Accordion