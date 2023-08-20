import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signIn, signUp } from '../../api/auth';
import { authDescription } from '../../constant/formDescription';
import { authContext, AUTH_ACTION } from '../../context/AuthProvider';
import Button from '../common/Button';
import ActionLink from './ActionLink';
import LabelInput from './LabelInput';

const AuthForm = ({ mode }) => {
  const {
    namePlaceholder,
    emailPlaceholder,
    passwordPlaceholder,
    buttonText,
    actionText,
    question,
    actionLink,
  } = authDescription[mode];
  const { dispatch } = useContext(authContext);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [focus, setFocus] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [isSubmited, setIsSubmited] = useState(false);

  const navigate = useNavigate();

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocus({
      ...focus,
      [name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmited) return;
    setIsSubmited(true);
    if (mode === 'signin') {
      try {
        const res = await signIn(user);

        if (res.status === 200) {
          dispatch({
            type: AUTH_ACTION.SET_TOKEN,
            token: res.data.access_token,
          });
          setUser({ email: '', password: '' });
          navigate('/main');
        }
      } catch (error) {
        alert('이메일 또는 비밀번호를 확인하세요.');
      } finally {
        setIsSubmited(false);
      }
    }

    if (mode === 'signup') {
      try {
        const res = await signUp(user);
        if (res.status === 201) {
          setUser({ name: '', email: '', password: '' });
          navigate('/signin');
        }
      } finally {
        setIsSubmited(false);
      }
    }
  };

  return (
    <LoginForm>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          {mode === 'signup' ? (
            <LabelInput
              type="text"
              id="name"
              label="이름"
              placeholder={namePlaceholder}
              user={user}
              setUser={setUser}
              handleFocus={handleFocus}
            />
          ) : null}
          {user.name.length < 2 && focus.name ? (
            <ErrorMessage>2자 이상의 이름을 입력하세요.</ErrorMessage>
          ) : null}
          <LabelInput
            type="text"
            id="email"
            label="이메일"
            placeholder={emailPlaceholder}
            user={user}
            setUser={setUser}
            handleFocus={handleFocus}
          />
          {!user.email.includes('@') && focus.email ? (
            <ErrorMessage>@를 포함한 이메일을 입력하세요.</ErrorMessage>
          ) : null}
          <LabelInput
            type="password"
            id="password"
            label="비밀번호"
            placeholder={passwordPlaceholder}
            user={user}
            setUser={setUser}
            handleFocus={handleFocus}
          />
          {user.password.length < 8 && focus.password ? (
            <ErrorMessage>8자 이상의 비밀번호를 입력하세요.</ErrorMessage>
          ) : null}
        </InputWrapper>
        <ActionWrapper>
          <Button
            type="submit"
            disabled={!user.email.includes('@') || user.password.length < 8}
            data-testid={`${mode}-button`}
          >
            {buttonText}
          </Button>
          {/* <Button to={actionLink} data-testid={`${mode}-button`}>
            {buttonText}
          </Button> */}
          <ActionLink question={question} to={actionLink} text={actionText} />
        </ActionWrapper>
      </form>
    </LoginForm>
  );
};

// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   img {
//     flex: 0 0 auto; /* 이미지의 크기 조절 금지 */
//     max-width: 100px; /* 필요에 따라 최대 너비 조정 */
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center; /* 아이템을 수직으로 정렬 */
//   gap: 16px;
// `;

const LoginForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px; /* 최대 너비 설정 */
  //margin: 0 auto; /* 수평 가운데 정렬을 위해 추가 */
  padding: 20px; /* 내용을 좀 더 넓게 보이도록 패딩 추가 */
  box-sizing: border-box; /* 패딩과 너비 조정을 위해 추가 */
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
`;

export default AuthForm;
