import { NextPage } from 'next';
import styled from 'styled-components';

interface Props {
  userAgent?: string;
}

const HomePage: NextPage<Props> = ({ userAgent }) => (
  <__Main>Your user agent: {userAgent}</__Main>
);

HomePage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default HomePage;

const __Main = styled.main`
  font-weight: 600;
`;
