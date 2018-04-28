export interface Thread {
  id: number;
  messageIds: number[];
  participants: {[key:number]: number} //key is participantId, value is unread message count
}