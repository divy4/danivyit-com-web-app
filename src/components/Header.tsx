import * as ProfileImg from '../resources/DanIvy.jpg';
import * as styles from '../styles.css';
import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

interface IHeaderProps {
  classname?: string;
  tabNames: string[];
  onSelect?: (s: string) => void;
  selectedTab: string;
}

export default class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props)
  }

  handleSelection = (event: React.SyntheticEvent<Navbar>): void => {
    const {onSelect} = this.props;
    if (onSelect != undefined) {
      onSelect(event.toString())
    }
  }

  renderItem = (item: string): JSX.Element => {
    return (
      <NavItem active={item === this.props.selectedTab} eventKey={item} key={item}>
        {item}
      </NavItem>
    )
  }

  render(): JSX.Element {
    return (
      <div>
        <div className={styles.profileImageContainer}>
          <img src={ProfileImg} className={styles.profileImage}/>
        </div>
        <Navbar className={this.props.classname} onSelect={this.handleSelection} collapseOnSelect fluid inverse staticTop>
          <Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.props.tabNames.map(this.renderItem)}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}