<template>
  <div class="flex flex-col">
    <div class="form-input">
      <label for="name">Full name:</label>
      <input v-model="name" type="text" :placeholder="data.name" />
    </div>
    <div class="form-input">
      <label for="name">Phone:</label>
      <input type="text" v-model="phone" :placeholder="data.phone" />
    </div>
    <div class="form-input">
      <label for="name">Email:</label>
      <input type="text" v-model="email" :placeholder="data.email" />
    </div>
    <div class="form-input" v-if="tagsList.length">
      <select name="tag" id="tag" :value="tagsList[data.tag ? data.tag : 0]">
        <option v-for="item in tagsList" :value="item.id">{{ item.name }}</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref, defineExpose} from "vue";
import {useContacts} from "@/stores/contacts";
import { useTags } from "@/stores/tags";
// @ts-ignore
import {generateAvatar} from '@/utils/generateAvatar'

import type {IContact} from "@/types/contacts";

const props = defineProps({
  id: {
    type: [String, Array],
    required: true,
  },
});

const contactsStore = useContacts();
const tagsStore = useTags();

const tagsList = tagsStore.tags;

const data = ref<IContact>(contactsStore.getContact(+props.id));
const name = ref<string>(data.value.name);
const phone = ref<string>(data.value.phone);
const email = ref<string>(data.value.email);
const tag = ref<number>(data.value.tag);


const submit = () => {
  const newContactData: IContact = {
    id: +props.id,
    name: name.value,
    phone: phone.value,
    email: email.value,
    tag: tag.value,
    avatar: generateAvatar(name.value),
  }
  const contactData = {
    ...data.value,
    ...newContactData,
  };
  console.log(contactData)
  if (contactData) {
    contactsStore.editContact(contactData);
  }
};

defineExpose({
  submit,
});
</script>
