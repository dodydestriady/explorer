<template>
  <v-list density="compact" nav>
    <TreeItem
      v-for="folder in folders"
      :key="folder.id"
      :folder="folder"
    />
  </v-list>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import TreeItem from "./TreeItem.vue";
import { Folder } from  "../utils/types"
import { useFolders } from "../composables/useFolders";

const { folders, fetchFolders } = useFolders();

onMounted(fetchFolders);
</script>
