<template>
  <div>
    <el-form-item>
      <el-upload class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon">
          <Plus />
        </el-icon>
      </el-upload>
    </el-form-item>
    <el-form ref="form" :model="sizeForm" label-width="auto">
      <el-form-item label="First name:">
        <el-input v-model="sizeForm.name" />
      </el-form-item>
      <el-form-item label="Last name:">
        <el-input v-model="sizeForm.name1" />
      </el-form-item>
      <el-form-item label="Birthdate:">
        <el-col :span="11">
          <el-date-picker v-model="sizeForm.date1" type="date" label="Pick a date" placeholder="Pick a date"
            style="width: 100%" />
        </el-col>
      </el-form-item>
      <el-form-item label="Activity form" prop="desc">
        <el-input v-model="sizeForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSend">Send</el-button>
      </el-form-item>
    </el-form>
    <!--{{ name }} -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watchEffect, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { name } from '../utils/test';
import { Plus } from '@element-plus/icons-vue';
import type { UploadProps } from 'element-plus';

const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  }
  return true
}
const router = useRouter();
const sizeForm = reactive({
  name: '',
  name1: '',
  date1: '',
  desc: '',
  previewImageUrl: '',
});

const onSend = () => {
  const data = {
    name: sizeForm.name,
    name1: sizeForm.name1,
    date1: sizeForm.date1,
    desc: sizeForm.desc
  };
  console.log(sizeForm.date1)
  router.push({ path: `/data/${encodeURIComponent(JSON.stringify(data))}` });
};


watch(sizeForm ,(newName, oldName) => {
  console.log('name changed:', newName, oldName);

});

watch(sizeForm ,(newName1, oldName1) => {
  console.log('name1 changed:', newName1, oldName1);

});
/* watchEffect(() => {
  console.log('sizeForm.name:', sizeForm.name);
  console.log('sizeForm.name1:', sizeForm.name1);
  console.log('sizeForm.date1' , sizeForm.date1);
  console.log('sizeForm.desc' , sizeForm.desc)
}); */


</script>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>