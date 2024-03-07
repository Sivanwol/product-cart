import {useState} from "react";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import {HomeRouteLoaderData} from "../providers/loaders/homeLoader.ts";
import {useLoaderData} from "react-router-dom";

function Home() {
  const data = useLoaderData() as HomeRouteLoaderData;
  const [count, setCount] = useState(0);
  console.log(data);

  return (<>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home;