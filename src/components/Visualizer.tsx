import styled from "styled-components";

const Visualizer = () => {
  const arr = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100)
  );

  const width = window.innerWidth / arr.length;

  return (
    <VisualizerContainer>
      {arr.map((h) => (
        <VisualizerItem height={h} width={width} />
      ))}
    </VisualizerContainer>
  );
};

const VisualizerContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  align-items: flex-end;
  gap: 0.1rem;
`;

const VisualizerItem = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => height}%;
  width: ${({ width }) => width}%;
  background: blue;
`;

export default Visualizer;
