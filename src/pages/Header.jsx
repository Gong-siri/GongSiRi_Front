import styled from '@emotion/styled';
import ModeSelector from './ModeSelector';

export default function Header() {
  return (
    <S.Container>
      {/* 헤더 타이틀 */}
      <S.HeaderTitle>
        <S.UserName>
          김공실
        </S.UserName>
        님의 부동자산 현황입니다.
      </S.HeaderTitle>
      <ModeSelector /> {/* 모드 선택 컴포넌트 */}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    gap: 23px;
    align-items: center;
    padding: 70px 0 10px;
    label: Header__Container;
  `,
  UserName: styled.span`
    font-weight: 700;
    label: Header__UserName;
  `,
  HeaderTitle: styled.div`
    font-size: 24px;
    font-weight: 400;
    label: Header__HeaderTitle;
  `,
};

