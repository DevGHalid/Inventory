<template>
  <div class="person">
    <div class="person-content" :style="`height: ${height}px`">
      <div class="person-img">
        <slot name="body" :props="{ personItems }"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number
    }
  },
  data() {
    return {
      personItems: {
        slug: "person-img",
        items: [
          {
            slug: "person-braslet",
            img: "braslet.png",
            item: null
          },
          {
            slug: "person-hat",
            img: "hat.png",
            item: null
          },
          {
            slug: "person-ochki",
            img: "ochki.png",
            item: null
          },
          {
            slug: "person-cepi",
            img: "cepi.png",
            item: null
          },
          {
            slug: "person-jacket",
            img: "jacket.png",
            item: null
          },
          {
            slug: "person-futbolka",
            img: "futbolka.png",
            item: null
          },
          {
            slug: "person-shorts",
            img: "shorts.png",
            item: null
          },
          {
            slug: "person-foot",
            img: "foot.png",
            item: null
          },
          {
            slug: "person-time",
            img: "time.png",
            item: null
          },
          {
            slug: "person-bronee",
            img: "bronee.png",
            item: null
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.person {
  &-content {
    position: relative;
    margin-top: 70px;
    margin-bottom: 40px;
  }

  &-img {
    background-image: url(../assets/boy.png);
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: relative;
  }

  &-circle {
    height: 60px;
    width: 60px;
    background-color: rgba(#fff, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.2s;
    cursor: pointer;
    position: absolute;
  }

  &-circle.active {
    background-color: rgba(#d03231, 0.45);

    .person-inner-circle {
      background-color: #d03231;
    }
  }

  &-inner-circle {
    background-color: rgba(#fff, 0.45);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-hat {
    left: 41%;
    top: -45px;
  }

  &-ochki {
    left: 41%;
    top: 17px;
  }

  &-cepi {
    left: 41%;
    top: 85px;
  }

  &-braslet {
    left: 18%;
    top: 273px;
  }

  &-jacket {
    left: 31%;
    top: 145px;
  }

  &-futbolka {
    left: 51%;
    top: 145px;
  }

  &-shorts {
    left: 41%;
    top: 355px;
  }

  &-time {
    left: 68%;
    top: 285px;
  }

  &-bronee {
    left: 40%;
    top: 225px;
  }

  &-foot {
    left: 41%;
    top: 500px;
  }
}
</style>
