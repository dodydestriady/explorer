import { defineStore } from "pinia";
import { ref } from "vue";
import type { Folder } from "../utils/types";

export const useFolderStore = defineStore("folder", () => {
  const selectedFolder = ref<Folder | null>(null);

  function setSelected(folder: Folder) {
    selectedFolder.value = folder;
  }

  return { selectedFolder, setSelected };
});
