import {useEffect, useState} from 'react'
import Function from "./components/Function.jsx";

function App() {
    const [happy, setHappy] = useState(0)

    const asdf = (x, y) => {
        y=25
        x=68
        console.log(x,y)
        return Math.random()
    }

    const asd = function (x, y) {
        return Math.random()
    }

    function changeName() {
        /* setDelta(Math.sqrt(Math.round(Math.random()*100)))*/
        setHappy(Math.sqrt(Math.round(Math.random() * 100)))
    }

    useEffect(() => {
        setInterval(changeName, 3000)
    }, []);


    return (
        <>

            <Function happyInt={happy}/>
            <Function happyInt={happy}/>
            <Function happyInt={happy}/>
        </>
    )
}

export default App
