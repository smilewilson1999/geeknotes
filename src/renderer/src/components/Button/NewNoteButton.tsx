import { ActionButton, type ActionButtonProps } from '@/components'
import { FaFileSignature } from 'react-icons/fa'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FaFileSignature className="w-4 h-4 text-zinc-900" />
    </ActionButton>
  )
}
