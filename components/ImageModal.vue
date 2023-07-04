<template>
  <div v-if="isOpen" class="modal" @click="close">
    <div class="modal-content" @click.stop>
      <span class="close" @click="close">&times;</span>
      <img :src="imgSrc" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      imgSrc: "",
    };
  },
  methods: {
    open(src) {
      this.imgSrc = src;
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: content-fit;
  height: 90%;
  animation-name: animatetop;
  animation-duration: 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 20px;
}

.modal-content img {
  max-width: 45vh;
  height: auto;
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.close {
  color: white;
  align-self: flex-end;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (min-width:961px) {
  .modal-content img {
    max-width: 100vh;
  }
}
</style>
