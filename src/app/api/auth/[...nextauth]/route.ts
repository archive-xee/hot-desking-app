import NextAuth from "next-auth"
import KakaoProvider from "next-auth/providers/kakao"
import { KAKAO_AUTH_JAVASCRIPT_KEY, NEXTAUTH_KAKAO_CLIENT_SECRET } from "@/constant/kakaoauth"

const authOptions = {
  providers: [
    KakaoProvider({
      clientId: KAKAO_AUTH_JAVASCRIPT_KEY,
      clientSecret: NEXTAUTH_KAKAO_CLIENT_SECRET,
    }),
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
