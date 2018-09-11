import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { BannerTitle } from '../../components/BannerTitle';

enzyme.configure({ adapter: new Adapter() });

describe('<BannerTitle>', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = enzyme.shallow(<BannerTitle>Test</BannerTitle>);
  });

  test('renders a <h1>', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').text()).toBe('Test');
  });
});
