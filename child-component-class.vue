<template>
  <div>ChildComponentClass</div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'child-component-class'
})
export default class ChildComponentClass extends Vue {
}
</script>

<style>
</style>


