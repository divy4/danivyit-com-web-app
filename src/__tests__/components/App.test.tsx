import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import App from '../../components/App';

enzyme.configure({ adapter: new Adapter() });

describe('<App>', () => {
    let wrapper: any;

    beforeAll(() => {
        wrapper = enzyme.shallow(<App/>);
    });

    test('renders a <Header>', () => {
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    test('renders a <Body>', () => {
        expect(wrapper.find('Body')).toHaveLength(1);
    });

    test('renders a <Footer>', () => {
        expect(wrapper.find('Footer')).toHaveLength(1);
    });
});
