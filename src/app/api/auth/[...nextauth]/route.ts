import NextAuth, { NextAuthOptions } from "next-auth"
import KakaoProvider from "next-auth/providers/kakao"
import { KAKAO_AUTH_JAVASCRIPT_KEY, NEXTAUTH_KAKAO_CLIENT_SECRET, NEXTAUTH_SECRET } from "@/constant/kakaoauth"

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    name: string
  }
  /**
   * The shape of the account object returned in the OAuth providers' `account` callback,
   * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
   */
  //   interface Account {}

  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {
    accessToken: string
  }
}

// declare module "next-auth/jwt" {
//   /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
//   interface JWT {
//     /** OpenID ID Token */
//     idToken?: string
//   }
// }

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
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
