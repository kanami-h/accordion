import React, { Component } from 'react';
import Recipe from '../components/Recipe.js'
import { sampleData } from '../testData';

class RecipeContainer extends Component {
  state = {
    recipe: null, // 初期の状態ではレシピのデータがないためnull
    isLoading: true //マウントされ、データが読み込まれる間ローディングを表示する
  }
  componentDidMount(){
    this.loadRecipe()
    .then((data) => {
        this.setState({
          isLoading: false, //読み込みが完了したのでfalseにする
          recipe: data // 読み込んだデータを保存する
        })
      })
  }
  loadRecipe = () => {
    return new Promise(function(resolve){
      // setTimeoutを利用して1秒の遅延を発生させ、その直後にsampleDataを渡す
      setTimeout(() => {
        resolve(sampleData)
      }, 1000)
    })
  }
  render() {
    const { recipe, isLoading } = this.state;
    return <Recipe recipe={recipe} isLoading={isLoading} />
    // return <div />
  }
}

export default RecipeContainer