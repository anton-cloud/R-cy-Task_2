import * as  NotesActionCreators from './noteActions';
import * as NotesArchiveCreators from './noteAcrchiveActions'
import * as ModalActionCreators from './modalActions';
import * as NotesStatusViewActionCreators from './activStatusTaskViewActions'

export default {
    ...NotesActionCreators,
    ...ModalActionCreators,
    ...NotesArchiveCreators,
    ...NotesStatusViewActionCreators
};