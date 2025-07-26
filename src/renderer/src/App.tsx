import { Content, FloatingNoteTitle, NotePreviewList, RootLayout, Sidebar } from './components'
import { ActionButtonsRow } from './components/ActionButtonRow'
import { DraggableTopBar } from './components/DraggableTopBar'
import { MarkdownEditor } from './components/MarkdownEditor'

function App(): React.JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="p-8 border-l border-l-gray-300">
          <FloatingNoteTitle className="pt-2 app-title" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
