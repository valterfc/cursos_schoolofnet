<template>
  <q-page padding>
    <hello/>
  </q-page>
</template>

<script>
import Hello from '../components/hello';

export default {
  // name: 'PageName',
  components: {
    'hello': Hello
  },
  mounted(){
    //console.log(this.$axios.get('http://www.schoolofnet.com')); //este dá erro por causa do site
    console.log(this.erik);
  }
}
</script>

<style>
</style>
