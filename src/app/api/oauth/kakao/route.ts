import KakaoOAuth from "@/lib/kakaoauth"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const authorizationCode = searchParams.get("code")
  const res = await KakaoOAuth.requestToken(authorizationCode ?? "authorizationCodeNotReceived")
  return Response.json({ res })
}
