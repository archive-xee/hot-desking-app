export type Bookable = {
  id: string
  seat: SeatType
  ticketId: string | null
  userId: string | null
  bookableType: BookableType
}

export type BookableType = {
  name: "좌석" | "회의실" | "대여함" | "사물함"
  type: "seat" | "meetingroom" | "rentbox" | "locker"
}

export type SeatType = {
  number: string
  type: string
  name: string
}

// export class SeatModel extends Bookable {
//   constructor(id: string, userId: string | null, ticketId: string, historyList: History[], issuedAt: number) {
//     super(id, userId, "seat", ticketId, historyList, issuedAt)
//   }
// }

// export class MeetingRoomModel extends Bookable {
//   constructor(id: string, userId: string | null, ticketId: string, historyList: History[], issuedAt: number) {
//     super(id, userId, "meetingroom", ticketId, historyList, issuedAt)
//   }
// }
// export class LockerModel extends Bookable {
//   constructor(id: string, userId: string | null, ticketId: string, historyList: History[], issuedAt: number) {
//     super(id, userId, "locker", ticketId, historyList, issuedAt)
//   }
// }

// export class RentBoxModel extends Bookable {
//   name: string
//   constructor(
//     id: string,
//     userId: string | null,
//     ticketId: string,
//     historyList: History[],
//     issuedAt: number,
//     name: string,
//   ) {
//     super(id, userId, "rentbox", ticketId, historyList, issuedAt)
//     this.name = name
//   }
// }

// // MockClass
// export const history1 = new History("1", "seat", "1", "1", 1707348182, 1707948182)
// export const seat1 = new SeatModel("1", "wontae", "1", [history1], 1707148182)
// export const seat2 = new SeatModel("2", null, "2", [history1], 1707148182)
// export const meetingRoom1 = new MeetingRoomModel("1", "wontae", "1", [history1], 1707148182)
// export const meetingRoom2 = new MeetingRoomModel("2", null, "2", [history1], 1707148182)
// export const locker1 = new LockerModel("1", "wontae", "1", [history1], 1707148182)
// export const locker2 = new LockerModel("2", null, "2", [history1], 1707148182)
// export const rentbox1 = new RentBoxModel("1", "wontae", "1", [history1], 1707148182, "g102IC")
// export const rentbox2 = new RentBoxModel("2", null, "2", [history1], 1707148182, "g102IC")
