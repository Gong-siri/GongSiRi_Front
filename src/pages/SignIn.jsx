import styled from 'styled-components';
import AuthForm from '../components/auth/AuthForm';
import Heading from '../components/common/Heading';

const SignIn = () => {
  return (
    <>
      {/* <Header>
        <Heading title="로그인" />
      </Header> */}
      <Container>
        <ImageWrapper>
          <img src="/asserts/Login/loginHome.png" alt="home" />

          <BannerText>
            {' '}
            <div>
              {' '}
              공실관리 서비스 공실이를 통해 <br />
              똑똑한 공실 관리 시작해보세요! <br />
              <br />
              Copyright @2023 by FintechTeam 5조
            </div>{' '}
          </BannerText>
        </ImageWrapper>
        <LogoImage src="/asserts/Login/homeLogo.png" alt="logo" />
        <AuthForm mode="signin" />
      </Container>
    </>
  );
};
const Header = styled.header`
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  height: 98vh;
`;

const LogoImage = styled.img`
  position: absolute;
  width: 100px;
  height: auto; /* 높이는 자동으로 조절됨 */
  top: 43%; /* 로고 이미지를 수직 방향으로 중앙에 정렬 */
  left: 15%; /* 로고 이미지를 수평 방향으로 중앙에 정렬 */
  transform: translate(-50%, -50%); /* 로고 이미지를 정확한 중앙으로 이동 */
`;

const BannerText = styled.div`
  display: flex;
  background-size: cover; /* 핵심코드 */
  position: absolute; /* 핵심코드 */
  top: 60%; /* 핵심코드 */
  left: 40%; /* 핵심코드 */
  transform: translate(-50%, -50%); /* 핵심코드 */
  font-size: x-large;
  color: white;
  font-family: 'Pretendard';
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background-size: cover; /* 핵심코드 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default SignIn;
