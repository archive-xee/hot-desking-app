export function formatCardNumber(cardNumber: string): string {
  const formatted: string =
    cardNumber.slice(0, 4) + " - " + cardNumber.slice(4, 8) + " - " + "****" + " - " + cardNumber.slice(12)

  return formatted
}
