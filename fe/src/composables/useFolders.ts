import { ref } from "vue";
import type { Folder, File } from "../utils/types";

const API_URL = import.meta.env.VITE_API_URL;
export function useFolders(parentId?: number) {
  const folders = ref<Folder[]>([]);
  const loading = ref(false);

  async function fetchFolders() {
    loading.value = true;
    try {
      const url = parentId
        ? `${API_URL}/folders?parent_id=${parentId}`
        : `${API_URL}/folders`;

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
