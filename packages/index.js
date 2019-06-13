import Crud from './crud/index.js';
const components = [
    Crud
];

function install(Vue, axios) {
    Vue.prototype.$http = axios;
	const AVUE = {};
    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$AVUE = AVUE;
}

if (window.Vue) {
    install(window.Vue, window.axios);
}

export default install;
