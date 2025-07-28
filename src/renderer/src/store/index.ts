import { atom } from 'jotai'
import { notesMock } from './mocks'
import { NoteInfo } from '@shared/models'

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteAtomIndex = atom<number | null>(null)

export const selectedNoteAtom = atom<(NoteInfo & { content: string }) | null>((get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteAtomIndex)

  if (selectedNoteIndex === null) return null

  const selectedNote = notes[selectedNoteIndex]

  return {
    ...selectedNote,
    content: `Hello ${selectedNoteIndex}`
  }
})

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)

  if (!notes) return

  const title = `Note ${notes.length + 1}`

  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now()
  }

  set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])

  set(selectedNoteAtomIndex, 0)
})

export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote || !notes) return

  // filter out the deleted note
  set(
    notesAtom,
    notes.filter((note) => note.title !== selectedNote.title)
  )

  // reset selected note index
  set(selectedNoteAtomIndex, null)
})
