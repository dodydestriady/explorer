<template>
  <div>
    <v-list-item
      @click="toggle"
      :prepend-icon="isOpen ? 'mdi-folder-open' : 'mdi-folder'"
    >
      <v-list-item-title>{{ folder.name }}</v-list-item-title>
      <template v-slot:append>
        <v-icon v-if="loading">mdi-loading</v-icon>
        <v-icon>{{ isOpen ? "mdi-chevron-down" : "mdi-chevron-right" }}</v-icon>
      </template>
    </v-list-item>

    <v-expand-transition>
      <div v-if="isOpen" class="pl-4">
        <!-- Empty -->
        <v-list-item v-if="isEmpty" disabled color="secondary">
          <v-icon prepend>mdi-folder-remove</v-icon>
          <v-list-item-title>Empty</v-list-item-title>
        </v-list-item>

        <!-- Render subfolders -->
        <TreeItem
          v-for="child in children"
          :key="child.id"
          :folder="child"
        />

        <!-- Render files -->
        <v-list-item
          v-for="file in files"
          :key="file.id"
          prepend-icon="mdi-file"
        >
          <v-list-item-title>{{ file.name }}</v-list-item-title>
        </v-list-item>
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Folder, File } from "../utils/types";
import { useFolders } from "../composables/useFolders";
import { useFolderStore } from "../stores/folder";
interface Props {
  folder: Folder;
}

const props = defineProps<Props>();
const store = useFolderStore();
const isOpen = ref(false);
const loading = ref(false);

const { folders: children, loading: childLoading, fetchFolders } = useFolders(props.folder.id);
const files = ref<File[]>(props.folder.files ?? []);
const loaded = ref(!!props.folder.children);

const isEmpty = computed(() => {
  return (
    (children.value.length === 0) &&
    (files.value.length === 0)
  );
});

async function toggle() {
    store.setSelected(props.folder);

  isOpen.value = !isOpen.value;
  if (isOpen.value && children.value.length === 0) {
    await fetchFolders();
  }
}
</script>
