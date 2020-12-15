import React, { Component } from 'react';
import styled from '@emotion/styled/macro';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

// 役割
// 1. isOpen stateでaccordionが開いているかどうかを判断する
// 2. AccordionHeaderをクリックした時に isOpenのステータスを変更する
// 3. AccordionHeaderとAccordionBodyの2つのコンポーネントを呼び出す

const Wrapper = styled.div({
  width: '400px',
  display: 'flex',
  flexDirection: 'column' //headerとbodyを縦に並べる
})

class AccordionItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.procedure.order === 1 ? true : false
    }
  }
  handleToggle = (e) => {
    e.preventDefault()
    // クリックされると、isOpenの値を現在の値を反転させてセットする
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }
  render() {
    const { procedure } = this.props;
    const { isOpen } = this.state;
    return(
      <Wrapper>
        <AccordionHeader procedure={procedure} handleToggle={this.handleToggle} />
        <AccordionBody procedure={procedure} isOpen={isOpen} />
      </Wrapper>
    )
  }
}

export default AccordionItem;
