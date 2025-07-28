import { useAtom, useAtomValue } from 'jotai'
import { notesAtom, selectedNoteAtomIndex } from '@renderer/store'
import { NoteInfo } from '@shared/models'
import { useEffect } from 'react'

export const useNotesList = ({ onSelect }: { onSelect: (note: NoteInfo) => void }) => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteAtomIndex)

  // select first note if no note is selected
  useEffect(() => {
    if (notes.length > 0 && selectedNoteIndex === null) {
      setSelectedNoteIndex(0)
      onSelect(notes[0])
    }
  }, [notes, selectedNoteIndex, setSelectedNoteIndex, onSelect])

  // select note by index
  const handleNoteSelect = (index: number) => {
    setSelectedNoteIndex(index)
    if (onSelect) {
      onSelect(notes[index])
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
