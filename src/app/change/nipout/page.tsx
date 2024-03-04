
// const NIPPOUT_USER_SEAT = gql`
//   mutation NipoutUserSeat($usingTicketId: String!, $oldSeatType: String!, $oldSeatNumber: String!,  $newSeatType: String!, $newSeatNumber: String!) {
//     Seat(oldSeatType: $oldSeatType, oldSeatNumber: $oldSeatNumber ) {
//       null
//     }
//     Seat(newTicketId: $usingTicketId, newSeatType: $newSeatType, newSeatNumber: $newSeatNumber ) {
//       newTicketId
//     }
//   }
// `

export default function NipoutPage() {
  return (
    <>
      외출 페이지는 시간권일때만

      <p>1. 로그인 상태를 먼저 물어볼 것</p>
      <p>2. 로그인 완료</p>
      <p>3. User.usingTicketId가 있는지 null인지 물어봄</p>
      <p>4-1. usingTicketId 있다? → 사용중인 좌석의 시간을 최대 30분을 늘리는 없애는 mutate 보내고, 이후 외출 IOT 끊음</p>
      <p>4-2. usingTicketId가 없다? → 사용중인 자리가 없기에 외출할수 없음이라는 다이얼로그</p>

      <div className="border">mutation NipoutUserSeat()</div>
      <div className="border">mutation IOT 전력 끊는 모델 뮤테이션 @김윤성</div>
    </>
  )
}
