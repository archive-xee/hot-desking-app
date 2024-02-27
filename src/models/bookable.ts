export type BookableType = "seat" | "meetingroom" | "rentbox" | "locker"

class History {
  id: string
  bookableType: BookableType
  bookableId: string
  userId: string
  startsAt: number
  endsAt: number
  constructor(
    id: string,
    bookableType: BookableType,
    bookableId: string,
    userId: string,
    startsAt: number,
    endsAt: number,
  ) {
    this.id = id
    this.bookableType = bookableType
    this.bookableId = bookableId
    this.userId = userId
    this.startsAt = startsAt
    this.endsAt = endsAt
  }
}

abstract class Bookable {
  id: string
  userId: string | null
  type: BookableType
  ticketId: string | null
  historyList: History[]
  issuedAt: number
  constructor(
    id: string,
    userId: string | null,
    type: BookableType,
    ticketId: string,
    historyList: History[],
    issuedAt: number,
  ) {
    this.id = id
    this.userId = userId
    this.type = type
    this.ticketId = ticketId
    this.historyList = historyList
    this.issuedAt = issuedAt
  }
}

export class SeatModel extends Bookable {
  constructor(id: string, userId: string | null, ticketId: string, historyList: History[], issuedAt: number) {
    super(id, userId, "seat", ticketId, historyList, issuedAt)
  }
}

export class MeetingRoomModel extends Bookable {
  constructor(id: string, userId: string | null, ticketId: string, historyList: History[], issuedAt: number) {
    super(id, userId, "meetingroom", ticketId, historyList, issuedAt)
  }
}
export class LockerModel extends Bookable {
  constructor(id: string, userId: string | null, ticketId: string, historyList: History[], issuedAt: number) {
    super(id, userId, "locker", ticketId, historyList, issuedAt)
  }
}

export class RentBoxModel extends Bookable {
  name: string
  constructor(
    id: string,
    userId: string | null,
    ticketId: string,
    historyList: History[],
    issuedAt: number,
    name: string,
  ) {
    super(id, userId, "rentbox", ticketId, historyList, issuedAt)
    this.name = name
  }
}

// MockClass
export const history1 = new History("1", "seat", "1", "1", 1707348182, 1707948182)
export const seat1 = new SeatModel("1", "wontae", "1", [history1], 1707148182)
export const seat2 = new SeatModel("2", null, "2", [history1], 1707148182)
export const meetingRoom1 = new MeetingRoomModel("1", "wontae", "1", [history1], 1707148182)
export const meetingRoom2 = new MeetingRoomModel("2", null, "2", [history1], 1707148182)
export const locker1 = new LockerModel("1", "wontae", "1", [history1], 1707148182)
export const locker2 = new LockerModel("2", null, "2", [history1], 1707148182)
export const rentbox1 = new RentBoxModel("1", "wontae", "1", [history1], 1707148182, "g102IC")
export const rentbox2 = new RentBoxModel("2", null, "2", [history1], 1707148182, "g102IC")
