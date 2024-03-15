export class Card {
  cardId: string
  cardNo: string
  expYear: string
  expMonth: string
  idNo: string
  cardPw: string
  constructor(cardId: string, cardNo: string, expYear: string, expMonth: string, idNo: string, cardPw: string) {
    this.cardId = cardId
    this.cardNo = cardNo
    this.expYear = expYear
    this.expMonth = expMonth
    this.idNo = idNo
    this.cardPw = cardPw
  }
}

// MockClass
export const card1 = new Card("카드아이디uuid", "1234123412341234", "12", "34", "123456", "12")
