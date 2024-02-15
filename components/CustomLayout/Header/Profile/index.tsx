import { Avatar } from "antd";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import unknownAvatar from "@/public/img/profile/unknown-avatar.png";
import styled from "styled-components";

const ProfilePopOverContent = (
  setProfileOpen: Dispatch<SetStateAction<boolean>>
) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const profileImg = session?.user?.info?.user_info?.file_path_thumb;
  const profile = profileImg ? (
    <img
      src={`http://${process.env.NEXT_PUBLIC_BACKEND_URL}${profileImg}`}
      alt="profile"
    />
  ) : (
    <Image src={unknownAvatar} alt="unknown" />
  );

  const onClickMenu = (path: string) => {
    router.push(path);
    setProfileOpen(false);
  };

  return (
    <StyledPopoverDiv
      style={{
        width: 320,
        height: 450,
        fontSize: 15,
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ paddingTop: 20, padding: 10, flex: 1 }}>
        <div>
          <Avatar size={70} icon={profile} />
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <div style={{ fontWeight: 700 }}>
            {session?.user?.info?.userInfo?.user_nm}
          </div>
          <div>
            {session?.user?.info?.userInfo?.introduce ||
              "자기소개를 입력해주세요."}
          </div>
        </div>
      </div>
      <div>
        {session?.user?.info?.userInfo?.role_rank > 2 && (
          <StyledProfileDiv onClick={() => router.push("/admin")}>
            관리자페이지
          </StyledProfileDiv>
        )}
        <StyledProfileDiv onClick={() => onClickMenu("/auth/myPage")}>
          마이페이지
        </StyledProfileDiv>
        <StyledProfileDiv onClick={() => signOut({ callbackUrl: "/" })}>
          로그아웃
        </StyledProfileDiv>
      </div>
    </StyledPopoverDiv>
  );
};

export default ProfilePopOverContent;

const StyledProfileDiv = styled.div`
  && {
    border-radius: 10px;
    padding: 15px 10px;
    font-weight: 500;
    &:hover {
      background: #eee;
      cursor: pointer;
    }
  }
`;

const StyledPopoverDiv = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #45556066;
    border-radius: 20px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;
