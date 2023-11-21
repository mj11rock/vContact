import {ref, computed} from "vue";
import {defineStore} from "pinia";
import initialList from "@/data/contacts.json";
import type {IContact, ITag} from "@/types";
import {useTags} from "./tags";

export const useContacts = defineStore("contacts", () => {
  const tagsStore = useTags();

  const contacts = ref<IContact[]>(initialList);
  const contactsAmount = computed(() => contacts.value.length);

  const addContact = (contact: IContact) => {
    contacts.value.push(contact);
  };
  const editContact = (contact: IContact) => {
    const index = contacts.value.findIndex((c) => c.id === contact.id);
    contacts.value[index] = contact;
  };
  const getContact = (id: number): IContact => {
    const contact = contacts.value.find((c) => c.id === id);
    if (contact) return contact;
    else throw new Error("Contact not found");
  };
  const removeContact = (id: number) => {
    const index = contacts.value.findIndex((c) => c.id === id);
    contacts.value.splice(index, 1);
  };

  const searchContacts = (query: string) => {
    return contacts.value.filter((contact: IContact) => {
      const contactName = contact.name.toLowerCase();
      const contactEmail = contact.email.toLowerCase();
      const contactPhone = contact.phone.toLowerCase();
      const contactTag = tagsStore.tags.find(
        (tag: ITag) => tag.id === contact.tag
      );
      const lowerCaseQuery = query.toLowerCase();

      return (
        contactName.includes(lowerCaseQuery) ||
        contactEmail.includes(lowerCaseQuery) ||
        contactPhone.includes(lowerCaseQuery) ||
        contactTag?.name.includes(lowerCaseQuery)
      );
    });
  };

  return {
    contacts,
    contactsAmount,
    addContact,
    editContact,
    getContact,
    removeContact,
    searchContacts,
  };
});
