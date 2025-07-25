// import electronLogo from './assets/electron.svg'
import geeknotesLogo from './assets/geeknotes-logo.svg'

function App(): React.JSX.Element {
  return (
    <>
      <div className="flex flex-col h-full items-center justify-center">
        <img alt="logo" className="pointer-events-none" src={geeknotesLogo} width="250" />
        <span className="text-4xl font-semibold text-yellow-100 mt-8">Hello from GeekNotes</span>
      </div>
    </>
  )
}

export default App
