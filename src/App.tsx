import styled from "styled-components";
import Header from "./components/Header";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <p>Hello</p>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default App;
