import axiosInstance from "@/util/axiosInstance";
import axios from "axios";

/**
 * 메이플 인벤 DB 아이템목록 검색
 * @param formData keyword
 * @returns result
 */
export const loadSearchList = async (formData: { keyword?: string }) => {
  return await axios
    .post(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search/inven/list`,
      formData
    )
    .then((res) => res?.data)
    .catch((err) => console.error(err));
};

/**
 * 등록된 거래 목록
 * @param formData page
 * @returns result
 */
export const loadTradeList = async (formData: { page?: number }) => {
  return await axios
    .post(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/trade/list`,
      formData
    )
    .then((res) => res?.data)
    .catch((err) => console.error(err));
};

/**
 * 거래 종류 코드
 * @returns result
 */
export const loadStatusCodeList = async () => {
  return await axios
    .get(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/trade/status/code`)
    .then((res) => res?.data)
    .catch((err) => console.error(err));
};

export const putJoinData = async (formData: any) => {};

/**
 * 로그인
 * @returns result
 */
export const login = async (formData: any) => {
  return await axios
    .post(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/login`,
      formData
    )
    .then((res) => res?.data)
    .catch((err) => console.error(err));
};

/**
 * 로그인된 회원정보
 * @returns result
 */
export const getUserInfo = async (formData: any) => {
  return await axiosInstance
    .post(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/info`,
      formData
    )
    .then((res) => res?.data)
    .catch((err) => console.error(err));
};

/**
 * 회원가입
 * @returns result
 */
export const join = async (formData: any) => {
  return await axios
    .put(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/sign`,
      formData
    )
    .then((res) => res?.data)
    .catch((err) => console.error(err));
};
