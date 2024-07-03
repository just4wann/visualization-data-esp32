<script setup lang="ts">
import type { Socket } from 'socket.io-client';

const props = defineProps<{
  socket: Socket;
}>();

const isConnect = ref<boolean>(false);
const isDisconnect = ref<boolean>(false);
const connectingToServer = ref<boolean>(false);
const reconnect = ref<boolean>(false);
const reconnectButton = ref<boolean>(false);

props.socket.on('connect', () => {
  reconnect.value = false;
  reconnectButton.value = false;
  connectingToServer.value = false;
  isConnect.value = true;
  setTimeout(() => {
    isConnect.value = false;
  }, 5000);
});

props.socket.on('disconnect', () => {
  isDisconnect.value = true;
  setTimeout(() => {
    isDisconnect.value = false;
  }, 5000);
});

const connectToServer = () => {
  reconnect.value = false;
  if (!props.socket.connected) {
    connectingToServer.value = true;
    setTimeout(() => {
      if (!props.socket.connected) {
        reconnect.value = true;
        connectingToServer.value = false;
      } else {
        reconnect.value = false;
      }
    }, 5000);
  }
};

onMounted(() => {
  connectToServer();
});
</script>

<template>
  <main class="w-96 absolute right-5 bottom-6">
    <UNotification id="1" title="Connected to Server" description="Yeay finally connected" v-if="isConnect" :timeout="4900" />
    <UNotification id="2" title="Disconnected From Server" description="Looks like your server has been stopped" v-if="isDisconnect" :timeout="4900" />
    <UNotification id="3" title="Connecting to Server" description="Please wait a second...." v-if="connectingToServer" :timeout="4900" />
    <UNotification
      id="4"
      title="Connect to Server Failed"
      description="Make sure server is already running."
      v-if="reconnect"
      :timeout="0"
      color="red"
      :actions="[
        { label: 'Reconnect ?', variant: 'solid', color: 'primary', click: () => connectToServer() },
        {
          label: 'No, thanks',
          click: () => {
            reconnect = false;
            reconnectButton = true;
          },
        },
      ]"
      :closeButton="{}"
    />
  </main>
  <section v-if="reconnectButton" class="flex flex-col justify-center items-center gap-2 mt-6">
    <h1>Server is not connected</h1>
    <UButton icon="i-heroicons-arrow-path" :ui="{ rounded: 'rounded-xl' }" color="gray" variant="solid" size="xs" @click="() => {
      connectToServer()
      reconnectButton = false
    }">Reconnect</UButton>
  </section>
</template>

<style scoped></style>
