export default interface Project {
  id: number;
  title: string;
  status: string;
  note: string | null;
  blockchain: string;
  stack: Array<string>;
}
