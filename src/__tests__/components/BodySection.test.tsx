import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import testImg from '../testImg.png';
import { BodySection, IBodySectionProps } from '../../components/BodySection';

enzyme.configure({ adapter: new Adapter() });

const mockProps: IBodySectionProps = {
  bannerImg: testImg,
  text: "text",
  title: "title"
}

describe('<BodySection>', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = enzyme.shallow(<BodySection {...mockProps}/>);
  });

  test('renders a <Banner>', () => {
    expect(wrapper.find('Banner')).toHaveLength(1);
  });

  test('renders a <h4>', () => {
    expect(wrapper.find('h4')).toHaveLength(1);
  });
});