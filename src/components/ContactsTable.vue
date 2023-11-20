<template>
  <div class="">
    <div
      class="flex flex-row justify-between text-left items-center gap-4 border-b"
    >
      <div class="w-full">Full name</div>
      <div class="w-full">Phone</div>
      <div class="w-full">Email</div>
      <div class="w-full">Tag</div>
    </div>
    <div class="">
      <ContactCard
        v-for="(item, index) in dummyData"
        :key="index"
        :full-name="item.name"
        :email="item.email"
        :phone="item.phone"
        :tag="item.tag"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import ContactCard from "./ContactCard.vue";
const dummyData = [
  {
    id: 1,
    name: "John Doe",
    phone: "08123456789",
    email: "test@gmail.com",
    tag: "friends",
  },
  {
    id: 2,
    name: "John Doe 2",
    phone: "08123456789",
    email: "test@gmail.com",
    tag: "family",
  },
];
</script>
