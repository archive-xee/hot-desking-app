export class Card {
  id: string
  // authDate: string
  cardCode: string
  cardName: string
  cardNum: string
  // orderId: string
  userId: string
  representative: string
  constructor(
    id: string,
    // authDate: string,
    cardCode: string,
    cardName: string,
    cardNum: string,
    // orderId: string,
    userId: string,
    representative: string,
  ) {
    // this.authDate = authDate
    this.id = id
    this.cardCode = cardCode
    this.cardName = cardName
    this.cardNum = cardNum
    // this.orderId = orderId
    this.userId = userId
    this.representative = representative
  }
}

// MockClass 없어지면 Class → Type
export const card1 = new Card("카드아이디uuid", "카드코드ADB", "신한", "1234123412341234", "유저아이디uuid", "0")
export const card2 = new Card("카드아이디uuid", "카드코드ADB", "현대", "5678567856785678", "유저아이디uuid", "1")
export const card3 = new Card("카드아이디uuid", "카드코드ADB", "삼성", "9012901290129012", "유저아이디uuid", "2")
