<template>
  <div>
    <div class="drag">
      {{ list1 }}<br /><br />
      {{ list2 }}
      <draggable v-model="list1" class="left" :options="options1">
        <transition-group>
          <div v-for="(element, index) in list1" :key="index">
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
      <draggable v-model="list2" class="right" :options="options2">
        <transition-group>
          <div v-for="(element, index) in list2" :key="index">
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: "draggableInit",
  components: {
    draggable,
  },
  data() {
    return {
      list1: [{
        name: 'item1',
        id: 1
      }, {
        name: 'item2',
        id: 2
      }, {
        name: 'item3',
        id: 3
      }, {
        name: 'item4',
        id: 4
      },],
      list2: [{
        name: 'vue',
        id: 1
      }, {
        name: 'react',
        id: 2
      }, {
        name: 'js',
        id: 3
      }, {
        name: 'ts',
        id: 4
      },],
      options1: {
        group: {
          name: 'people',
          pull: false,
        }
      },
      options2: {
        group: {
          name: 'people',
          pull: 'clone',
          sort: true
        }
      }
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.drag {
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    width: 50%;
  }
}
</style>