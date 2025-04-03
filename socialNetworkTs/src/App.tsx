import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// let a: number = 10;
// let name: string = "Madi";
// let massiv: Array<string> = ["hello", "world"]
//
// type userDataType = {
//     name: string,
//     email: string,
//     age: number,
//     isSamurai: boolean,
//     address: AddressType | null,
// }
// type AddressType = {
//     country: string,
//     city: string,
//     state?: string,
// }
//
// let userData: userDataType = {
//     name: "Madi",
//     email: "madi@madi.com",
//     age: 20,
//     isSamurai: true,
//     address: {
//         country: "United States",
//         city: "United States",
//         state: "United States",
//     }
// }
//
// let state = {
//     name: null as string | null,
//     email: null as string | null,
//     age: null as number | null,
//     isSamurai: true as boolean | null,
//     address: {
//         country: null as string | null,
//         city: null as string | null,
//         state: null as string | null,
//     }
// }
//
// let superState = {
//     name: "madi",
// }
//
// export type state = typeof superState;
//

function App() {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
            </p>
        </>
    )
}

export default App
