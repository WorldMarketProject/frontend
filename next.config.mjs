/** @type {import('next').NextConfig} */
const nextConfig = {
    /* css-in-js FOUC 문제 해결 */
    compiler: {
        styledComponents: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    /* useEffect 2번 실행되는 문제 해결 */
    reactStrictMode: false,
};

export default nextConfig;
