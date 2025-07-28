import { Fragment, useEffect } from 'react'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/mantine'
import { useEditor } from '@renderer/hooks/useEditor'
import { createHighlighter } from '../../../../shiki.bundle'
import '@blocknote/core/fonts/inter.css'
import '@blocknote/mantine/style.css'

export const NoteEditor = () => {
  const { selectedNote, handleAutoSaving } = useEditor()

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
      // Try to parse as HTML first, then JSON, finally fallback to plain text
      const loadContent = async () => {
        try {
          let blocks

          if (typeof editor.tryParseHTMLToBlocks === 'function') {
            // Try HTML parsing first
            blocks = await editor.tryParseHTMLToBlocks(selectedNote.content)
          } else if (
            selectedNote.content.trim().startsWith('[') ||
            selectedNote.content.trim().startsWith('{')
          ) {
            // Try parsing as JSON (BlockNote's native format)
            try {
              const jsonBlocks = JSON.parse(selectedNote.content)
              blocks = Array.isArray(jsonBlocks) ? jsonBlocks : [jsonBlocks]
            } catch {
              // If JSON parsing fails, treat as plain text
              blocks = [
                {
                  type: 'paragraph',
                  content: selectedNote.content
                }
              ]
            }
          } else {
            // Fallback to plain text
            blocks = [
              {
                type: 'paragraph',
                content: selectedNote.content
              }
            ]
          }

          editor.replaceBlocks(editor.document, blocks)
        } catch (error) {
          console.error('Failed to load note content:', error)
          // Final fallback to plain text
          editor.replaceBlocks(editor.document, [
            {
              type: 'paragraph',
              content: selectedNote.content
            }
          ])
        }
      }

      loadContent()
    }
  }, [editor, selectedNote])

  if (!selectedNote) return null

  return (
    <Fragment key={selectedNote.title}>
      <BlockNoteView editor={editor} onChange={handleAutoSaving} />
    </Fragment>
  )
}
