<template>
  <div class="inventories">
    <div class="inventory">
      <div class="inventory-up">
        <Inventory>
          <template #title>Окружение</template>
          <template #body>
            <InventoryDraggable
              group="weapon"
              :layout="weaponItems"
              :height="601"
            >
              <InventoryFrame
                v-for="item in weaponItems"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                :key="item.i"
                >item 1</InventoryFrame
              >
            </InventoryDraggable>
          </template>
        </Inventory>
      </div>
      <div class="inventory-down">
        <Inventory>
          <template #title>Оружие в руках</template>
          <template #body>
            <InventoryDraggable
              group="arms-weapon"
              :layout="armsWeaponItems"
              :height="171"
            >
              <InventoryFrame
                v-for="item in armsWeaponItems"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                :key="item.i"
                >item 1</InventoryFrame
              >
            </InventoryDraggable>
          </template>
        </Inventory>
      </div>
    </div>
    <div class="inventory">
      <div class="inventory-up">
        <Person :width="100" :height="601" />
      </div>
      <div class="inventory-down">
        <Inventory>
          <template #title>Быстрый доступ</template>
          <template #body>
            <InventoryDraggable
              group="fast-access"
              :layout="fastAccessItems"
              :height="108"
            >
              <InventoryFrame
                v-for="item in fastAccessItems"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                :key="item.i"
                >item 1</InventoryFrame
              >
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
              group="inventory"
              :layout="inventoryItems"
              :height="601"
            >
              <template #default>
                <InventoryFrame
                  v-for="item in inventoryItems"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i"
                  >item {{ item.i }}</InventoryFrame
                >
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
              group="wallet"
              :layout="walletItems"
              :height="171"
            >
              <InventoryFrame
                v-for="item in walletItems"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                :key="item.i"
                >item 1</InventoryFrame
              >
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
import InventoryFrame from "./InventoryFrame";
import Person from "./Person";

export default {
  components: {
    Inventory,
    InventoryDraggable,
    InventoryFrame,
    Person
  },

  data() {
    return {
      weaponItems: [
        { x: 0, y: 0, w: 2, h: 2, i: "0" },
        { x: 2, y: 0, w: 2, h: 4, i: "1" },
        { x: 4, y: 0, w: 2, h: 5, i: "2" },
        { x: 6, y: 0, w: 2, h: 3, i: "3" },
        { x: 8, y: 0, w: 2, h: 3, i: "4" },
        { x: 10, y: 0, w: 2, h: 3, i: "5" }
      ],
      armsWeaponItems: [
        { x: 0, y: 0, w: 2, h: 2, i: "0" },
        { x: 2, y: 0, w: 2, h: 4, i: "1" },
        { x: 4, y: 0, w: 2, h: 5, i: "2" },
        { x: 6, y: 0, w: 2, h: 3, i: "3" },
        { x: 8, y: 0, w: 2, h: 3, i: "4" },
        { x: 10, y: 0, w: 2, h: 3, i: "5" }
      ],
      fastAccessItems: [
        { x: 0, y: 0, w: 2, h: 2, i: "0" },
        { x: 2, y: 0, w: 2, h: 4, i: "1" },
        { x: 4, y: 0, w: 2, h: 5, i: "2" },
        { x: 6, y: 0, w: 2, h: 3, i: "3" },
        { x: 8, y: 0, w: 2, h: 3, i: "4" },
        { x: 10, y: 0, w: 2, h: 3, i: "5" }
      ],
      inventoryItems: [
        { x: 0, y: 0, w: 2, h: 2, i: "0" },
        { x: 2, y: 0, w: 2, h: 4, i: "1" },
        { x: 4, y: 0, w: 2, h: 5, i: "2" },
        { x: 6, y: 0, w: 2, h: 3, i: "3" },
        { x: 8, y: 0, w: 2, h: 3, i: "4" },
        { x: 10, y: 0, w: 2, h: 3, i: "5" }
      ],
      walletItems: [
        { x: 0, y: 0, w: 2, h: 2, i: "0" },
        { x: 2, y: 0, w: 2, h: 4, i: "1" },
        { x: 4, y: 0, w: 2, h: 5, i: "2" },
        { x: 6, y: 0, w: 2, h: 3, i: "3" },
        { x: 8, y: 0, w: 2, h: 3, i: "4" },
        { x: 10, y: 0, w: 2, h: 3, i: "5" }
      ]
    };
  },

  methods: {
    dragStart() {},
    drog() {}
  }
};
</script>

<style lang="scss" scoped>
.inventories {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.inventory {
  width: 400px;
  margin-right: 25px;

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
    background-color: rgba(#080808, 0.85);
    border-radius: 12px;
  }
}
</style>
