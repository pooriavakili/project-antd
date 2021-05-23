<template>
<div style="margin-right:600px">
 <a-timeline mode="right" >
    <a-timeline-item>پوریا</a-timeline-item>
    <a-timeline-item>محمد</a-timeline-item>
    <a-timeline-item>
      <template #dot><clock-circle-outlined style="font-size: 16px" /></template>
      داوود
    </a-timeline-item>
    <a-timeline-item>علی</a-timeline-item>
  </a-timeline>
  <div>
  <a-form >
  <a-form-item >
  <div >
  <select class="w-48 text-base py-2 text-right rtl ml-20 ">
  <option class="text-base" value="پوریا">
  پوریا
  </option>
  <option value="طناز">
  طناز
  </option>
  <option value="مریم">
  مریم
  </option>
  <option value="علی">
  علی
  </option>
</select>
  </div>
  
  </a-form-item>
  </a-form>
    </div>
</div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ClockCircleOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'App',
  components: {
    ClockCircleOutlined
  }
})
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
