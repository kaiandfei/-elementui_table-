<template>
  <div>
    <video class="video" ref="videoElement" autoplay></video>
    <button class="button" @click="toggleCamera">
      {{ cameraActive ? "关闭摄像头" : "打开摄像头" }}
    </button>
    <button class="button" @click="toggleRecording">
      {{ recording ? "停止录制" : "开始录制" }}
    </button>
    <button class="button" @click="downloadVideo">下载视频</button>

    <video
      :src="recordedVideoUrl"
      v-if="recordedVideoUrl"
      autoplay
      controls
    ></video>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cameraActive: false,
      recording: false,
      recordedVideoUrl: '',
      stream: null,
      videoElement: null,
      mediaRecorder: null,
      chunks: [],
    };
  },
  mounted() {
    this.videoElement = this.$refs.videoElement;
  },
  methods: {
    toggleCamera() {
      if (!this.cameraActive) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            this.stream = stream;
            this.videoElement.srcObject = stream;
            this.cameraActive = true;
          })
          .catch((error) => {
            console.error('无法打开摄像头:', error);
          });
      } else {
        this.videoElement.srcObject = null;
        this.stream.getTracks().forEach((track) => {
          track.stop();
        });
        this.cameraActive = false;
      }
    },
    toggleRecording() {
      if (!this.recording) {
        this.startRecording();
      } else {
        this.stopRecording();
      }
    },
    startRecording() {
      if (MediaRecorder.isTypeSupported('video/webm')) {
        this.chunks = [];
        this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: 'video/webm' });
        this.mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            this.chunks.push(e.data);
          }
        };
        this.mediaRecorder.onstop = () => {
          const recordedBlob = new Blob(this.chunks, { type: 'video/webm' });
          this.chunks = [];
          this.recordedVideoUrl = URL.createObjectURL(recordedBlob);
          console.log(1212,this.recordedVideoUrl);
        };
        this.mediaRecorder.start();
        this.recording = true;
      } else {
        console.error('不支持录制视频');
      }
    },
    stopRecording() {
      if (this.recording) {
        this.mediaRecorder.stop();
        this.mediaRecorder = null;
        this.recording = false;
      }
    },
    downloadVideo() {
      if (this.recordedVideoUrl) {
        const a = document.createElement('a');
        a.href = this.recordedVideoUrl;
        a.download = 'recorded_video.webm';
        a.click();
      }
    },
  }
};
</script>


