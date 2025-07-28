import { BlockNoteEditor } from '@blocknote/core'
import { autoSavingTime } from '@shared/constants'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { debounce } from 'lodash'

export const useEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)

  const handleAutoSaving = debounce(async (editor: BlockNoteEditor) => {
    if (!selectedNote) return

    try {
      // Try to use HTML format first, fallback to JSON if not available
      let content: string

      if (typeof editor.blocksToFullHTML === 'function') {
        // HTML format (if available)
        content = await editor.blocksToFullHTML(editor.document)
      } else if (typeof editor.blocksToHTMLLossy === 'function') {
        // HTML format alternative method
        content = await editor.blocksToHTMLLossy(editor.document)
      } else {
        // Fallback to JSON format
        content = JSON.stringify(editor.document, null, 2)
      }

      await saveNote(content)
    } catch (error) {
      console.error('Auto save failed:', error)
    }
  }, autoSavingTime)

  return {
    selectedNote,
    saveNote,
    handleAutoSaving
  }
}
