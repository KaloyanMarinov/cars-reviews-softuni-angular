export interface IMessage  {
  type: boolean | null;
  messageText: string | null;
}

export interface IError  {
  description: string | null;
  debug?: string | null;
  error?: string | null
}
