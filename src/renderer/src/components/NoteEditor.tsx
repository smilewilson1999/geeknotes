import { Fragment, useEffect } from 'react'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/mantine'
import { useEditor } from '@renderer/hooks/useEditor'
import { createHighlighter } from '../../../../shiki.bundle'
import '@blocknote/core/fonts/inter.css'
import '@blocknote/mantine/style.css'

export const NoteEditor = () => {
  const { selectedNote } = useEditor()

  const editor = useCreateBlockNote({
    codeBlock: {
      indentLineWithTab: true,
      defaultLanguage: 'python',
      supportedLanguages: {
        python: {
          name: 'Python',
          aliases: ['py']
        },
        typescript: {
          name: 'TypeScript',
          aliases: ['ts']
        },
        javascript: {
          name: 'JavaScript',
          aliases: ['js']
        },
        java: {
          name: 'Java',
          aliases: ['java']
        },
        sql: {
          name: 'SQL',
          aliases: ['sql']
        },
        rust: {
          name: 'Rust',
          aliases: ['rs']
        },
        c: {
          name: 'C',
          aliases: ['c']
        },
        go: {
          name: 'Go',
          aliases: ['go']
        }
      },
      createHighlighter: () =>
        createHighlighter({
          themes: ['one-light', 'dark-plus'],
          langs: ['python', 'typescript', 'javascript', 'java', 'sql', 'rust', 'c', 'go']
        })
    }
  })

  // update editor content when selectedNote changes
  useEffect(() => {
    if (editor && selectedNote) {
      editor
        .tryParseHTMLToBlocks(selectedNote.content)
        .then((blocks) => {
          editor.replaceBlocks(editor.document, blocks)
        })
        .catch(() => {
          editor.replaceBlocks(editor.document, [
            {
              type: 'paragraph',
              content: selectedNote.content
            }
          ])
        })
    }
  }, [editor, selectedNote])

  return (
    <Fragment key={selectedNote?.title}>
      <BlockNoteView editor={editor} />
    </Fragment>
  )
}
