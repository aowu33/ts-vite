<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" default-expand-all>
      <template #default="{ node, data }">     
        <div class = "custom-tree-node" slot-scope = "{ node, data }">
          <div class="wt100" :title="node.label">{{ node.label }}</div>
        </div>
      </template>
    </el-tree>
  </template>
  
  <script lang="ts" setup>
  interface Tree {
    label: string
    children?: Tree[]
  }
  const data: Tree[] = [
    {
      label: '哈哈哈',
      children: [
        {
          label: '哈哈哈哈哈哈哈哈哈哈',
          children: [
            {
              label: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            }
          ]
        }
      ]
    }
  ]
  const defaultProps = {
    children: 'children',
    label: 'label'
  }
  const handleNodeClick = (data: Tree) => {
    console.log(data)
  }
  
  </script>
  
  <style>
  .wt100{
    width: 200px !important;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
  </style>