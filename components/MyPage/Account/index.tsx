import { Button, DatePicker, Input, Modal, message } from 'antd';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import * as S from './style';
import { getUserInfo, userModify } from '@/api/user/api';
import { useModal } from '@/hooks/useModal';
import { EditInfoTypes } from '@/types/User/User.interface';

const InputLabel = ({
  userInfo,
  editInfo,
  setEditInfo,
  isEdit,
  isBirth,
  name,
  disabled,
}: {
  userInfo: any;
  editInfo: any;
  setEditInfo: any;
  isEdit: boolean;
  isBirth: boolean;
  name: string;
  disabled: boolean;
}) =>
  isEdit ? (
    isBirth ? (
      <DatePicker
        value={dayjs(editInfo?.[name])}
        onChange={(e) => setEditInfo({ ...editInfo, [name]: e })}
      />
    ) : (
      <Input
        value={editInfo?.[name]}
        onChange={(e) => setEditInfo({ ...editInfo, [name]: e.target.value })}
        disabled={disabled}
      />
    )
  ) : (
    <span>{userInfo?.[name]}</span>
  );

const infoList = [
  { title: '이름', key: 'user_nm', disabled: true },
  { title: '닉네임', key: 'user_nick' },
  { title: '아이디', key: 'user_id' },
  { title: '상태', key: 'user_s_nm', disabled: true },
  { title: '등급', key: 'user_l_nm', disabled: true },
  { title: '생년월일', key: 'user_birth', isBirth: true },
  { title: '모바일 인증 여부', key: 'mobile_cert_yn', disabled: true },
  { title: '가입일', key: 'reg_dt', disabled: true },
];

const Account = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  const { mutate: userModifyMutate } = useMutation({
    mutationFn: () =>
      userModify({ ...editInfo, user_birth: editInfo?.user_birth?.format('YYYY-MM-DD') }),
    onSuccess: () => {
      refetch();
      message.info('수정되었습니다.');
      closeModal();
    },
    onError: () => {
      message.error('에러 발생');
    },
    onSettled: () => {},
  });

  const { Modal, isOpen, openModal, closeModal } = useModal();

  const userInfo = data?.info ?? {};

  const [isEdit, setIsEdit] = useState(false);
  const [editInfo, setEditInfo] = useState<EditInfoTypes | any>({});

  const btnLabel = isEdit ? '수정 완료' : '회원 정보 수정';

  const onClickEditCancel = () => {
    setIsEdit(false);
    setEditInfo(userInfo);
  };

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
                isBirth={e.isBirth || false}
                name={e.key}
                disabled={e.disabled || false}
              />
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'right', marginTop: 16 }}>
          {isEdit && (
            <Button onClick={onClickEditCancel} style={{ marginRight: 10 }}>
              수정 취소
            </Button>
          )}
          <Button
            type="primary"
            size="large"
            onClick={() => {
              if (isEdit) {
                openModal();
              } else {
                setIsEdit(!isEdit);
              }
            }}
            style={{ fontWeight: 600 }}
          >
            {btnLabel}
          </Button>
        </div>
      </S.StyledBoxDiv>
      <Modal title="회원 정보 수정" isOpen={isOpen} closeModal={closeModal}>
        <div style={{ margin: '30px 0' }}>
          <div>회원 정보를 정말</div>
          <div>수정하시겠습니까?</div>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button
            type="primary"
            onClick={() => {
              userModifyMutate();
              setIsEdit(!isEdit);
            }}
          >
            확인
          </Button>
          <Button
            onClick={() => {
              closeModal();
            }}
          >
            취소
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Account;
