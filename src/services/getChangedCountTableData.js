export function getChangedCountTableData(notesArchive, notes) {

    const changedCountTableData = [...notesArchive];

    changedCountTableData[0].active = getActiveCountTask(notes)
    changedCountTableData[0].archived = getArchivedCountTask(notes)

    changedCountTableData[1].active = getActiveCountRandomThought(notes)
    changedCountTableData[1].archived = geArchivedCountRandomThought(notes)

    changedCountTableData[2].active = getActiveCountIdea(notes)
    changedCountTableData[2].archived = getArchivedCountIdea(notes)

    function getActiveCountTask(notes) {
        const activeTaskArr = notes.filter((note) => note.category === "Task" && note.active)
        return activeTaskArr.length;
    }

    function getArchivedCountTask(notes) {
        const archivedTaskArr = notes.filter((note) => note.category === "Task" && !note.active)
        return archivedTaskArr.length;
    }

    function getActiveCountRandomThought(notes) {
        const activeRandomThoughtArr = notes.filter((note) => note.category === "Random Thought" && note.active)
        return activeRandomThoughtArr.length;
    }

    function geArchivedCountRandomThought(notes) {
        const archivedRandomThoughtArr = notes.filter((note) => note.category === "Random Thought" && !note.active)
        return archivedRandomThoughtArr.length;
    }

    function getActiveCountIdea(notes) {
        const activeIdeaArr = notes.filter((note) => note.category === "Idea" && note.active)
        return activeIdeaArr.length;
    }

    function getArchivedCountIdea(notes) {
        const archivedIdeaArr = notes.filter((note) => note.category === "Idea" && !note.active)
        return archivedIdeaArr.length;
    }

    return changedCountTableData;
}

