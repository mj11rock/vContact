<template>
  <main class="container mx-auto">
    <div class="flex flex-row items-center">
      <h1 class="mb-5 text-3xl">Edit Contact</h1>
    </div>
    <div>
      <ContactsEdit ref="editRef" :id="id" />
    </div>
    <div
      class="actions flex flex-row items-center justify-between gap-6 w-1/3 mt-4"
    >
      <button
        @click="handleSave"
        class="h-8 border text-center rounded-lg w-1/2 bg-blue-200 text-black"
      >
        Save
      </button>
      <button
        class="h-8 border text-center rounded-lg w-1/2 bg-gray-200 text-black"
        @click="() => router.push('/')"
      >
        Back
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import ContactsEdit from "@/components/ContactsEdit.vue";

const router = useRouter();
const route = useRoute();

const {id} = route.params;
const editRef = ref(null);

const handleSave = () => {
  if (editRef.value) {
    // @ts-ignore
    if (typeof editRef.value.submit === "function") {
      // @ts-ignore
      editRef.value.submit();
    }
  }

  router.push("/");
};
</script>
