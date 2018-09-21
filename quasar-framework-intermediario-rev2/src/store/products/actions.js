import axios from 'axios';

export function list (context) {
    axios.get('http://localhost:8765/api/products.json')
        .then((response) => {
            context.commit('setProducts', response.data.products || []);
            //context.commit('setProducts', '...'); //para debugar
        });
}
