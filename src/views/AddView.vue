<template>
  <main class="container w-2/3 mx-auto">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/3">
        <h1 class="font-bold text-3xl mb-6">Add contact</h1>
        <AddContact ref="addRef" />
      </div>
      <div class="pl-0 lg:pl-6 w-full lg:w-1/3 border-none mt-6 lg:ml-6 lg:mt-0 lg:border-l">
        <h1 class="font-bold text-3xl mb-6">Manage Tags</h1>
        <ManageTags />
      </div>
    </div>
    <div class="actions justify-between flex flex-row gap-6 w-full lg:w-1/3 mt-4 lg:ml-0">
      <button
        @click="handleAdd"
        class="h-8 text-center rounded-lg w-1/2 text-white bg-blue-400"
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
