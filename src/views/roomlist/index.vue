<template>
  <div class="pull-auto room-list">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in tablist" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    activeName: {
      get: function() {
        return this.$store.state.room.roomCurrent;
      },
      set: function(newValue) {
        this.$store.state.room.roomCurrent = newValue;
      }
    },
    ...mapState({
      tablist: state => state.room.tablist
    })
  },
  components: {},
  methods: {
    handleClick(tab, event) {
			this.$store.commit('ORDER_CURRENT',tab.name)
    }
  }
};
</script>

<style>
</style>
