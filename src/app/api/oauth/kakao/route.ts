import KakaoOAuth from "@/lib/kakaoauth"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const authorizationCode = searchParams.get("code")
  const tokenRes = await KakaoOAuth.requestToken(authorizationCode ?? "authorizationCodeNotReceived")
  const accessToken = tokenRes.access_token
  const userInfoRes = await KakaoOAuth.requestUserInfo(accessToken) // DB에 넣을 유저 정보
  return Response.json({ userInfoRes })
}
