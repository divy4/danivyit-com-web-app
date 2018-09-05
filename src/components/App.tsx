import 'bootstrap/dist/css/bootstrap.min.css';
import { Body } from './Body';
import { content } from '../content';
import { Footer } from './Footer';
import { Header } from './Header';
import * as React from 'react';

export interface IAppProps {
}

interface IAppState {
  currentTab: string;
  tabs: string[];
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      currentTab: "About",
      tabs: ["About", "Experience", "School", "Work", "Contact"],
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
        <Body tabContent={content.tabs[currentTab]}/>
        <Footer/>
      </div>
    )
  }
}
