// const GET_SEAT_TICKET_ID = gql`
//   query GetSeatTicketId($seatType: String!, $seatNumber: String!) {
//     Seat(seatType: $seatType, seatNumber: $seatNumber ) {
//       ticketId
//     }
//   }
// `

// const GET_USER_SEAT_TICKET_ID = gql`
//  query GetSeatTicketId($usingTicketId: String!) {
//     Seat(id :$usingTicketId)
//   }
// `

// 다시 수정해서 올려야 함. 이전 좌석 알 필요 없음

// const MOVE_USER_SEAT = gql`
//   mutation MoveUserSeat($usingTicketId: String!, $oldSeatType: String!, $oldSeatNumber: String!,  $newSeatType: String!, $newSeatNumber: String!) {
//     Seat(newTicketId: $usingTicketId, newSeatType: $newSeatType, newSeatNumber: $newSeatNumber ) {
//       newTicketId
//     }
//   }
// `

// 이전의 자리는 필요없음
export default function MovePage() {
  return (
    <>
      이동 페이지 (좌석일때만! 스터디룸, 대여함, 사물함은 해당없음)
      <p>1. 자리의 QR을 찍었을 때 로그인을 먼저 물어볼 것</p>
      <p>2. 로그인 완료</p>
      <div className="border">
        <p>3. 자리의 ticketId를 물어봄</p>
        <p>
          query GetSeatTicketId($seatType: String!, $seatNumber: String!) [ Seat(seatType: $seatType, seatNumber:
          $seatNumber ) [ ticketId ] ]
        </p>
      </div>
      <p>4-1. ticketId가 있다? → 이미 사용되고 있는 자리라고 다이얼로그를 띄움</p>
      <p>4-2. ticketId가 없다?</p>
      <div className="border">
        <p>
          4-2-1. 유저가 사용하고 있는 자리가 있는지 물어봄 UserTicket 반복문 돌면서 UserTicket.activated = true가
          있는지?
        </p>
        <p>
          query GetSeatActivatedUserTicketId($userId: String!) [ UserTicket(userId: $userId, $bookableType: seat,
          activated: true) ]
        </p>
      </div>
      <p>4-2-1-1. 없으면 새로입실 → 유저가 보유한 티켓페이지로 보내기</p>
      <div className="border">
        <p>4-2-1-2. 있으면 UserTicket의 사용중 ticket의 Seat을 가져온 후 이동페이지로 파라미터로 넘김</p>
        <p>서버에서 알아서 이동된 UserTicket의 activated를 true로 하고, 나머지 UserTicket은 activated false</p>
        <p>
          mutation MoveUserSeat($userTicketId: String!, $newSeatType: String!, $newSeatNumber: String!) [
          Seat(userTicketId: $userTicketId, newSeatType: $newSeatType, newSeatNumber: $newSeatNumber ) [ resultCode ] ]
        </p>
      </div>
    </>
  )
}
