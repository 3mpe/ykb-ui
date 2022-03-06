import React from "react";
import {render} from "@testing-library/react";
import {shallow, configure} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


import Button from "./index";

describe("<Button />", () => {
    it("should render the header", () => {
        const {container} = render(<Button>Kaydet</Button>);

        const selectedHeader = container.querySelectorAll('button');
        const headerLength = selectedHeader.length;
        expect(headerLength).toBe(1);

    });

    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<Button onClick={mockCallBack}>Kaydet</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should toMatchSnapshot', function () {
        const {container} = render(<Button>Kaydet</Button>);
        expect(container.firstChild).toMatchSnapshot()
    });

});