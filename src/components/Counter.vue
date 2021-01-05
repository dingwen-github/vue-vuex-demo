<template>
    <div class="counter">
        <p>{{count}}------------> {{OddOrEven}}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfEven">+1 even</button>
        <button @click="incrementAsync">+1 async</button>
    </div>
</template>

<script>
    import {mapGetters,mapState,mapActions} from 'vuex'
    export default {
        name: "Counter",
        computed: {
            ...mapState(['count']),
            ...mapGetters(["OddOrEven"])
            // count(){
            //     return this.$store.state.count;
            // }
        },
        methods: {
            ...mapActions(['increment','decrement',"incrementIfEven","incrementAsync"])
            //
            // increment(){
            //     //异步
            //     this.$store.dispatch('increment');
            // },
            // decrement(){
            //     //同步
            //     this.$store.commit('DECREMENT');
            // }
        }
    }
</script>

<style scoped>

</style>
