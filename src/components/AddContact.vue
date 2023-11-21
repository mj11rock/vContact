<template>
  <div>
    <div class="form-input">
      <label for="name">Full name:</label>
      <input
        class="!w-full"
        v-model="name"
        type="text"
        placeholder="Enter name"
      />
    </div>
    <div class="form-input">
      <label for="name">Phone:</label>
      <input
        class="!w-full"
        type="phone"
        v-model="phone"
        placeholder="Enter phone"
      />
    </div>
    <div class="form-input">
      <label for="name">Email:</label>
      <input
        class="!w-full"
        type="text"
        v-model="email"
        placeholder="Enter email"
      />
    </div>
    <div class="form-input" v-if="tagsList.length">
      <select
        class="!w-full"
        name="tag"
        id="tag"
        v-model="tag"
        placeholder="Select tag"
      >
        <option v-for="item in tagsList" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {useContacts} from "@/stores/contacts";
import {useTags} from "@/stores/tags";
import type {IContact} from "@/types";
import {generateAvatar} from "@/utils/generateAvatar";

const contactsStore = useContacts();
const tagsStore = useTags();

const name = ref<string>("");
const phone = ref<string>("");
const email = ref<string>("");
const tag = ref<number>(0);

const tagsList = tagsStore.tags;

const submit = () => {
  if (!name.value || !phone.value || !email.value)
    return alert("Please fill all fields");

  const data: IContact = {
    name: name.value,
    phone: phone.value,
    email: email.value,
    tag: tag.value,
    avatar: generateAvatar(name.value),
    id: Date.now(),
  };
  contactsStore.addContact(data);
};

defineExpose({
  submit,
});
</script>
