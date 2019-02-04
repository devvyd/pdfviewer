Vue.component("pdf", {
    template: `
        <div class="col-md-3">
            <div class="card">
                <img src="//placehold.it/200x150" alt="PDF" class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">Guess this should be title here...</p>
                </div>
            </div>
        </div>
    `,

    props: [],

    data: () => {
    return {};
    }
});

Vue.component("pdf-grid", {
    template: `
        <div>
            <div class="alert alert-info" v-if="false">
                For now, there are no PDF documents available.
            </div>
            <div class="row">
                <pdf></pdf>
            </div>
        </div>
    `,
    props: [],

    data: () => {
    return {};
    }
});

const app = new Vue({
    el: ".container",
    components: {},
    data: {},

    methods: {}
});
