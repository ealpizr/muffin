import styled from "styled-components";
import Header from "./components/Header";
import Visualizer from "./components/Visualizer";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Visualizer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default App;
