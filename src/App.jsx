import {useEffect, useState} from 'react'
import Function from "./components/Function.jsx";
import UserList from "./components/UserList.jsx";

function App() {
    const [happy, setHappy] = useState(0)

    return (
        <>
            <UserList/>
            {/*<Function happyInt={happy}/>
            <Function happyInt={happy}/>
            <Function happyInt={happy}/>*/}
        </>
    )
}

export default App
