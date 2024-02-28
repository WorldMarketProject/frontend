import axios from 'axios';
import axiosInstance from '@/util/axiosInstance';

/**
 * 자신의 거래목록
 * @returns
 * {
 *    sell_list: 등록한 거래
 *    buy_list: 신청한 거래
 * }
 */
export const loadMemberTradeList = async (formData: any) =>
  axiosInstance
    .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/member/trade/list`, formData)
    .then((res) => res?.data)
    .catch((err) => console.error(err));
