import { useAtom, useAtomValue } from 'jotai'
import { notesAtom, selectedNoteAtomIndex } from '@renderer/store'
import { useEditor } from '@renderer/hooks/useEditor'

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteAtomIndex)
  const { handleAutoSaving } = useEditor()

  // select note by index
  const handleNoteSelect = (index: number) => {
    handleAutoSaving.flush()
    setSelectedNoteIndex(index)
    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
