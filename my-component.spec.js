import MyComponent from './my-component.vue';
import { shallow } from '@vue/test-utils';

import Vue from 'vue';

Vue.config.ignoredElements = [
  'child-component'
];

describe('MyComponent', () => {
  let wrapper;
  it('should create', () => {
    wrapper = shallow(MyComponent);
    expect(wrapper).toBeTruthy();
  });

  it('snapshot', () => {
    wrapper = shallow(MyComponent, {
      propsData: {
        prop: 111
      },
      stubs: {
        'child-component': '<child-component />'
      }
    });

    console.log(wrapper.html());
  });
});
