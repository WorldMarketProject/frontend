import axios from 'axios';
import axiosInstance from '@/util/axiosInstance';

/**
 * 회원 가입
 * @returns result
 */
export const putJoinData = async (formData: any) => {};

/**
 * 로그인
 * @returns result
 */
export const login = async (formData: any) =>
  axios
    .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/login`, formData)
    .then((res) => res?.data)
    .catch((err) => console.error(err));

/**
 * 로그인된 회원정보
 * @returns result
 */
export const getUserInfo = async (formData: any) =>
  axiosInstance
    .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/info`, formData)
    .then((res) => res?.data)
    .catch((err) => console.error(err));

/**
 * 회원가입
 * @returns result
 */
export const join = async (formData: any) =>
  axios
    .put(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/sign`, formData)
    .then((res) => res?.data)
    .catch((err) => console.error(err));

/**
 * 회원정보 중복확인
 * @returns result
 */
export const userCheck = async (formData: any) =>
  axiosInstance
    .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/check`, formData)
    .then((res) => res?.data)
    .catch((err) => console.error(err));
