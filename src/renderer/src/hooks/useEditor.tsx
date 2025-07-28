import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'

export const useEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  return {
    selectedNote
  }
}
