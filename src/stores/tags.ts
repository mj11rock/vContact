import {defineStore} from "pinia";
import {ref} from "vue";
import type { ITag } from "@/types";

export const useTags = defineStore("tags", () => {
  const tags = ref<ITag[]>([]);

  const addTag = (tag: ITag) => {
    tags.value.push(tag);
  };
  const removeTag = (tag: ITag) => {
    const index = tags.value.findIndex((t) => t.id === tag.id);
    tags.value.splice(index, 1);
  };
  const editTag = (tag: ITag) => {
    const index = tags.value.findIndex((t) => t.id === tag.id);
    tags.value[index] = tag;
  };

  return {
    tags,
    addTag,
    removeTag,
    editTag,
  };
});
