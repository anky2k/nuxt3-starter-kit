import Vue from 'vue'
import { getSampleData  } from '~/sources/test';

const withSubscription = (component, selectData) => {
    const inheritedProps = component.props || [];

    return Vue.component('withSubscription', {
        render(createElement) {
            return createElement(component, {
                props: {
                    ...inheritedProps,
                    data: this.fetchedData
                }
            })
        },
        data() {
            return {
                fetchedData: null
            }
        },        
        async mounted() {
          this.fetchedData = await getSampleData()          
        }
    })
}

export default withSubscription
