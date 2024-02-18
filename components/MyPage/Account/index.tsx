import { useQuery } from '@tanstack/react-query';
import * as S from './style';
import { getUserInfo } from '@/api/Api';
import { Button } from 'antd';

const Account = () => {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
  const userInfo = data?.info;

  return (
    <>
      <S.SubTitle>내 정보</S.SubTitle>
      <S.StyledBoxDiv style={{ paddingBottom: 26 }}>
        <h3>이름</h3>
        <div>{userInfo?.user_nm}</div>
        <h3>닉네임</h3>
        <div>{userInfo?.user_nick}</div>
        <h3>아이디</h3>
        <div>{userInfo?.user_id}</div>
        <h3>상태</h3>
        <div>{userInfo?.user_s_nm}</div>
        <h3>등급</h3>
        <div>{userInfo?.user_l_nm}</div>
        <h3>생년월일</h3>
        <div>{userInfo?.user_birth || '없음'}</div>
        <h3>모바일 인증 여부</h3>
        <div>{userInfo?.mobile_cert_yn}</div>
        <h3>가입일</h3>
        <div>{userInfo?.reg_dt}</div>
        <div style={{ textAlign: 'right', marginTop: 16 }}>
          <Button type="primary" size="large" style={{ fontWeight: 600 }}>
            회원 정보 수정
          </Button>
        </div>
      </S.StyledBoxDiv>
    </>
  );
};

export default Account;
