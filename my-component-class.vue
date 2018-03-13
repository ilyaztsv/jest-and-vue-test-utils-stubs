<template>
  <div>
    <h1>MyComponentClass</h1>
    <child-component-class></child-component-class>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import ChildComponentClass from './child-component-class.vue';

@Component({
  name: 'my-component-class',
  components: {
    'child-component-class': ChildComponentClass
  }
})
export default class MyComponentClass extends Vue {
}
</script>

<style>
</style>


