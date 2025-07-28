import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'
import { NoteContent, NoteInfo } from '@shared/models'

const loadNotes = async () => {
  const notes = await window.context.getNotes()

  // sort by last edit time
  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

export const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const notesAtom = unwrap(notesAtomAsync, (prev) => prev)

export const selectedNoteAtomIndex = atom<number | null>(null)

const selectedNoteAtomAsync = atom(async (get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteAtomIndex)

  if (selectedNoteIndex === null || !notes) return null

  const selectedNote = notes[selectedNoteIndex]

  const content = await window.context.readNote(selectedNote.title)

  return {
    ...selectedNote,
    content
  }
})

export const selectedNoteAtom = unwrap(selectedNoteAtomAsync, (prev) => prev ?? null)

export const saveNoteAtom = atom(null, async (get, set, newContent: NoteContent) => {
  const notes = get(notesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote || !notes) return

  // save on disk
  await window.context.writeNote(selectedNote.title, newContent)

  // update the saved note's last edit time
  set(
    notesAtom,
    notes.map((note) =>
      note.title === selectedNote.title ? { ...note, lastEditTime: Date.now() } : note
    )
  )
})
export const createEmptyNoteAtom = atom(null, async (get, set) => {
  const notes = get(notesAtom)

  if (!notes) return

  const title = await window.context.createNote()

  if (!title) return

  // Reload notes from file system to ensure consistency
  try {
    const freshNotes = await window.context.getNotes()
    const sortedNotes = freshNotes.sort((a, b) => b.lastEditTime - a.lastEditTime)
    set(notesAtom, sortedNotes)

    // Find the index of the newly created note
    const newNoteIndex = sortedNotes.findIndex((note) => note.title === title)
    set(selectedNoteAtomIndex, newNoteIndex >= 0 ? newNoteIndex : 0)
  } catch (error) {
    console.error('Failed to reload notes after creation:', error)
    // Fallback: add to current state
    const newNote: NoteInfo = {
      title,
      lastEditTime: Date.now()
    }
    set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])
    set(selectedNoteAtomIndex, 0)
  }
})

export const deleteNoteAtom = atom(null, async (get, set) => {
  const notes = get(notesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote || !notes) return

  const isDeleted = await window.context.deleteNote(selectedNote.title)

  if (!isDeleted) return

  // Reset selected note index first
  set(selectedNoteAtomIndex, null)

  // Reload notes from file system to ensure consistency
  try {
    const freshNotes = await window.context.getNotes()
    const sortedNotes = freshNotes.sort((a, b) => b.lastEditTime - a.lastEditTime)
    set(notesAtom, sortedNotes)
  } catch (error) {
    console.error('Failed to reload notes after deletion:', error)
    // Fallback: filter from current state
    set(
      notesAtom,
      notes.filter((note) => note.title !== selectedNote.title)
    )
  }
})
