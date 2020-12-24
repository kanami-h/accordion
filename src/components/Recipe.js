import React from 'react';
import styled from '@emotion/styled/macro';
import { ReactComponent as Spinner } from '../assets/Spinner.svg';
import Accordion from './Accordion'

const EmptyBox = styled.div({
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  border: '1px solid #ddd'
})

const RecipeWithEmptyData = (props) => {
  return <EmptyBox>{props.children}</EmptyBox>
}

const Loading = () => {
  return (
    <RecipeWithEmptyData>
      <Spinner style={{
        height: 40,
        width: 40
      }} />
    </RecipeWithEmptyData>
  )
}

const NoRecipe = () => {
  return(
    <EmptyBox>
      <p>データの取得に失敗しました。</p>
    </EmptyBox>
  )
}

const Recipe = ({ recipe, isLoading }) => {
  if(isLoading) return <Loading />
  if(recipe === null) return <NoRecipe />
  const { procedures } = recipe
  return (
    <main>
      <Accordion procedures={procedures} />
    </main>
  )
}

export default Recipe