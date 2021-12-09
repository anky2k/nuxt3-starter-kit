<script setup>
  const someFn = async () => {
    return new Promise( resolve => {
      setTimeout(() => resolve({
        "title": "Mount Everest",
        "description": "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point",
        "height": "8,848 m",
        "countries": [
          "China",
          "Nepal"
        ],
        "continent": "Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg"
      }), 1000)
    })
  }

  const { data: mountain } = await useAsyncData('MountainApi',() => someFn(), { pick: ['title', 'description'] })
</script>

<template>
  <h1>{{ mountain.title }}</h1>
  <p>{{ mountain.description }}</p>
</template>