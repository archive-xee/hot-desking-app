import {
  KAKAO_AUTH_JAVASCRIPT_KEY,
  KAKAO_AUTH_CODE_REDIRECT_URL,
  KAKAO_AUTH_RESTAPI_KEY,
  KAKAO_TOKEN_REQUEST_URL,
  KAKAO_AUTH_CLIENT_SECRET_KEY,
} from "@/constant/kakaoauth"

export default class KakaoOAuth {
  static initialize() {
    const { Kakao } = window
    Kakao.init(KAKAO_AUTH_JAVASCRIPT_KEY)
    console.log(Kakao.isInitialized() && "카카오로그인 Script가 초기화되었습니다.")
  }

  static requestAuthorizationCode() {
    const { Kakao } = window
    Kakao.Auth.authorize({
      redirectUri: KAKAO_AUTH_CODE_REDIRECT_URL,
    })
  }

  static async requestToken(authorizationCode: string) {
    const res = await fetch(KAKAO_TOKEN_REQUEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: KAKAO_AUTH_RESTAPI_KEY,
        redirect_uri: KAKAO_AUTH_CODE_REDIRECT_URL,
        code: authorizationCode,
        client_secret: KAKAO_AUTH_CLIENT_SECRET_KEY,
      }),
    })
    return res.json()
  }
}
