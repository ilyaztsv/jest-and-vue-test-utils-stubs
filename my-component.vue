<template>
  <div class="component">
    <child-component></child-component>
  </div>
</template>

<script>
import ChildComponent from './child-component.vue';

export default {
  name: 'my-component',
  components: {
    'child-component': ChildComponent
  }
};
</script>

<style>
.component {
}
</style>
