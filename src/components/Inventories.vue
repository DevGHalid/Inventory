<template>
  <div class="inventories">
    <div class="inventory">
      <div class="inventory-up">
        <Inventory>
          <template #title>Окружение</template>
          <template #body>
            <InventoryDraggable
              :groupName="environment.name"
              :lists="environment.items"
              :cols="environment.cols"
              :height="environmentHeight"
            >
              <InventoryDraggableFrame
                :height="environment.frame.height"
                v-for="(item, index) in environment.items"
                :index="index"
                :key="index"
                :draggable="!!item"
                @dragstart="dragStart"
                @drop="drop"
              >{{ item && 'item ' + item.id }}</InventoryDraggableFrame>
            </InventoryDraggable>
          </template>
        </Inventory>
      </div>
      <div class="inventory-down">
        <Inventory>
          <template #title>Оружие в руках</template>
          <template #body>
            <InventoryDraggable
              :groupName="armsWeapon.name"
              :lists="armsWeapon.items"
              :cols="armsWeapon.cols"
              :height="armsWeaponHeight"
            >
              <InventoryDraggableArmsWeapon :index="0" @dragstart="dragStart" @drop="drop">
                <img src="../assets/weapon.png" v-if="armsWeapon.items[0]" />
                <span v-else>Пусто</span>
              </InventoryDraggableArmsWeapon>
            </InventoryDraggable>
          </template>
        </Inventory>
      </div>
    </div>
    <div class="inventory">
      <div class="inventory-up">
        <Person :height="personHeight">
          <template #body>
            <PersonDraggable
              v-for="(item, index) in person.items"
              :key="index"
              :lists="item.items"
              :groupName="person.name"
              :className="`person-draggable-item ${item.name}`"
            >
              <PersonItem
                :draggable="!!item.items[0]"
                :index="0"
                @dragstart="dragStart"
                @drop="drop"
              >
                <img :src="require(`@/assets/${item.img}`)" />
              </PersonItem>
            </PersonDraggable>
          </template>
        </Person>
      </div>
      <div class="inventory-down">
        <Inventory>
          <template #title>Быстрый доступ</template>
          <template #body>
            <InventoryDraggable
              :groupName="fastAccess.name"
              :lists="fastAccess.items"
              :cols="fastAccess.cols"
              :height="fastAccessHeight"
            >
              <InventoryDraggableFrame
                :height="fastAccess.frame.height"
                v-for="(item, index) in fastAccess.items"
                :index="index"
                :key="index"
                :draggable="false"
                @dragstart="dragStart"
                @drop="dropFastAccess"
              >{{ item && 'item ' + item.id }}</InventoryDraggableFrame>
            </InventoryDraggable>
          </template>
        </Inventory>
      </div>
    </div>
    <div class="inventory">
      <div class="inventory-up">
        <Inventory>
          <template #title>Инвентарь</template>
          <template #body>
            <InventoryDraggable
              :groupName="inventory.name"
              :lists="inventory.items"
              :cols="inventory.cols"
              :height="inventaryHeight"
            >
              <template #default>
                <InventoryDraggableFrame
                  :height="inventory.frame.height"
                  v-for="(item, index) in inventory.items"
                  :index="index"
                  :key="index"
                  :draggable="!!item"
                  @dragstart="dragStart"
                  @drop="drop"
                >{{ item && 'item ' + item.id }}</InventoryDraggableFrame>
              </template>
            </InventoryDraggable>
          </template>
        </Inventory>
      </div>
      <div class="inventory-down">
        <Inventory>
          <template #title>Бумажник</template>
          <template #body>
            <InventoryDraggable
              :groupName="wallet.name"
              :lists="wallet.items"
              :cols="wallet.cols"
              :height="walletHeight"
            >
              <InventoryDraggableFrame
                :height="wallet.frame.height"
                v-for="(item, index) in wallet.items"
                :index="index"
                :key="index"
                :draggable="!!item"
                @dragstart="dragStart"
                @drop="drop"
              >{{ item && 'item ' + item.id }}</InventoryDraggableFrame>
            </InventoryDraggable>
          </template>
        </Inventory>
      </div>
    </div>
  </div>
</template>

<script>
import Inventory from "./Inventory";
import InventoryDraggable from "./InventoryDraggable";
import InventoryDraggableFrame from "./InventoryDraggableFrame";
import InventoryDraggableArmsWeapon from "./InventoryDraggableArmsWeapon";
import Person from "./Person";
import PersonDraggable from "./PersonDraggable";
import PersonItem from "./PersonItem";

