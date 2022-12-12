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
    <!--  -->
    <template #default="{ node, data }">
      <div class="custom-tree-node" slot-scope="{ node, data }">
        <div
          class="wt100"
          @click="strLength(node.label)"
          :title="strLength(node.label) > 28 ? node.label : ''"
        >
          {{ node.label }}
        </div>
      </div>
    </template>
  </el-tree>
  <input ref="input" />
  <button @click="key">click</button>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from "vue";
import { strLength } from "../../u/index";
interface Tree {
  id: number | string | null;
  label: string;
  children?: Tree[];
}
const data: Tree[] = [
  {
    id: "0",
    label: "哈哈哈",
    children: [
      {
        id: "1",
        label: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        children: [
          {
            id: "2",
            label: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          },
          {
            id: "3",
            label: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
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

let nodeKey = ref("");
const myTree: any = ref(null);
const input: any = ref(null);
function key() {
  nextTick(() => {
    myTree.value.setCurrentKey(nodeKey.value);
  });
  input.value.focus();
}
const handleNodeClick = (node: any) => {
  nodeKey = ref("3");
};
onMounted(() => {});
</script>

<style lang="less" scoped>
.el-tree {
  text-align: left;
}
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
    </template>
   -->
