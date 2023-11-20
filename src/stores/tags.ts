import {defineStore} from "pinia";
import {ref} from "vue";

interface Tag {
  id: number;
  name: string;
}

export const useTags = defineStore("tags", () => {
  const tags = ref<Tag[]>([]);

  const addTag = (tag: Tag) => {
    tags.value.push(tag);
  };
  const removeTag = (tag: Tag) => {
    const index = tags.value.findIndex((t) => t.id === tag.id);
    tags.value.splice(index, 1);
  };
  const editTag = (tag: Tag) => {
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
