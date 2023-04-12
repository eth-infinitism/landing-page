export interface IResourceItem {
  name: string;
  url: string;
}

export interface IResourceSection {
  sectionName: string;
  resources: IResourceItem[];
}
