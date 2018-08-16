import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Body from './Body';
import * as React from 'react';

interface IAppProps {
}

interface IAppState {
  currentTab: string;
  tabs: string[];
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      currentTab: "Home",
      tabs: ["Home", "About", "Experience", "School", "Work", "Contact"],
    }
  }

  handleTabChange = (tab: string): void => {
    this.setState({
      ...this.state,
      currentTab: tab,
    })
  }

  render() {
    const { currentTab, tabs } = this.state;
    return (
      <div>
        <Header tabNames={tabs} onSelect={this.handleTabChange} selectedTab={currentTab}/>
        <Body tabName={currentTab}/>
      </div>
    )
  }
}
