import "./App.css";
import styled from "styled-components";

const ArticleElement = styled.article`
  background-color: bisque;
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const Photo = styled.img`
  max-width: 50%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #212121;
  font-weight: 600;
`;

const IngredientsTitle = styled.h2`
font-size: 18px;
color: #212121;
font-weight: 500;
margin: 7px 0 10px;
`;

const IngredientsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Ingredient = styled.li`
  font-size: 16px;
  color: #212121;
`;

// const LikedBtn = styled.button<{$btnBg: any }>`
// background-color: ${console.log($btnBg)};
// display: block;
// margin-left:auto;
// margin-top: 50px;
// padding: 10px;
// border: none;
// border-radius: 50%;
// `

const Btn = styled.button`
padding: 7px;
border: none;
border-radius: 50%;
`

const LikedBtn = styled(Btn)`
background-color: pink;
`

function App() {
  return (
    <div className="App">
      <ArticleElement>
        <Photo src="https://klopotenko.com/wp-content/uploads/2018/02/yak-prigotuvaty-mlynci_siteweb-ukr-1-img-1000x600.jpg?v=1720543412" />
        <Title>Рецепт млинців</Title>
        <IngredientsTitle>Інгредієнти</IngredientsTitle>
        <IngredientsList>
          <Ingredient>2 яйця</Ingredient>
          <Ingredient>2 ст. л. цукру</Ingredient>
          <Ingredient>1/3 ч. л. солі</Ingredient>
          <Ingredient>2 ст. л. соняшникової олії (+2 ст. л. для смаження млинців)</Ingredient>
          <Ingredient>340 мл молока</Ingredient>
          <Ingredient>130 г борошна</Ingredient>
          <Ingredient>50 г вершкового масла (для змащування млинців)</Ingredient>
        </IngredientsList>
        <LikedBtn $btnBg="like">🤍</LikedBtn>
      </ArticleElement>
    </div>
  );
}

export default App;
