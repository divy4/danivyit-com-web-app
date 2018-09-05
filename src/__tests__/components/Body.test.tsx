import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import testImg from '../testImg.png';
import { Body, IBodyProps } from '../../components/Body';
import { BodySection } from '../../components/BodySection';
import { BulletList } from '../../components/sections/BulletList';
import { TextSection } from '../../components/sections/TextSection';


enzyme.configure({ adapter: new Adapter() });

const mockProps: IBodyProps = {
  tabContent: {
    sections: [
      {
        banner: testImg,
        bannerTitle: "Section 1",
        subSections: [
          {
            type: TextSection,
            children: "Subsection text",
          },
        ],
      },
      {
        banner: testImg,
        bannerTitle: "Section 2",
        subSections: [
          {
            type: BulletList,
            children: [
              "Bullet 1",
              "Bullet 2",
            ],
          },
        ],
      },
    ],
  },
};

describe('<Body>', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = enzyme.shallow(<Body {...mockProps}/>);
  });

  test('renders a <BodySection>', () => {
    expect(wrapper.find(BodySection)).toHaveLength(2);
  });

  test('renders a <TextSection>', () => {
    expect(wrapper.find(TextSection)).toHaveLength(1);
  });

  test('renders a <BulletList>', () => {
    expect(wrapper.find(BulletList)).toHaveLength(1);
  });
});
