// const GET_SEAT_TICKET_ID = gql`
//   query GetSeatTicketId($seatType: String!, $seatNumber: String!) {
//     Seat(seatType: $seatType, seatNumber: $seatNumber ) {
//       ticketId
//     }
//   }
// `

// const CHECKOUT_USER_SEAT = gql`
//  mutation CheckoutUserSeat($usingTicketId: String!, $seatType: String!, $seatNumber: String!) {
//    User(usingTicketId: null)
//    Seat(ticketId: null ) 
//   }
// `

export default function CheckoutPage() {
  return (
    <>
      퇴실 페이지
      <p>1. 로그인 상태를 먼저 물어볼 것</p>
      <p>2. 로그인 완료</p>
      <p>3. User.usingTicketId가 있는지 null인지 물어봄</p>
      <p>4-1. usingTicketId 있다? → 사용중인 좌석을 없애는 mutate 보내고, 이후 퇴실완료라는 다이얼로그</p>
      <p>4-2. usingTicketId가 없다? → 사용중인 자리가 없기에 퇴실할수 없음이라는 다이얼로그</p>

      <div className="border">query GetSeatTicketId($seatType: String!, $seatNumber: String!) [
     Seat(seatType: $seatType, seatNumber: $seatNumber ) [
       ticketId
     ]
    ]
</div>
      <div className="border">mutation CheckoutUserSeat($usingTicketId: String!, $seatType: String!, $seatNumber: String!) [
         User(usingTicketId: null)
         Seat(ticketId: null ) 
      ]</div>
    </>
  )
}
