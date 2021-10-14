import "./CreateRobotForm.css"
import { useContext } from "react"
import { RobotContext } from "../../Context"



export const CreateRobotForm = () => {

    const context = useContext(RobotContext)

    return (

        <form id="new__robot__form">
            <h2 style={{ color: "#fff" }}>Create New Robot</h2>
            <div className="input__container">
                <label className="new__robot__label" >Name</label>
                <input required onChange={(ev) => context?.setProperty(ev.target.name, ev.target.value)} placeholder="Notorius Bot" name="name" className="new__robot__input" />
            </div>
            <div className="input__container">
                <label className="new__robot__label" >Battery</label>
                <input required onChange={(ev) => context?.setProperty(ev.target.name, ev.target.value)} placeholder="12V" name="battery" className="new__robot__input" />
            </div>
            <div className="input__container">
                <label className="new__robot__label" >CPU</label>
                <input required onChange={(ev) => context?.setProperty(ev.target.name, ev.target.value)} placeholder="Dual-core" name="cpu" className="new__robot__input" />
            </div>
            <div className="input__container">
                <label className="new__robot__label" >Disk</label>
                <input required onChange={(ev) => context?.setProperty(ev.target.name, ev.target.value)} placeholder="Solid" name="disk" className="new__robot__input" />
            </div>
            <div className="input__container">
                <label className="new__robot__label" >Memory</label>
                <input required onChange={(ev) => context?.setProperty(ev.target.name, ev.target.value)} placeholder="500GB" name="memory" className="new__robot__input" />
            </div>
        </form>


    )
}