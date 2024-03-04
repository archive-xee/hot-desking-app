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

// const MOVE_USER_SEAT = gql`
//   mutation MoveUserSeat($usingTicketId: String!, $oldSeatType: String!, $oldSeatNumber: String!,  $newSeatType: String!, $newSeatNumber: String!) {
//     Seat(oldSeatType: $oldSeatType, oldSeatNumber: $oldSeatNumber ) {
//       null
//     }
//     Seat(newTicketId: $usingTicketId, newSeatType: $newSeatType, newSeatNumber: $newSeatNumber ) {
//       newTicketId
//     }
//   }
// `

// usingTicketId = User.usingTicketId
// 이전의 자리를 어떻게 찾지?
export default function MovePage() {
  // 파라미터 oldSeat, newSeat을 받음


  return (
    <>
      이동 페이지

      <p>1. 자리의 QR을 찍었을 때 로그인을 먼저 물어볼 것</p>
      <p>2. 로그인 완료</p>
      <p>3. 자리의 ticketId를 물어봄</p>
      <p>4-1. ticketId가 있다? → 이미 사용되고 있는 자리라고 다이얼로그를 띄움</p>
      <p>4-2. ticketId가 없다?</p>
      <p>4-2-1. 유저가 사용하고 있는 자리가 있는지 물어봄 User.usingTicketId (좌석일때만! 스터디룸, 대여함, 사물함은 해당없음)</p>
      <p>4-2-1-1. 없으면 새로입실 → 유저가 보유한 티켓페이지로 보내기</p>
      <p>4-2-1-2. 있으면 User.usingTicketId으로 사용중 ticket의 Seat을 가져온 후 이동페이지로 파라미터로 넘김</p>

    <p>@김윤성 이동 때문에 티켓 객체가 Bookable을 가지고 있어야 함</p>
    <p>@김윤성 다시 말해 Seat 객체만을 위해서 Bookable 가지고 있어야 함</p>
    <p>@김윤성 테이블 짜는데 참고해야할 것 같습니다</p>
    <div className="border">
    query GetSeatTicketId($seatType: String!, $seatNumber: String!) [
      Seat(seatType: $seatType, seatNumber: $seatNumber ) [
        ticketId
      ]
    ]
    </div>
    <div className="border">
      query GetSeatTicketId($usingTicketId: String!) [
      Seat(id :$usingTicketId) 
      ]
    </div>
      <div className="border">mutation MoveUserSeat($usingTicketId: String!, $oldSeatType: String!, $oldSeatNumber: String!,  $newSeatType: String!, $newSeatNumber: String!) [
      Seat(oldSeatType: $oldSeatType, oldSeatNumber: $oldSeatNumber ) [
        null
      ]
      Seat(newTicketId: $usingTicketId, newSeatType: $newSeatType, newSeatNumber: $newSeatNumber ) [
        newTicketId
      ]
    ]</div>
    </>
  )
}
