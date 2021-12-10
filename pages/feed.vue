<template>
  <div>
    <Tray 
        :items=items
    />
    <div v-if="show">
        <AsyncComponent />
    </div>  
  </div>
</template>

<script>

import Tray from '../components/tray'
import AsyncComponent from '../components/async-example/async'

export default {
    name: 'Feed',
    components: {
        Tray,
        AsyncComponent
    },  
    mounted() {
        setTimeout(() => this.show = true, 1000)
    },
    data() {
        return {
        show: false,
        items: [
            {
                id: '1',
                name: 'Movie',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/689/okop108.jpg"
            },
            {
                id: '2',
                name: 'Show',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/189/tr509.jpg"
            },
            {
                id: '3',
                name: 'Music',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/786/837/tms611.jpg"
            },
            {
                id: '4',
                name: 'News',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg"
            },
            {
                id: '5',
                name: 'Sports',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg?fit=inside%7C278:156"
            },
            {
                id: '6',
                name: 'Food',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/189/tr509.jpg"
            },
            {
                id: '2',
                name: 'Show',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/786/837/tms611.jpg"
            },
            {
                id: '3',
                name: 'Music',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg?fit=inside%7C278:156"
            },
            {
                id: '4',
                name: 'News',
                url: "https://abcd.photos/seed/c/1200/900"
            },
        ]
        }
  }
}
</script>