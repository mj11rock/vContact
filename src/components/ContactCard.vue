<template>
  <div
    class="flex flex-row transition-all p-2 lg:p-5 text-left justify-between min-h-[60px] hover:bg-gray-300"
  >
    <div class="w-[15%] lg:w-[16%] truncate">
      <img
        :src="avatar"
        class="inline-block mr-1 h-8 w-8 rounded-full ring-2 ring-white"
        alt=""
      />
      <span class="hidden lg:inline-block">{{ fullName }}</span>
    </div>
    <div class="w-[15%] lg:w-[16%] truncate">
      {{ phone }}
    </div>
    <div class="w-[15%] lg:w-[16%] truncate">
      {{ email }}
    </div>
    <div class="w-[15%] lg:w-[16%] truncate">
      {{ tag === 0 ? "" : tagsList.find((item) => item.id === tag)?.name }}
    </div>
    <div class="actions  flex flex-row items-center text-white gap-5 w-[15%] lg:w-[16%]">
      <button @click="handleEdit" class="action-button truncate bg-blue-400">
        <img class="w-6 h-auto" src="../assets/edit.png" alt="">
      </button>
      <button @click="handleRemove" class="action-button truncate bg-red-400">
        <img class="w-6 h-auto" src="../assets/remove.png" alt="">
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useTags} from "@/stores/tags";
import {useContacts} from "@/stores/contacts";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  tag: {
    type: Number,
    required: false,
  },
});
const router = useRouter();
const tagsStore = useTags();
const contactsStore = useContacts();

const tagsList = tagsStore.tags;
const handleEdit = () => {
  router.push(`/edit/${props.id}`);
};
const handleRemove = () => {
  contactsStore.removeContact(props.id);
};
</script>
