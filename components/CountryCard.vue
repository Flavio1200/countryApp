<template>
    <a :href="`/country/${name}`" class="card">
        <div class="img-cont">
            <img :src="flag" alt="flag">
        </div>
        <div class="card-details">
            <h4>{{ name }}</h4>
            <p>Population: {{ population }}</p>
            <p>Region: {{ region }}</p>
            <p>Capital: {{ capital }}</p>
        </div>
    </a>
</template>

<script setup>
    const props = defineProps(['name','population','region','capital','flag'])
</script>

<style scoped>
.card{
    min-width: 220px;
    max-width: 250px;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #2b3945;
    border-radius: 5px;
    gap: 5px;
    height: 300px;
    max-height: 320px;
}
.img-cont{
    height: 150px;
    width: 100%;
    flex: 1 1;
}
img{
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
}
.card-details h4,p{
    margin: 4px 0;
}
.card-details{
    flex: 1 1;
    width: 100%;
    padding: 0 1rem;
}
</style>