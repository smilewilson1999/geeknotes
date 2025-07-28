import { useSetAtom } from 'jotai'
import { ActionButton, type ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeletion = () => {
    deleteNote()
  }

  return (
    <ActionButton onClick={handleDeletion} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-900" />
    </ActionButton>
  )
}
