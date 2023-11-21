<template>
  <div class="flex flex-col">
    <div>
      <h3 class="text-xl inline-block">Your tags list:</h3>
      <div class="text-xl inline-block ml-2" v-if="tags.length < 1">
        No tags
      </div>
      <div v-else>
        <small
          class="rounded-full bg-purple-500 text-white p-2 ml-2 first:ml-0"
          v-for="(tag, index) in tags"
          :key="index"
          >{{ tag.name }}
        </small>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-blue-500 font-semibold text-xl">Enter new tag</h3>
      <input
        v-model="tagName"
        type="text"
        class="border border-gray-600 rounded-md h-8 px-2"
      />
      <button
        @click="handleAddTag"
        class="ml-2 text-white bg-blue-400 px-2 py-1 rounded-md"
      >
        Add tag
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {useTags} from "@/stores/tags";

const tagName = ref("");

const tagsStore = useTags();
const tags = tagsStore.tags;

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; ++i) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (color === "#ffffff") generateRandomColor();
  return color;
};

const handleAddTag = () => {
  if (!tagName.value) return alert("Please enter tag name");

  tagsStore.addTag({
    id: Date.now(),
    name: tagName.value,
  });
  tagName.value = "";
};
</script>
