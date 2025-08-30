<template>
  <v-app>
    <Navigation />

    <v-main>
      <v-container>
        <div v-if="store.selectedFolder">
          <h2 prepend-icon="mdi-folder">{{ store.selectedFolder.name }}</h2>
          <v-list lines="two">
            <v-list-subheader inset>Folders</v-list-subheader>

            <v-list-item
              v-for="folder in  store.selectedFolder.children"
              :key="folder.id"
              :subtitle="folder.created_at"
              :title="folder.name"
            >
              <template v-slot:prepend>
                <v-avatar color="grey-lighten-1">
                  <v-icon color="white">mdi-folder</v-icon>
                </v-avatar>
              </template>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-subheader inset>Files</v-list-subheader>

            <v-list-item
              v-for="file in store.selectedFolder.files"
              :key="file.id"
              :subtitle="file.created_at"
              :title="file.name+'.'+file.extension"
            >
              <template v-slot:prepend>
                <v-avatar color="blue">
                  <v-icon color="white">mdi-file</v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </div>
        <div v-else>
          <p>Please select a folder</p>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navigation from "../components/Navigation.vue";
import { useFolderStore } from "../stores/folder";

const store = useFolderStore();
</script>
