<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    highlight-current
    @node-click="handleNodeClick"
    ref="myTree"
    node-key="id"
    default-expand-all
  >
    <template #default="{ node, data }">
      <div class="custom-tree-node" slot-scope="{ node, data }">
        <div class="wt100" :title="node.label">{{ node.label }}</div>
      </div>
    </template>
  </el-tree>
  <input ref="input"/>
  <button @click="key">click</button>
</template>

<script lang="ts" setup>
import {ref,nextTick,onMounted} from 'vue';
interface Tree {
    id: number|string|null
  label: string;
  children?: Tree[];
}
const data: Tree[] = [
  {
    id:'0',
    label: "哈哈哈",
    children: [
      {
        id:'0',
        label: "哈哈哈哈哈哈哈哈哈哈",
        children: [
          {
            id:'0',
            label: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          },
        ],
      },
    ],
  },
];
const defaultProps = {
  children: "children",
  label: "label",
};
const handleNodeClick = (node:any) => {
  nodeKey = ref(node.id)
};
let nodeKey = ref('');
const myTree:any = ref(null)
const input:any = ref(null)
function key() {
    myTree.value.setCurrentKey('2')
    input.value.focus()
}

onMounted(() => {
    
})
</script>

<style>
.wt100 {
  width: 200px !important;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<!-- 
    <template #default="{ node }">     
        <div class = "custom-tree-node" >
          <div class="wt100" :title="node.label">{{ node.label }}</div>
        </div>
   -->
