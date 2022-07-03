import styled from "styled-components";

const SkeletonMain = styled.div`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "1rem"};
  border-radius: 0.5rem;
`;

const Skeleton = ({ width, height }) => (
  <SkeletonMain width={width} height={height} className="skeleton" />
);

export default Skeleton;
