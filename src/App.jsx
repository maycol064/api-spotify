import { MainRouter } from "./router/MainRouter"
import { AppTheme } from "./theme/AppTheme"

const App = () => {
    return (
        <AppTheme>
            <MainRouter />
        </AppTheme>
    )
}

export default App
