export type BookableType = "seat" | "meetingroom" | "rentbox" | "locker";

class History {
  id: string;
  bookableType: BookableType;
  bookableId: string;
  userId: string;
  startsAt: number;
  endsAt: number;
  constructor(
    id: string,
    bookableType: BookableType,
    bookableId: string,
    userId: string,
    startsAt: number,
    endsAt: number,
  ) {
    this.id = id;
    this.bookableType = bookableType;
    this.bookableId = bookableId;
    this.userId = userId;
    this.startsAt = startsAt;
    this.endsAt = endsAt;
  }
}

abstract class Bookable {
  id: string;
  userId: string | null;
  type: BookableType;
  ticketId: string | null;
  historyList: History[];
  issuedAt: number;
  constructor(
    id: string,
    userId: string | null,
    type: BookableType,
    ticketId: string,
    historyList: History[],
    issuedAt: number,
  ) {
    this.id = id;
    this.userId = userId;
    this.type = type;
    this.ticketId = ticketId;
    this.historyList = historyList;
    this.issuedAt = issuedAt;
  }
}

export class SeatModel extends Bookable {
  constructor(
    id: string,
    userId: string | null,
    ticketId: string,
    historyList: History[],
    issuedAt: number,
  ) {
    super(id, userId, "seat", ticketId, historyList, issuedAt);
  }
}

export class MeetingRoomModel extends Bookable {
  constructor(
    id: string,
    userId: string | null,
    ticketId: string,
    historyList: History[],
    issuedAt: number,
  ) {
    super(id, userId, "meetingroom", ticketId, historyList, issuedAt);
  }
}
export class LockerModel extends Bookable {
  constructor(
    id: string,
    userId: string | null,
    ticketId: string,
    historyList: History[],
    issuedAt: number,
  ) {
    super(id, userId, "locker", ticketId, historyList, issuedAt);
  }
}

export class RentBoxModel extends Bookable {
  name: string;
  constructor(
    id: string,
    userId: string | null,
    ticketId: string,
    historyList: History[],
    issuedAt: number,
    name: string,
  ) {
    super(id, userId, "rentbox", ticketId, historyList, issuedAt);
    this.name = name;
  }
}
