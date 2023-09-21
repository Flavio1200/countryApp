<template>
    <main>
        <div class="form">
            <input type="text" class="search" v-model.trim="search" placeholder="Search for a country...">
            <select name="" v-model="selectRegion" class="regions">
                <option disabled value="">Select by region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
        <div class="list">
            <CountryCard v-for="data in d" :key="data.alpha2Code" :capital="data.capital" :name="data.name" :population="data.population" :region="data.region" :flag="data.flags.png"/>
        </div>
    </main>
</template>

<script setup>
    import data from '../data/data.json'
    const d = ref(data)
    const search = ref("")
    watch(search,()=>{
        d.value = data.filter(n => n.name.toLowerCase().includes(search.value.toLowerCase()))
    })

    const selectRegion = ref("")
    watch(selectRegion,()=>{
        d.value = data.filter(n => n.region.includes(selectRegion.value))
    })
</script>

<style scoped>
.list{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 2rem;
    justify-content: center;
}
main{
    background-color: #202c37;
    padding: 1rem 2rem;
    min-height: 100vh;
    max-height: 100%;
}
.form{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search{
    background-color: #2b3945;
    width: 35vw;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    color: #fff;
}
::placeholder{
    color: #fff;
    font-size: 1rem;
}
.regions{
    background-color: #2b3945;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 1rem ;  
}
</style>

