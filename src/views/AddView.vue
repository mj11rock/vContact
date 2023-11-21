<template>
  <main class="container mx-auto">
    <div class="flex flex-row">
      <div class="w-1/3">
        <h1 class="font-bold text-3xl mb-6">Add contact</h1>
        <AddContact ref="addRef" />
      </div>
      <div class="ml-6 pl-6 border-l">
        <h1 class="font-bold text-3xl mb-6">Manage Tags</h1>
        <ManageTags />
      </div>
    </div>
    <div class="actions flex flex-row gap-6 w-1/3 mt-4 ml-4">
      <button
        @click="handleAdd"
        class="h-8 border text-center rounded-lg w-1/2 text-white bg-blue-400"
      >
        Save
      </button>
      <button
        class="h-8 border text-center rounded-lg w-1/2 bg-gray-400 text-white"
        @click="() => router.push('/')"
      >
        Back
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import {ref} from "vue";
import AddContact from "@/components/AddContact.vue";
import ManageTags from "@/components/ManageTags.vue";
import router from "@/router";

const addRef = ref(null);

const handleAdd = () => {
  if (addRef.value) {
    // @ts-ignore
    if (typeof addRef.value.submit === "function") {
      // @ts-ignore
      addRef.value.submit();
    }
    router.push("/");
  }
};
</script>
