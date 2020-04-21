import React from 'react';
import {mount} from 'enzyme';
import Progress from '../core/components/Progress'



describe('Progress component test',  () => {
    const wrapper = mount(<Progress variant="determinate" value={50}/>)
    it('Component should render properly ', () => {
       expect(wrapper.exists('.MuiLinearProgress-determinate')).toBe(true);
    })
});