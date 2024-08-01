import Styles from './App.module.scss'
import AppRouter from './router/AppRouter'

function App() {



  return (
    <div className={Styles.app}>
     <AppRouter />
    </div>
  )
}

export default App
