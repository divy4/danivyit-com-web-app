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
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      currentTab: content.tabNames[0],
    }
  }

  handleTabChange = (tab: string): void => {
    this.setState({
      ...this.state,
      currentTab: tab,
    })
  }

  render() {
    return (
      <div>
        <Header tabNames={content.tabNames} onSelect={this.handleTabChange} selectedTab={this.state.currentTab}/>
        <Body tabContent={content.tabs[this.state.currentTab]}/>
        <Footer/>
      </div>
    )
  }
}
