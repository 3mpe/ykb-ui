import React from "react";
import {render} from "@testing-library/react";
import {shallow} from 'enzyme';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


import Button from "./index";

describe("<Button />", () => {
    it("should render the button", () => {
        const {container} = render(<Button>Kaydet</Button>);

        const selectedButton = container.querySelectorAll('button');
        const buttonLength = selectedButton.length;
        expect(buttonLength).toBe(1);

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