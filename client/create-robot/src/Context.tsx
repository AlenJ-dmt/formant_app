import * as React from "react";


interface RobotContextInterface {
  name: string
  battery: string
  cpu: string
  disk: string
  memory: string
  setProperty: (robotProperty: string, robotPropertyValue: string) => void
}

export const RobotContext = React.createContext<RobotContextInterface | null>(null);

export class RobotProvider extends React.Component {
  state = {
    name: "",
    battery: "",
    cpu: "",
    disk: "",
    memory: "",
    
  }

  setProperty  = (robotProperty: string, robotPropertyValue: string) => {
    this.setState({
      [robotProperty]: robotPropertyValue
    })
  }

  render(){

    const value = {
    name: this.state.name,
    battery: this.state.battery,
    cpu: this.state.cpu,
    disk: this.state.disk,
    memory: this.state.memory,
    setProperty: this.setProperty
    }

    return(
      <RobotContext.Provider value={value}>
        {this.props.children}
      </RobotContext.Provider>
    )
  }

}