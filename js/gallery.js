const gallery = Vue.createApp({
  data() {
    return {
      images: [
        "images/img1.jpg",
        "images/img2.jpg",
        "images/img3.jpg"
      ]
    }
  }
});

gallery.mount('#gallery');
