import { v4 as uuidv4 } from "uuid";

export class Note {
  noteId: string;
  timestamp: number;
  userId: string;
  content: string;

  constructor(userId: string, content: string) {
    this.noteId = uuidv4();
    this.timestamp = Date.now();
    this.userId = userId;
    this.content = content;
  }

  submit() {
    console.log(this);
  }
}
