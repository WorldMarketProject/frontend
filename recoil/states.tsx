
import { atom } from 'recoil';
import { v1 } from "uuid";
import { MenuTypes } from '@/types/Common/Common.interface';

/**
 * 메뉴
 */
export const menuState = atom<MenuTypes[]>({
  key: `menu/${v1()}`,
  default: [
    {
      key: '/',
      label: '메인',
      url: '/'
    },
  ],
});

/**
 * 모바일 여부
 */
export const isMobileState = atom({
  key: `isMobile/${v1()}`,
  default: false,
});

/**
 * Nav 접힘 여부
 */
export const collapseState = atom({
  key: `isCollapsed/${v1()}`,
  default: false,
});
