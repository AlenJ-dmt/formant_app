import './App.css'
import { CreateRobotForm } from "./components/CreateRobotForm/CreateRobotForm"
import axios from 'axios'
import { useContext, useState } from "react"
import { RobotContext } from "./Context"

function App() {

  const context = useContext(RobotContext)

  const [err, setErr] = useState(String)
  const [msg, setMsg] = useState(String)

  const createBot = () => {

    setErr("")
    setMsg("")

    if (context?.name === "" || context?.battery === "" || context?.cpu === "" || context?.disk === "" || context?.memory === "") {
      setErr("complete missing fields")
      return
    }

    setErr("")
    axios.post("http://localhost:8000/api/robots/setnew", {
      name: context?.name,
      battery: context?.battery,
      cpu: context?.cpu,
      disk: context?.disk,
      memory: context?.memory
    }).then(res => {
      if (res.status === 201) {
        setMsg("Robot created successfully")
      }
    })

  }

  return (
    <div className="App">
      <CreateRobotForm />
      <div style={{ color: "#e07575" }}>{err}</div>
      <div style={{ color: "rgb(106 149 129)" }}>{msg}</div>
      <button onClick={() => createBot()} type="submit" className="submit__btn">Submit</button>
    </div>
  )
}

export default App
