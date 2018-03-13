import MyComponentClass from './my-component-class.vue';
import { shallow } from '@vue/test-utils';

import Vue from 'vue';

Vue.config.ignoredElements = [
  'child-component-class'
];

describe('MyComponentClass', () => {
  let wrapper;
  it('should create', () => {
    wrapper = shallow(MyComponentClass);
    expect(wrapper).toBeTruthy();
  });

  it('snapshot', () => {
    wrapper = shallow(MyComponentClass, {
      stubs: {
        'child-component-class': '<child-component-class />'
      }
    });

    console.log(wrapper.html());
  });
});
