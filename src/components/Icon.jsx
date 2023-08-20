import styled from '@emotion/styled';
import ICON_SRC_MAP from '../constants/iconSrcMap';

// Icon 컴포넌트 정의, icon 타입에 따른 이미지 소스 가져오기 (iconSrcMap.js 에서 매핑 객체 정의해둠)
export default function Icon({type}) {
  const src = ICON_SRC_MAP[type];
  return (
    <S.Container>
      <S.Icon src={src}/>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    height: auto;
    label: Icon__Container;
  `,
  Icon: styled.img`
    label: Icon__Icon;
  `,
}
