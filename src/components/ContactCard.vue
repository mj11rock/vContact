<template>
  <div class="flex flex-row transition-all hover:cursor-pointer text-left justify-between h-[60px] p-5 hover:bg-gray-300 active:bg-slate-200">
    <div class="w-full">
      <img
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=100"
        class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        alt=""
      />
      {{ fullName }}
    </div>
    <div class="w-full">
      {{ phone }}
    </div>
    <div class="w-full">
      {{ email }}
    </div>
    <div class="w-full">
      {{ tag }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
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
    type: String,
    required: false,
  },
});
</script>
