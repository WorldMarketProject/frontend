import axios from 'axios';
import axiosInstance from '@/util/axiosInstance';

/**
 * 등록된 거래 목록
 * @param formData page
 * @returns result
 */
export const loadTradeList = async (formData: any) =>
  axiosInstance
    .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/trade/list`, formData)
    .then((res) => res?.data)
    .catch((err) => console.error(err));

/**
 * 거래 상세
 * @param formData page
 * @returns result
 */
export const loadTradeDetail = async (formData: any) =>
  axiosInstance
    .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/trade/detail`, formData)
    .then((res) => res?.data)
    .catch((err) => console.error(err));

/**
 * 거래 종류 코드
 * @returns result
 */
export const loadStatusCodeList = async () =>
  axios
    .get(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/trade/status/code`)
    .then((res) => res?.data)
    .catch((err) => console.error(err));
