import {useEffect, useState} from "react";

function Function({happyInt}) {
    const [delta, setDelta] = useState(0)

    useEffect(() => {
        setDelta(happyInt)
    }, [delta]);

    function changeName() {
        /* setDelta(Math.sqrt(Math.round(Math.random()*100)))*/
        setDelta(Math.round(delta*2))
    }

    return (
        <>
            <div className={'border-[0.5em] border-b-teal-900 text-white ' +
                'rounded-full h-[5em] w-full flex flex-wrap gap-[3em] justify-center'}>
                {delta}
            </div>

            <button onClick={changeName} type={'button'}
                    className={'p-3 border-[0.1em]  text-black rounded-full bg-amber-500'}>
                ЖМИ МЕНЯ
            </button>

        </>
    )
}

export default Function