import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import testImg from '../testImg.png';
import { Banner, BannerTitle, IBannerProps } from '../../components/Banner';

enzyme.configure({ adapter: new Adapter() });

const mockProps: IBannerProps = {
  src: testImg
}

describe('<BannerTitle>', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = enzyme.shallow(<Banner {...mockProps}><BannerTitle>Test</BannerTitle></Banner>);
  });

  test('renders a <BannerTitle>', () => {
    expect(wrapper.find(BannerTitle)).toHaveLength(1);
  });
});
