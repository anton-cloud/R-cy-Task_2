export interface INote {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  active: boolean;
  icon: any;
}

export interface INoteArchive {
  category: string;
  icon: string;
  active: number;
  archived: number;
}

export interface NoteState {
  notes: INote[];
  changeableNoteId: number | null;
}

export interface NoteAction {
  type: string;
  payload?: any;
}
