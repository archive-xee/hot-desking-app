import request, { gql } from "graphql-request"
import { DefaultSession, NextAuthOptions } from "next-auth"
import { ProviderType } from "next-auth/providers"
import KakaoProvider from "next-auth/providers/kakao"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { KAKAO_AUTH_JAVASCRIPT_KEY, NEXTAUTH_KAKAO_CLIENT_SECRET_KEY, NEXTAUTH_SECRET_KEY } from "@/constant/kakaoauth"

const GET_USER_BY_ID = gql`
  query GetUserById($userId: String!) {
    user(userId: $userId) {
      id
      name
      phoneNumber
      ageRange
      birthday
      birthdayType
      birthyear
      gender
    }
  }
`

const ADD_USER_MUTATION = gql`
  mutation AddUser(
    $id: String!
    $name: String!
    $phoneNumber: String!
    $ageRange: String
    $birthday: String
    $birthdayType: String
    $birthyear: String
    $gender: String
  ) {
    addUser(
      input: {
        id: $id
        name: $name
        phoneNumber: $phoneNumber
        ageRange: $ageRange
        birthday: $birthday
        birthdayType: $birthdayType
        birthyear: $birthyear
        gender: $gender
      }
    ) {
      resultCode
    }
  }
`

interface UserInfo {
  id: string
  name: string
  phone_number: string
  age_range: string | null
  birthday: string | null
  birthday_type: string | null
  birthyear: string | null
  gender: string | null
}

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
    kakao_account: UserInfo
    // kakao_account : 각 프로바이더에서 동의된 항목의 유저 정보
  }

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
    secret: NEXTAUTH_SECRET_KEY,
  },
  providers: [
    KakaoProvider({
      clientId: KAKAO_AUTH_JAVASCRIPT_KEY,
      clientSecret: NEXTAUTH_KAKAO_CLIENT_SECRET_KEY,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const userId = profile?.id.toString()
      const kakao_account = profile?.kakao_account

      const user = await request(APOLLO_ROUTER_URL, GET_USER_BY_ID, {
        userId,
      })

      if (!user) {
        await request(APOLLO_ROUTER_URL, ADD_USER_MUTATION, {
          id: userId,
          name: kakao_account?.name,
          phoneNumber: kakao_account?.phone_number,
          birthyear: kakao_account?.birthyear,
          birthday: kakao_account?.birthday,
          birthdayType: kakao_account?.birthday_type,
          gender: kakao_account?.gender,
        })
      }

      return true
    },
    async redirect({ baseUrl }) {
      return baseUrl
    },
    // called wehn /api/auth/signin, /api/auth/session, getSession(), getServerSession(), useSession()
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token // token 객체에 다시 담아서 session callback에서 반환
        token.id = profile!.id.toString()
      }
      return token
    },
    // Send properties to the client, like an access_token from a provider.
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.userId = (token.id as number).toString()
      return session
    },
  },
}
