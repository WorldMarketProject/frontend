/* middleware.ts */
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

const withAuthList = ["/auth/myPage"];
const withOutAuthList = [
  "/auth/login",
  "/auth/login/id",
  "/auth/join",
  "/auth/join/id",
];

export async function middleware(req: NextRequest) {
  const session: any = await getToken({ req, secret /* raw: true */ });
  const { pathname } = req.nextUrl;

  const isWithAuth = withAuthList.includes(pathname);
  const isWithOutAuth = withOutAuthList.includes(pathname);

  const isPersonal = req.nextUrl.searchParams.get("page") === "personal";

  const goLogin = NextResponse.redirect(
    new URL("/auth/login/?required=true", req.url)
  );
  const goHome = NextResponse.redirect(new URL("/", req.url));
  const goHome2 = NextResponse.redirect(new URL("/notAccepted", req.url));

  const isAdminPage = pathname?.split("/")?.[1] === "admin";
  const userInfo = session?.user?.userInfo;

  /**
   * 로그인이 필요한 경우
   */
  if (isWithAuth) {
    if (pathname === "/service") {
      if (!session && isPersonal) {
        return goLogin;
      }
    } else if (!session) {
      return goLogin;
    }
  }

  /**
   * 로그인 시 접근 불가능
   */
  if (isWithOutAuth) {
    if (session) {
      return goHome;
    }
  }

  /**
   * 관리자 페이지
   */
  if (isAdminPage) {
    if (userInfo?.role_rank < 3 || userInfo === undefined) {
      return goHome2;
    }
  }
}

export const config = {
  matcher: [...withAuthList, ...withOutAuthList],
};
