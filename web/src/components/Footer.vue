<template>
  <div class="bottom-fixed text-center hidden">
    <div class="tel">
      <a href="tel:0487883286">
        <i class="fas fa-phone"></i>
      </a>
      <p>TEL</p>
    </div>
    <div class="access">
      <a href="#access">
        <i class="fas fa-map-marker-alt"></i>
      </a>
      <p>ACCESS</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bottom-fixed {
  background: linear-gradient(to bottom, transparent, #000 40%);
  width: 100%;
  height: 75px;
  z-index: 10;
  bottom: 0px;
  position: fixed;
  /* border: 1px white solid; */
}

.tel,
.access {
  position: absolute;
  padding: 20px 0;
  height: 100%;
  width: 50%;
  top: 0;
  font-size: 16px;
}
.tel i,
.access i {
  font-size: 20px;
  color: #fff;
}
.tel {
  left: 0;
}
.access {
  right: 0;
}

@media screen and (min-width: 768px) {
  .bottom-fixed {
    background: none;
    width: 100%;
    height: 95px;
    z-index: 10;
    top: 0px;
  }
  .tel,
  .access {
    position: absolute;
    padding: 20px 0;
    width: 20%;
    height: 100%;
    width: 20%;
    top: 0;
    font-size: 14px;
  }
  .tel {
    left: auto;
    right: 20%;
    padding: 20px 0 30px;
    width: 20%;
  }
  .access {
    left: auto;
    right: 0;
    padding: 20px 0 30px;
    width: 20%;
  }

  .tel i,
  .access i {
    font-size: 20px;
    color: #fff;
  }
}
</style>