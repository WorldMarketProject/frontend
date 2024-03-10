'use client';

import { CameraOutlined } from '@ant-design/icons';
import { Modal, Button, Col, Input, Row, Select, InputNumber, message, DatePicker } from 'antd';
import { useRouter } from 'next/navigation';
import DaumPostcode from 'react-daum-postcode';
import { ChangeEvent, useState } from 'react';
import dayjs from 'dayjs';
import { useMutation } from '@tanstack/react-query';
import Title from '@/components/Title';
import { putTrade } from '@/api/trade/api';

const RegItem = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [addressData, setAddressData] = useState<any>({});
  const [formData, setFormData] = useState<any>({ tr_t_seq: 1 });

  const { mutate: tradeMutate } = useMutation({
    mutationFn: () =>
      putTrade({ ...formData, limit_dt: dayjs(formData?.limit_dt)?.format('YYYY-MM-DD') }),
    onSuccess: () => {
      // refetch();
      message.info('정상적으로 등록 되었습니다.');
      router.push('/list');
    },
    onError: (err) => {
      message.error('에러 발생');
      console.error(err);
    },
    onSettled: () => {},
  });

  // 주소 검색 모달
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    // 시.도 저장
    const q1 = data.sido;
    // 구.군 저장
    const q3 =
      data.sigungu.length > 3 ? data.sigungu.split('').splice(0, 3).join('') : data.sigungu;
    // 상세주소 앞 2단어 제외하고 저장 ('서울 강남구' 제외하고 저장)
    const splitAddress = data.address.split(' ').splice(2).join(' ');
    const address = data?.address;
    setFormData({ ...formData, tr_addr: address });
    onToggleModal(); // 주소창은 자동으로 사라지므로 모달만 꺼주면
  };

  const handleOk = () => {
    onToggleModal();
  };

  const handleCancel = () => {
    onToggleModal();
  };

  // 거래 등록 클릭
  const onClickRegTrade = async () => {
    const essentials = ['tr_title', 'tr_content', 'tr_price', 'tr_addr'];

    for (let i = 0; i < essentials?.length; i++) {
      if (!formData?.[essentials?.[i]]) {
        message.warning('필수 입력란을 모두 채워주세요.');
        return;
      }
    }

    tradeMutate();
  };

  return (
    <>
      <Title content="거래 등록" />
      <Row gutter={[10, 10]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>거래 종류</div>
          <div style={{ marginBottom: 10 }}>
            <Select
              defaultValue=""
              options={[
                { value: '', label: '중고거래' },
                { value: '/realty', label: '부동산' },
                { value: '/jobs', label: '아르바이트' },
              ]}
              onChange={(e: string) => router.push(`${e}/reg-item`)}
              style={{ width: 150 }}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>
            제목 <span style={{ color: 'red' }}>(*)</span>
          </div>
          <Input
            placeholder="제목을 입력해주세요."
            value={formData?.tr_title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, tr_title: e.target.value })
            }
            style={{ width: '100%' }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>
            내용 <span style={{ color: 'red' }}>(*)</span>
          </div>
          <Input.TextArea
            placeholder="내용을 입력해주세요."
            value={formData?.tr_content}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setFormData({ ...formData, tr_content: e.target.value })
            }
            style={{ width: '100%', height: 180, resize: 'none' }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>
            가격 <span style={{ color: 'red' }}>(*)</span>
          </div>
          <InputNumber
            placeholder="가격을 입력해주세요."
            value={formData?.tr_price}
            min={0}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, tr_price: e })
            }
            style={{ width: '100%' }}
          />
          <div style={{ marginTop: 10, fontSize: 13, color: '#B3B3B3' }}>
            ※ 가격은 <b>0원 이상</b> 입력해주세요.
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>
            주소 <span style={{ color: 'red' }}>(*)</span>
          </div>
          <div style={{ display: 'flex' }}>
            <Input
              placeholder="주소를 입력해주세요."
              value={formData?.tr_addr}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, tr_addr: e.target.value })
              }
              style={{ flex: 1 }}
            />
            <Button
              type="primary"
              onClick={onToggleModal}
              style={{ background: '#919191', marginLeft: 10 }}
            >
              주소 검색
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>마감일</div>
          <DatePicker
            placeholder="날짜을 선택해주세요."
            value={formData?.limit_dt}
            onChange={(e: dayjs.Dayjs | null) => setFormData({ ...formData, limit_dt: e })}
            style={{ width: '100%' }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>
            상품 이미지 <span style={{ color: 'grey', fontWeight: 400 }}>(0/3)</span>
          </div>
          <div>
            <div
              style={{
                width: 130,
                height: 130,
                border: '1px solid #d9d9d9',
                borderRadius: 16,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <CameraOutlined style={{ fontSize: 30, color: '#cccccc' }} />
                <div style={{ color: 'grey', fontSize: 13 }}>이미지 등록</div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            onClick={onClickRegTrade}
            style={{ width: 180, height: 45, fontWeight: 600 }}
          >
            등록하기
          </Button>
        </Col>
      </Row>
      {isOpen && (
        <Modal open footer={false} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} style={{ paddingTop: 40 }} />
        </Modal>
      )}
    </>
  );
};

export default RegItem;
