import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

// styles from './styles.css this file was never used and was deleted

// styled components could be exported from separate file

// Since react 16 it's more convinced to use functional components as it can improve performance and you could use hooks that react 16+ have. I upgraded your npm modules for that.

// Why as addTask did you mutated someTasks object and state directly and rerendered state with this.forceUpdate() ? You could set new values to state what will rerender component with given values.

// Components folder structure could be used for reusability.

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
