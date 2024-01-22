
import type { ThemeConfig } from 'antd';
import { Noto_Sans_KR } from "next/font/google";
// import localFont from 'next/font/local';

// const pretendarKr = localFont({
//   variable: '--pretendard-kr',
//   src: [
//     {
//       path: '../public/fonts/PretendardVariable.woff2',
//       style: 'normal'
//     },
//   ]
// })

const notoSansKr = Noto_Sans_KR({
  // preload: true,
  subsets: ["latin"], 
  weight: ["100", "400", "600", "800"],
});

const theme: ThemeConfig = {
  token: {
    fontSize: 14,
    colorPrimary: '#171E66',
    colorBgLayout: '#fff',
    fontFamily: `${notoSansKr.style.fontFamily}`,
    borderRadiusLG: 12,
  },
  components: {},
};

export default theme;