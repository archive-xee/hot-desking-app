import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth"
import { ProviderType } from "next-auth/providers"
import KakaoProvider from "next-auth/providers/kakao"
import { KAKAO_AUTH_JAVASCRIPT_KEY, NEXTAUTH_KAKAO_CLIENT_SECRET, NEXTAUTH_SECRET } from "@/constant/kakaoauth"

declare module "next-auth" {
  interface User {
    id: string // 최초 Provider로 로그인했을때 그 Provider의 id
    name: string | undefined
    email: string | undefined
    image: string | undefined
  }

  interface Account {
    // 인가 코드로 받는 토큰값 포함
    provider: string
    type: ProviderType
    providerAccountId: string
    access_token: string
    token_type: "bearer"
    refresh_token: string
    expires_at: number
    scope: string
    refresh_token_expires_in: number
  }

  interface Profile {
    id: number
    connected_at: string
    // kakao_account : 각 프로바이더에서 동의된 항목의 유저 정보
  }

  // useSession 리턴값
  interface Session extends DefaultSession {
    userId: string
    accessToken: string
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: NEXTAUTH_SECRET,
    // secret: "process.env.NEXTAUTH_SECRET",
  },
  providers: [
    KakaoProvider({
      clientId: KAKAO_AUTH_JAVASCRIPT_KEY,
      clientSecret: NEXTAUTH_KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn() {
      return true
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
    // called wehn /api/auth/signin, /api/auth/session, getSession(), getServerSession(), useSession()
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token // token 객체에 다시 담아서 session callback에서 반환
        token.id = profile!.id
      }
      return token
    },
    // Send properties to the client, like an access_token from a provider.
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.userId = token.id as string
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
