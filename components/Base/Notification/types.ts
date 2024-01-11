export type MessageType = "success" | "info" | "error";
export interface MessageProps {
  content: string;
  type: MessageType;
}
