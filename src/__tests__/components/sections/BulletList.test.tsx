import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import testImg from '../testImg.png';
import { BulletList, IBulletListProps } from '../../../components/sections/BulletList';

enzyme.configure({ adapter: new Adapter() });

const mockPropsNoTitle: IBulletListProps = {
  columnWidth: "100px",
}

const mockPropsTitle: IBulletListProps = {
  columnWidth: "100px",
  title: "Title"
}

const children: string[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

describe('<BannerTitle>', () => {
  let wrapperWithTitle: any;
  let wrapperWithoutTitle: any;

  beforeAll(() => {
    wrapperWithoutTitle = enzyme.shallow(<BulletList {...mockPropsNoTitle}>{children}</BulletList>);
    wrapperWithTitle = enzyme.shallow(<BulletList {...mockPropsTitle}>{children}</BulletList>);
  });

  test("doesn't contain when title is undefined", () => {
    expect(wrapperWithoutTitle.find('h3')).toHaveLength(0);
  });
  
  test('contains a title when title is defined', () => {
    expect(wrapperWithTitle.find('h3')).toHaveLength(1);
  });

  test('contains a list', () => {
    expect(wrapperWithoutTitle.find('ul')).toHaveLength(1);
  });

  test('contains list items', () => {
    expect(wrapperWithoutTitle.find('li')).toHaveLength(children.length);
  });

  test('contains list items in the correct order', () => {
    expect(wrapperWithoutTitle.find('li').map((node: any) => node.text())).toEqual(children);
  });
});
