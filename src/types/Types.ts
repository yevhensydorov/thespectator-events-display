import { Statuses } from "./Enums";

export interface Event {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  tags: string;
  userId: string;
  userCreatedAt: string;
}

export interface Results {
  status: keyof typeof Statuses;
  payload: Event[];
  errorMessage: string | null;
}
