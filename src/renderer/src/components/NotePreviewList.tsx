import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { twMerge } from 'tailwind-merge'
import { useNotesList } from '@renderer/hooks/useNotesList'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({
    onSelect: (note) => {
      console.log('onSelect', note)
    }
  })

  if (notes.length === 0) {
    return <div className={twMerge('text-center pt-4')}>No Notes Yet</div>
  }
  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          {...note}
          isActive={index === selectedNoteIndex}
          onClick={() => handleNoteSelect(index)}
        />
      ))}
    </ul>
  )
}
