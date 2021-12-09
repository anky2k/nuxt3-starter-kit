import Vue from 'vue'
import { getSampleData  } from '~/sources/test';

const withComponentState = (component, fetchedData) => {
    const inheritedProps = component.props || [];

    return Vue.component('withComponentState', {
        render(createElement) {
            return createElement(component, {
                props: {
                    ...inheritedProps,
                    data: this.fetchedData,
                    fetchState: this.fetchState
                }
            })
        },
        data() {
            return {
                fetchedData: [1],
                fetchState: 'pending'
            }
        },        
        async mounted() {
          this.fetchedData = await getSampleData()          
          this.fetchState = 'success'
        }
    })
}

export default withComponentState
