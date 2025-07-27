import { useAtom, useAtomValue } from 'jotai'
import { notesAtom, selectedNoteAtomIndex } from '@renderer/store'
import { NoteInfo } from '@shared/models'

export const useNotesList = ({ onSelect }: { onSelect: (note: NoteInfo) => void }) => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteAtomIndex)

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
