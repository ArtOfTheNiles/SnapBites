export default interface Goals {
  id: number;
  profile: number;
  name: string;
  description?: string;
  created: Date;
  finish_line?: Date;
}