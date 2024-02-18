import { atom } from 'recoil';
import { v1 } from 'uuid';
import { MenuTypes } from '@/types/Common/Common.interface';

/**
 * 메뉴
 */
export const menuState = atom<MenuTypes[]>({
  key: `menu/${v1()}`,
  default: [
    {
      key: '0',
      label: '중고거래',
      url: '/',
      children: [
        {
          key: '0-0',
          label: '중고거래 홈',
          url: '/',
        },
        {
          key: '0-1',
          label: '거래 목록',
          url: '/list',
        },
        {
          key: '0-2',
          label: '판매 등록',
          url: '/reg-item',
        },
      ],
    },
    {
      key: '1',
      label: '부동산',
      url: '/realty',
      children: [
        {
          key: '1-0',
          label: '부동산 홈',
          url: '/realty',
        },
        {
          key: '1-1',
          label: '거래 목록',
          url: '/realty/list',
        },
        {
          key: '1-2',
          label: '매물 등록',
          url: '/realty/reg-item',
        },
      ],
    },
    {
      key: '2',
      label: '아르바이트',
      url: '/jobs',
      children: [
        {
          key: '2-0',
          label: '아르바이트 홈',
          url: '/jobs',
        },
        {
          key: '2-1',
          label: '거래 목록',
          url: '/jobs/list',
        },
        {
          key: '2-2',
          label: '아르바이트 등록',
          url: '/jobs/reg-item',
        },
      ],
    },
  ],
});

/**
 * Nav 열림 여부
 */
export const collapseState = atom({
  key: `isCollapsed/${v1()}`,
  default: false,
});

/**
 * 채팅창 열림 여부
 */
export const chatDrawerState = atom<boolean>({
  key: `isChatOpend/${v1()}`,
  default: false,
});
