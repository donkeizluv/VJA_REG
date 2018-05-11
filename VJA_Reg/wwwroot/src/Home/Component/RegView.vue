<template id="regview">
    <div>
        <div class="row">
            <div class="col-md-8">
                <div v-bind:is="currentPage"></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <progress-bar v-bind:val="progressBarVal" v-bind:text="progressBarText" size="small" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <button v-on:click="prevPage"
                        class="btn btn-primary float-left"
                        v-bind:disabled="!canPrev">
                    Quay lại
                </button>
                <button v-on:click="nextPage"
                        class="btn btn-primary float-right"
                        v-bind:disabled="!canNext">
                    Tiếp tục
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import page_basic from './Page_Basic.vue'
    import page_basic2 from './Page_Basic2.vue'
    import progressBar from 'vue-simple-progress'

    export default {
        name: 'RegView',
        template: '#regview',
        components: {
            'progress-bar': progressBar,
            'page_basic': page_basic,
            'page_basic2': page_basic2
        },
        data: function () {
            return {
                pageArr: ['page_basic', 'page_basic2'],
                pageIndex: 0, //0 based
            }
        },
        computed: {
            progressBarVal: function () {
                return ((this.pageIndex + 1) / this.pageArr.length) * 100;
            },
            progressBarText: function () {
                return `Bước ${this.pageIndex + 1}/${this.pageArr.length}`
            },
            currentPage: function () {
                return this.pageArr[this.pageIndex];
            },
            canNext: function () {
                return this.pageIndex + 1 < this.pageArr.length;
            },
            canPrev: function () {
                return this.pageIndex > 0;
            }
        },
        methods: {
            nextPage: function () {
                if (this.pageIndex + 1 > this.pageArr.length)
                    return;
                this.pageIndex++;
            },
            prevPage: function () {
                if (this.pageIndex < 1)
                    return;
                this.pageIndex--;
            }
        }
    }
</script>
<style scoped>

</style>