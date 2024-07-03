<script setup lang="ts">
const socketIO = useSocket('http://localhost:80');
useTemperature(socketIO)
</script>

<template>
  <UContainer>
    <main class="mt-10 flex flex-col gap-6 justify-between items-center">
      <Header></Header>
      <UDivider label="IoT" />

      <section class="flex mt-[3rem] justify-center">
        <SectionRoom>
          <Highlight title="Line 1">
            <Temperature :socket="socketIO"></Temperature>
            <Humidity :socket="socketIO"></Humidity>
            <Efficiency :socket="socketIO"></Efficiency>
            <Average :socket="socketIO"></Average>
          </Highlight>
        </SectionRoom>

        <UDivider orientation="vertical" label="/" />

        <SectionRoom>
          <Highlight title="Line 2">
            <Temperature :socket="socketIO"></Temperature>
            <Humidity :socket="socketIO"></Humidity>
            <Efficiency :socket="socketIO"></Efficiency>
            <Average :socket="socketIO"></Average>
          </Highlight>
        </SectionRoom>
      </section>
      <Notifications :socket="socketIO"/>
    </main>
  </UContainer>
</template>

<style scoped>
* {
  font-family: Poppins, sans-serif;
}
</style>
