import { useSetAtom } from 'jotai'
import { ActionButton, type ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { FaFileSignature } from 'react-icons/fa'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <FaFileSignature className="w-4 h-4 text-zinc-900" />
    </ActionButton>
  )
}