import generateItems from "../helpers/generateItems";

let fromOptions = null;

export default {
  components: {
    Inventory,
    InventoryDraggable,
    InventoryDraggableFrame,
    InventoryDraggableArmsWeapon,

    Person,
    PersonDraggable,
    PersonItem
  },

  data() {
    return {
      environment: {
        name: "environment",
        cols: 5,
        frame: {
          height: 85
        },
        items: generateItems([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }], 40)
      },
      armsWeapon: {
        name: "arms-weapon",
        cols: 1,
        frame: {
          height: 86
        },
        items: []
      },
      fastAccess: {
        name: "fast-access",
        cols: 4,
        frame: {
          height: 105
        },
        items: generateItems([], 4)
      },
      inventory: {
        name: "inventory",
        cols: 5,
        frame: {
          height: 85
        },
        items: generateItems([{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }], 40)
      },
      wallet: {
        name: "wallet",
        cols: 5,
        frame: {
          height: 85
        },
        items: generateItems([], 10)
      },
      weapon: {
        name: "weapon",
        cols: 1,
        items: []
      },

      person: {
        name: "person",
        items: [
          {
            name: "person-braslet",
            img: "braslet.png",
            items: []
          },
          {
            name: "person-hat",
            img: "hat.png",
            items: []
          },
          {
            name: "person-ochki",
            img: "ochki.png",
            items: []
          },
          {
            name: "person-cepi",
            img: "cepi.png",
            items: []
          },
          {
            name: "person-jacket",
            img: "jacket.png",
            items: []
          },
          {
            name: "person-futbolka",
            img: "futbolka.png",
            items: []
          },
          {
            name: "person-shorts",
            img: "shorts.png",
            items: []
          },
          {
            name: "person-foot",
            img: "foot.png",
            items: []
          },
          {
            name: "person-time",
            img: "time.png",
            items: []
          },
          {
            name: "person-bronee",
            img: "bronee.png",
            items: []
          }
        ]
      }
    };
  },

  computed: {
    environmentHeight() {
      // height * rows + border
      return this.environment.frame.height * 7;
    },

    armsWeaponHeight() {
      return this.walletHeight;
    },

    personHeight() {
      return 600;
    },

    fastAccessHeight() {
      // height * rows + border
      return this.fastAccess.frame.height * 1;
    },

    walletHeight() {
      // height * rows + border
      return this.wallet.frame.height * 2;
    },

    weaponHeight() {
      return this.walletHeight;
    },

    inventaryHeight() {
      // height * rows + border
      return this.environmentHeight;
    }
  },

  methods: {
    dragStart(options) {
      fromOptions = options;
    },

    // Быстрый доступ
    dropFastAccess(toOptions) {
      if (!fromOptions || !toOptions || fromOptions.groupName !== "inventory")
        return;

      const { lists: fromLists, index: fromIndex } = fromOptions;
      const { lists: toLists, index: toIndex } = toOptions;

      const fromList = fromLists[fromIndex];

      // does not exist the item
      if (toLists.every(list => list !== fromList)) {
        toLists.splice(toIndex, 1, fromLists[fromIndex]);
      }

      fromOptions = null;
    },

    // Инвентарь
    drop(toOptions) {
      if (!fromOptions || !toOptions) return;

      const {
        groupName: fromGroupName,
        lists: fromLists,
        index: fromIndex
      } = fromOptions;
      const { lists: toLists, index: toIndex } = toOptions;

      // if the frame is empty
      if (!toLists[toIndex]) {
        let fromList;

        if (fromGroupName === "person" || fromGroupName === "weapon") {
          fromList = fromLists.splice(fromIndex, 1)[0];
        } else {
          fromList = fromLists.splice(fromIndex, 1, undefined)[0];
        }

        toLists.splice(toIndex, 1, fromList);
      }

      fromOptions = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.inventories {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: flex-start;
}

.inventory {
  width: 480px;
  margin-right: 25px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  &:last-child {
    margin-right: 0;
  }

  &-up {
    margin-bottom: 20px;
  }

  &-up,
  &-down {
    width: 100%;
    height: 100%;
    background-color: rgba(#080808, 0.86);
    border-radius: 12px;
  }
}
</style>

<style lang="scss">
.person {
  &-draggable-item {
    position: absolute;
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