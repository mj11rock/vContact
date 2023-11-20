<template>
  <main class="container mx-auto">
    <div class="flex flex-row items-center">
      <h1 class="my-4">Contacts <small class="font-bold">({{contactsAmount}})</small></h1>
      <button @click="handleAddContact" class="ml-4 text-center rounded-full h-8 w-8 text-lg bg-blue-600 hover:bg-blue-700 active:scale-95 hover:cursor-pointer text-white">+</button>
    </div>
   
   <div>
      <ContactsTable />
   </div>
  </main>
</template>

<script setup lang="ts">
import ContactsTable from '@/components/ContactsTable.vue'
import {useContacts} from '@/stores/contacts'
import { useRouter } from 'vue-router';

const router = useRouter()
const {contactsAmount } = useContacts()

function handleAddContact() {
  router.push('/add-contact')
}
</script>