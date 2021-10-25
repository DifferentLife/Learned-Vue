import Vue from 'vue'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'


Vue.component('example-one', ExampleOne);
Vue.component('example-two', ExampleTwo);

new Vue ({
    el: '#jame',
    data: {

    }
});