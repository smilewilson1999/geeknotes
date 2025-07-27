import { atom } from 'jotai'
import { notesMock } from './mocks'
import { NoteInfo } from '@shared/models'

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteAtomIndex = atom<number | null>(null)

export const selectedNoteAtom = atom<NoteInfo | null>((get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteAtomIndex)

  if (selectedNoteIndex === null) return null

  const selectedNote = notes[selectedNoteIndex]

  return {
    ...selectedNote,
    content: `Hello ${selectedNoteIndex}`
  }
})
