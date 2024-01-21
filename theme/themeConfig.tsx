
import type { ThemeConfig } from 'antd';
import localFont from 'next/font/local'

const pretendarKr = localFont({
  variable: '--pretendard-kr',
  src: [
    {
      path: '../public/fonts/PretendardVariable.woff2',
      style: 'normal'
    },
  ]
})

const theme: ThemeConfig = {
  token: {
    fontSize: 14,
    colorPrimary: '#171E66',
    colorBgLayout: '#fff',
    fontFamily: `${pretendarKr.style.fontFamily}`,
    borderRadiusLG: 12,
  },
  components: {},
};

export default theme;