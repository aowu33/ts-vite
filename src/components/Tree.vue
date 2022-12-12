<template>
  <el-input v-model="filterText" placeholder="Filter keyword" />

  <el-tree
    ref="treeRef"
    class="filter-tree"
    :data="treedata"
    :props="defaultProps"
    default-expand-all
    :filter-node-method="filterNode"
    empty-text="暂无内容"
    highlight-current="false"
    @node-click="nodeclick"
  />
  <button @click="nodeclick">nodeclick</button>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { ElTree } from "element-plus";

interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}

const filterText = ref("");
const treeRef = ref<InstanceType<typeof ElTree>>();

const defaultProps = {
  children: "children",
  label: "label",
};

watch(filterText, (val) => {
  treeRef.value!.filter(val);
});

const filterNode = (value: string, data: Tree) => {
  if (!value) return true;
  return data.label.includes(value);
};

const data: Tree[] = [
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 9,
            label: "Level three 1-1-1",
          },
          {
            id: 10,
            label: "Level three 1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 5,
        label: "Level two 2-1",
      },
      {
        id: 6,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },
];
const treedata: Tree[] = [
  {
    id: 1,
    label: "一级",
    children: [
      {
        id: 7,
        label: "二级哦",
        children: [
          {
            id: 10,
            label: "三级哦",
            children: [
              {
                id: 15,
                label: "四级哦",
              },
            ],
          },
        ],
      },
    ],
  },
];
let id: number = -1;
const tableData = [
  { id: 0, name: '77' },
  { id: 1, name: '52' },
  { id: 5, name: '50' },
  { id: 10, name: '41' },
];
const table:[] = [];

const nodeclick= (val, node) => {
  id = val.id;
  
//   for (let item in tableData) {
//     if (id = tableData[item].id) {
//        table.push(tableData[item])
//        console.log(tableData[item].id,id)
//     }
//   }
//   console.log("table",table)
};
</script>
<!-- <template>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Name" prop="name" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script lang="ts" setup>
  import { computed, ref } from 'vue'
  
  interface User {
    date: string
    name: string
    address: string
  }
  
  const search = ref('')
  const filterTableData = computed(() =>
    tableData.filter(
      (data) =>
        !search.value ||
        data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  const handleEdit = (index: number, row: User) => {
    console.log(index, row)
  }
  const handleDelete = (index: number, row: User) => {
    console.log(index, row)
  }
  
  const tableData: User[] = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'John',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Morgan',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Jessy',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  </script> -->
