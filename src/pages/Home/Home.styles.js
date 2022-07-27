import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 10px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 1em;
`;

export const Title = styled.h1`
  padding-bottom: 1em;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
`;

const LeftW = "75%";

export const Left = styled.div`
  float: left;
  width: ${LeftW};
`;

export const Right = styled.div`
  float: right;
  width: calc(100% - ${LeftW} - 3%);
  padding: 10px;
  margin-top: 3.3em;
`;

export const InfoBlock = styled.div`
  width: 100%;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.text.primary};
`;

export const InfoWarningBlock = styled(InfoBlock)`
  border-left: 3px solid ${({ theme }) => theme.text.warning};
`;

export const InfoSuccessBlock = styled(InfoBlock)`
  border-left: 3px solid ${({ theme }) => theme.text.success};
`;

export const InfoConfusedBlock = styled(InfoBlock)`
  border-left: 3px solid ${({ theme }) => theme.text.confused};
`;

export const InfoParagraph = styled.p`
  text-align: left;
  font-size: 1.1rem;
`;

export const InfoLargeParagraph = styled(InfoParagraph)`
  text-align: center;
  font-size: 1.3rem;
`;
