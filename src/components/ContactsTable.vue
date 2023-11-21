<template>
  <div class="">
    <div
      class="flex flex-row justify-between text-left items-center gap-0 lg:gap-4 border-b"
    >
      <div class="w-[15%] lg:w-[16%]" v-for="(item, index) in HEADERS" :key="index">
        {{ item }}
      </div>
    </div>
    <div>
      <ContactCard
        v-for="item in contactsList"
        :key="item.id"
        :id="item.id"
        :avatar="item.avatar"
        :full-name="item.name"
        :email="item.email"
        :phone="item.phone"
        :tag="item.tag"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import {useContacts} from "@/stores/contacts";
import ContactCard from "./ContactCard.vue";

const HEADERS: string[] = ["Full name", "Phone", "Email", "Tag", "Actions"];

const contactsStore = useContacts();
const contactsList = contactsStore.contacts;
</script>
