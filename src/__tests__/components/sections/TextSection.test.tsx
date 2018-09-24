import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { ITextSectionProps, TextSection } from '../../../components/sections/TextSection';

enzyme.configure({ adapter: new Adapter() });

const mockPropsNoTitle: ITextSectionProps = {
};

const mockPropsTitle: ITextSectionProps = {
  title: 'Title',
};

const text: string = `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
Text Text Text Text Text Text Text Text Text.`;

describe('<BannerTitle>', () => {
  let wrapperWithTitle: any;
  let wrapperWithoutTitle: any;

  beforeAll(() => {
    wrapperWithoutTitle = enzyme.shallow(<TextSection {...mockPropsNoTitle}>{text}</TextSection>);
    wrapperWithTitle = enzyme.shallow(<TextSection {...mockPropsTitle}>{text}</TextSection>);
  });

  test('doesn\'t contain when title is undefined', () => {
    expect(wrapperWithoutTitle.find('h3')).toHaveLength(0);
  });

  test('contains a title when title is defined', () => {
    expect(wrapperWithTitle.find('h3')).toHaveLength(1);
  });

  test('contains a body', () => {
    expect(wrapperWithoutTitle.find('h4')).toHaveLength(1);
  });

  test('contains the correct body text', () => {
    expect(wrapperWithoutTitle.find('h4').text()).toBe(text);
  });
});
