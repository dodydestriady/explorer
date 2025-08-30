export interface File {
  id: number;
  name: string;
}

export interface Folder {
  id: number;
  name: string;
  children?: Folder[];
  files?: File[];
}
