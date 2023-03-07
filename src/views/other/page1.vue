<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="ruleForm.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity count" prop="count">
      <el-select-v2
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="Activity time" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="ruleForm.date2"
            label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="Activity type" prop="type">
      <!-- <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group> -->
      <!-- <span @blur="Bmodel" style="background:plum;width: 120px;opacity: .5;">cs</span> -->
      <el-upload
        class="avatar-uploader"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        v-model="ruleForm.type"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        <div>
          <div class="imgBox">
            <span>图片</span>
          </div>
          <div style="font-size: 12px; width: 100%">
            只能上传一张JPG／JPEG／PNG，且不超500KB
          </div>
        </div>
      </el-upload>
    </el-form-item>
    <el-form-item label="Resources" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
  <div style="width: 500px; height: 200px; margin-bottom: 200px">
    <el-carousel pause-on-hover type="card">
      <el-carousel-item v-for="item in carousel" :key="item">
        <div>
          <h6>{{ item.name }}</h6>
          <el-button>{{ item.card }}</el-button>
          <p>{{ item.card }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div style="margin-bottom: 200px">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item :name="item.name" v-for="item in carousel" :key="item">
        <template #title>
          <div style="font-size: 25px">{{ item.name }}</div>
          <!-- <el-icon class="header-icon">
            <info-filled />
            
          </el-icon> -->
          <span style="color: red">已停用</span>
          <div style="color: #666; margin-left: 30px">
            模板说明： {{ item.card }}
          </div>
        </template>
        <hr />
        <div>业务类型：住中服务——打扫</div>
        <div>修改时间：2023-03-07 16:09:23</div>
        <div>
          服务内容：<span
            class="spanText"
            v-for="(i, v) in item.content"
            :key="v"
          >
            {{ v + 1 }}、{{ i }}
          </span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules, UploadProps } from "element-plus";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));

function Bmodel() {
  // ruleForm.type = '1'
}

// img

const imageUrl = ref("");
const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};

// 走马灯
const carousel = [
  {
    name: "模板名称101057",
    card: "card1",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
      "的VS的v反腐败v的发表",
      "的VS的v反腐败v的发表",
      "的VS的v反腐败v的发表",
      "的VS的v反腐败v的发表",
      "的VS的v反腐败v的发表",
      "的VS的v反腐败v的发表",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称925108",
    card: "card2",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称855875",
    card: "card3",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称782747",
    card: "card4",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称901057",
    card: "card1",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称*25108",
    card: "card2",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称/55875",
    card: "card3",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称382747",
    card: "card4",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称.55875",
    card: "card3",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
  {
    name: "模板名称。82747",
    card: "card4",
    content: [
      "好难过好难过能否发给你发个",
      "dfvfdfvdfv",
      "的VS的v反腐败v的发表",
    ],
  },
];

// 折叠面板
const activeNames = ref(["name1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};
</script>
<style lang="less" scoped>
.imgBox {
  width: 65px;
  height: 50px;
  border: #e0e0e0 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    background-color: #ecf5ff;

    span {
      background-color: #ecf5ff;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 84px;
    height: 1px;
    position: absolute;
    top: 50%;
    left: -15%;
    transform: rotate(38deg);
    background-color: #e0e0e0;
  }

  &::before {
    content: "";
    display: block;
    width: 84px;
    height: 1px;
    position: absolute;
    top: 50%;
    right: -15%;
    transform: rotate(-38deg);
    background-color: #e0e0e0;
  }

  & span {
    width: 25px;
    height: 15px;
    line-height: 15px;
    display: block;
    font-size: 12px;
    z-index: 10;
    background-color: #ffffff;
  }

  & img {
    width: 65px;
    height: 50px;
  }
}

// 走马灯
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
// 折叠面板
.el-collapse-item {
  text-align: left;
}
.spanText {
  width: 200px;
  margin-right: 20px;
  // background-color: #ccc;
  // opacity: .5;
}
</style>
