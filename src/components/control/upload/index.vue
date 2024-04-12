<template>
  <el-upload
    class="upload-demo"
    :action="config.action || '#'"
    :multiple="config.multiple"
    :limit="config.limit"
    :accept="config.accept"
    :data="config.data"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :before-upload="beforeAvatarUpload"
    list-type="picture-card"
    name="image"
  >
    <el-button v-if="model === 'button'" size="small" type="primary"
      >点击上传</el-button
    >
    <div v-if="model === 'card'" class="upload-wrap">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </div>
  </el-upload>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      fileListData: [],
      imageUrl: '111'
    }
  },
  computed: {
    model() {
      return this.config?.model
    }
  },
  watch: {

  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleSuccess(file, fileList) {
      let obj = {
        name: fileList.response.data.file_name,
        url: fileList.response.data.file_url
      }
      this.fileListData.push(obj)
      console.log(11111, this.fileListData);
    },
    beforeAvatarUpload(file) {
      // console.log(file);
      const isLtXM = file.size / 1024 / 1024 < this.config.fileSize;
      if (!isLtXM) {
        this.$message.error(`上传头像图片大小不能超过 ${this.config.fileSize}MB!`);
      }
      return isLtXM;
    },
    customRequest(data) {
      console.log('12312', data)
      //调后台上传接口
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-size: 28px;
  &:hover {
    border-color: #409eff;
  }
}
</style>