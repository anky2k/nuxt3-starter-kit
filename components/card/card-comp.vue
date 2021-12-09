<template>
  <div
    class="border-indigo-800 border-2 flex flex-col mb-6 w-full max-w-sm bg-white rounded-2xl overflow-hidden lg:flex-row lg:mb-16 lg:mx-auto lg:max-w-screen-lg lg:h-96"
  >
    <div
      class="flex items-center justify-center w-full h-56 lg:max-w-sm lg:h-96"
      :style="{
        background: item.bgColor,
      }"
    >
      <img class="max-w-full" :src="item.thumbnail" alt="some image" />
    </div>

    <div class="relative flex-1 p-6 pb-12 lg:p-8">
      <div class="flex justify-between mb-3 lg:mb-6">
        <div
          class="text-gray-500 font-body text-xs font-semibold uppercase lg:text-xl"
        >
          {{ item.tag }}
        </div>

        <div class="text-gray-500 font-body text-xs lg:text-xl">
          {{ item.date }}
        </div>
      </div>
      <div class="flex flex-col">
        <div class="h mb-1 font-title text-xl lg:mb-4 lg:text-4xl">
          {{ item.title }}
        </div>

        <div class="mb-6 text-gray-900 font-body text-sm lg:text-lg">
          {{ item.desc }}
        </div>
      </div>
      <div
        class=" absolute bottom-0 left-0 flex items-center justify-between pb-6 px-6 w-full lg:px-8"
      >
        <div class="flex items-center text-center">
          <div
            :style="{
              backgroundImage: `url(${item.avatar})`,
            }"
            class="mr-3 w-8 h-8 bg-cover bg-center rounded-full lg:w-11 lg:h-11"
          ></div>

          <div class="text-blue-500 text-xs font-semibold lg:text-xl">
            {{ item.author }}
          </div>
        </div>

        <div class="flex items-center">
          <div class="mr-1 text-blue-500 text-xs font-semibold lg:text-xl">
            Read More
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#3b82f6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.17 13L12.59 16.59L14 18L20 12L14 6L12.59 7.41L16.17 11H4V13H16.17Z"
              fill="#3b82f6"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComp',
  props: ['item'],
}
</script>