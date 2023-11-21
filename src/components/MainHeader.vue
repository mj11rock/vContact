<template>
  <header
    class="container relative mx-auto m-5 w-[90vw] flex justify-center text-center h-[80px]"
  >
    <div class="container">
      <input
        class="mx-auto border active:border-blue-400 focus:border-blue-400 w-2/3 px-4 outline-none h-12 rounded-md"
        type="search"
        placeholder="search"
        @focus="handleFocusIn"
        @focusout="handleFocusOut"
        v-model="searchString"
      />
    </div>
    <div
      v-if="searchResults.length && focused"
      :style="`bottom: -${culaculateHeight()}px`"
      class="absolute border w-2/3 h-fit z-10 shadow-lg container mx-auto bg-white"
    >
      <ContactCard
        v-for="item in searchResults"
        :key="item.id"
        :id="item.id"
        :avatar="item.avatar"
        :full-name="item.name"
        :email="item.email"
        :phone="item.phone"
        :tag="item.tag"
        @click="focused = false"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {debounce} from "@/utils/debounce";
import {useContacts} from "@/stores/contacts";
import type {IContact} from "@/types";
import ContactCard from "@/components/ContactCard.vue";

const {searchContacts} = useContacts();

const searchString = ref("");
const searchResults = ref<IContact[]>([]);
const focused = ref(false);

const handleSearch = () => {
  const foundList = searchContacts(searchString.value);
  searchResults.value = foundList;
};

const handleFocusIn = () => {
  focused.value = true;
  if (searchResults.value.length) {
    handleSearch();
  }
};
const handleFocusOut = (e: FocusEvent) => {
  if (e.relatedTarget === null) {
    focused.value = false;
  }
};
const culaculateHeight = () => {
  if (!searchResults.value.length) return;

  let result = 1;
  if (searchResults.value.length === 1) {
    return 30;
  }
  if (searchResults.value.length % 2 === 0) {
    result = (searchResults.value.length % 2) + 3;
  } else {
    result = searchResults.value.length + 2;
  }
  return result * 30;
};

watch(searchString, debounce(handleSearch, 500));
</script>
