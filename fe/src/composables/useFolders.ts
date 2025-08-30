import { ref } from "vue";
import type { Folder, File } from "../utils/types";

export function useFolders(parentId?: number) {
  const folders = ref<Folder[]>([]);
  const files = ref<File[]>([]);
  const loading = ref(false);

  async function fetchFolders() {
    loading.value = true;
    try {
      const url = parentId
        ? `http://localhost:4000/folders?parent_id=${parentId}`
        : `http://localhost:4000/folders`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch folders");

      const data = await res.json();
      folders.value = data;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  return {
    folders,
    loading,
    fetchFolders,
  };
}
