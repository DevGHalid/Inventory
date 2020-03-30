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
              <InventoryDraggableItem
                :height="environment.frame.height"
                v-for="(item, index) in environment.items"
                :index="index"
                :key="index"
                :draggable="!!item"
                @dragstart="dragStart"
                @drop="drop"
              >{{ item && 'item ' + item.id }}</InventoryDraggableItem>
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
              :cols="environment.cols"
              :height="weaponHeight"
            >
              <InventoryDraggableItem
                v-for="(item, index) in armsWeapon.items"
                :index="index"
                :key="index"
                :draggable="!!item"
                @dragstart="dragStart"
                @drop="drop"
              ></InventoryDraggableItem>
            </InventoryDraggable>
          </template>
        </Inventory>
      </div>
    </div>
    <div class="inventory">
      <div class="inventory-up">
        <Person :height="personHeight">
          <template #body="{ props }">
            <div
              class="person-circle"
              v-for="personItem in props.personItems.items"
              :draggable="personItem.item"
              :class="personItem.slug"
              :key="personItem.slug"
              @dragstart="dragStart"
            >
              <div class="person-inner-circle">
                <img :src="require(`@/assets/${personItem.img}`)" />
              </div>
            </div>
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
              <InventoryDraggableItem
                :height="fastAccess.frame.height"
                v-for="(item, index) in fastAccess.items"
                :index="index"
                :key="index"
                :draggable="false"
                @dragstart="dragStart"
                @drop="dropFastAccess"
              >{{ item && 'item ' + item.id }}</InventoryDraggableItem>
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
                <InventoryDraggableItem
                  :height="inventory.frame.height"
                  v-for="(item, index) in inventory.items"
                  :index="index"
                  :key="index"
                  :draggable="!!item"
                  @dragstart="dragStart"
                  @drop="dropInventary"
                >{{ item && 'item ' + item.id }}</InventoryDraggableItem>
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
              <InventoryDraggableItem
                :height="wallet.frame.height"
                v-for="(item, index) in wallet.items"
                :index="index"
                :key="index"
                :draggable="!!item"
                @dragstart="dragStart"
                @drop="dropWallet"
              >{{ item && 'item ' + item.id }}</InventoryDraggableItem>
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
import InventoryDraggableItem from "./InventoryDraggableItem";
import Person from "./Person";

import generateItems from "../helpers/generateItems";

let fromOptions = null;

export default {
  components: {
    Inventory,
    InventoryDraggable,
    InventoryDraggableItem,
    Person
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
        items: generateItems([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }], 40)
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
        frame: {
          height: 85
        },
        items: [undefined]
      }
    };
  },

  computed: {
    environmentHeight() {
      // height * rows + border
      return this.environment.frame.height * 7;
    },

    inventaryHeight() {
      // height * rows + border
      return this.environmentHeight;
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

    personHeight() {
      return 600;
    }
  },

  methods: {
    dragStart(options) {
      fromOptions = options;
    },

    // Инвентарь
    dropInventary(toOptions) {
      if (!fromOptions || !toOptions) return;

      const { lists: fromLists, index: fromIndex } = fromOptions;
      const { lists: toLists, index: toIndex } = toOptions;

      const fromList = fromLists.splice(fromIndex, 1, undefined)[0];

      toLists.splice(toIndex, 1, fromList);

      fromOptions = null;
    },

    // Быстрый доступ
    dropFastAccess(toOptions) {
      if (!fromOptions || !toOptions) return;

      const { lists: fromLists, index: fromIndex } = fromOptions;
      const { lists: toLists, index: toIndex } = toOptions;

      const fromList = fromLists[fromIndex];

      // does not exist the item
      if (toLists.every(list => list !== fromList)) {
        toLists.splice(toIndex, 1, fromLists[fromIndex]);
      }

      fromOptions = null;
    },

    // Бумажник
    drop(toOptions) {
      if (!fromOptions || !toOptions) return;

      const { lists: fromLists, index: fromIndex } = fromOptions;
      const { lists: toLists, index: toIndex } = toOptions;

      toLists.splice(toIndex, 1, fromLists[fromIndex]);

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
