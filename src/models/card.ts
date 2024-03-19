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
    representative: string,
    userId: string,
  ) {
    // this.authDate = authDate
    this.id = id
    this.cardCode = cardCode
    this.cardName = cardName
    this.cardNum = cardNum
    // this.orderId = orderId
    this.representative = representative
    this.userId = userId
  }
}

// MockClass
export const card1 = new Card("카드아이디uuid", "ADB", "1234123412341234", "12", "34", "123456")
