import Vue from 'vue'
import List from './components/List'

new Vue ({
    el: '#jame',
    components: {
        List
    },
    data: {
        item: '',
        items: ['item1', 'item2'],
    },
    methods: {
        addItems: () => { //อาจจะใช้ ES6 ไม่ได้(arrow function)
            this.items.unshift(this.item);
            // this.items.push(this.item);
            this.item = '';
        }
    }
});