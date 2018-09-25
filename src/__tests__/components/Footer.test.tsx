import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Footer, IFooterProps } from '../../components/Footer';

enzyme.configure({ adapter: new Adapter() });

const mockProps: IFooterProps = {
};

describe('<Footer>', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = enzyme.shallow(<Footer {...mockProps}/>);
  });

  test('contains 2 paragraphs', () => {
    expect(wrapper.find('h4')).toHaveLength(2);
  });

  test('contains 5 links', () => {
    expect(wrapper.find('a')).toHaveLength(5);
  });
});
