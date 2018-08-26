import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Footer, IFooterProps } from '../../components/Footer';

enzyme.configure({ adapter: new Adapter() });

const mockProps: IFooterProps = {
}

describe('<Footer>', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = enzyme.shallow(<Footer {...mockProps}/>);
  });

  test('contains a paragraph', () => {
    expect(wrapper.find('h4')).toHaveLength(1);
  });

  test('contains 5 links', () => {
    expect(wrapper.find('a')).toHaveLength(5);
  });
});
