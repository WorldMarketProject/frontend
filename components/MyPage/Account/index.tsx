import { Button, Input } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as S from './style';
import { getUserInfo } from '@/api/user/api';

const InputLabel = ({
  userInfo,
  editInfo,
  setEditInfo,
  isEdit,
  name,
}: {
  userInfo: any;
  editInfo: any;
  setEditInfo: any;
  isEdit: boolean;
  name: string;
}) =>
  isEdit ? (
    <Input
      value={editInfo?.[name]}
      onChange={(e) => setEditInfo({ ...editInfo, [name]: e.target.value })}
    />
  ) : (
    <span>{userInfo?.[name]}</span>
  );

const infoList = [
  { title: '이름', key: 'user_nm' },
  { title: '닉네임', key: 'user_nick' },
  { title: '아이디', key: 'user_id' },
  { title: '상태', key: 'user_s_nm' },
  { title: '등급', key: 'user_l_nm' },
  { title: '생년월일', key: 'user_birth' },
  { title: '모바일 인증 여부', key: 'mobile_cert_yn' },
  { title: '가입일', key: 'reg_dt' },
];

const Account = () => {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
  const userInfo = data?.info ?? {};

  const [isEdit, setIsEdit] = useState(false);
  const [editInfo, setEditInfo] = useState({});

  const btnLabel = isEdit ? '수정 완료' : '회원 정보 수정';

  useEffect(() => {
    if (Object.keys(userInfo)?.length !== 0) {
      setEditInfo(userInfo);
    }
  }, [userInfo]);

  return (
    <>
      <S.SubTitle>내 정보</S.SubTitle>
      <S.StyledBoxDiv style={{ paddingBottom: 26 }}>
        {infoList.map((e: any, i: number) => (
          <div key={e.key}>
            <h3>{e.title}</h3>
            <div>
              <InputLabel
                userInfo={userInfo}
                editInfo={editInfo}
                setEditInfo={setEditInfo}
                isEdit={isEdit}
                name={e.key}
              />
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'right', marginTop: 16 }}>
          <Button
            type="primary"
            size="large"
            onClick={() => setIsEdit(!isEdit)}
            style={{ fontWeight: 600 }}
          >
            {btnLabel}
          </Button>
        </div>
      </S.StyledBoxDiv>
    </>
  );
};

export default Account;
