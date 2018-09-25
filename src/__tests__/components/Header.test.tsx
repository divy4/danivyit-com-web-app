import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Header, IHeaderProps } from '../../components/Header';

enzyme.configure({ adapter: new Adapter() });

const mockProps: IHeaderProps = {
  selectedTab: 'second',
  tabNames: ['first', 'second', 'third'],
};

describe('<Header>', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = enzyme.shallow(<Header {...mockProps}/>);
  });

  test('renders an <img>', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  test('renders a <Navbar>', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  test('renders a <Nav>', () => {
    expect(wrapper.find(Nav)).toHaveLength(1);
  });

  test('renders three <NavItem>s', () => {
    expect(wrapper.find(NavItem)).toHaveLength(3);
  });
});
