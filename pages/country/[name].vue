<template>
    <div>
        <Head>
            <Title>Country | {{ name }}</Title>
        </Head>
        <section>
            <a href="/" class="back">Back</a>
            <div class="country-info">
                <div class="flag-cont">
                    <img :src="country.flag" :alt="country.name">
                </div>
                <div class="info-cont">
                    <h4>{{ name }}</h4>
                    <div class="info-texts">
                        <div class="info-block">
                            <p>Native Name: {{ country.nativeName }}</p>
                            <p>Population: {{ country.population }}</p>
                            <p>Region: {{ country.region }}</p>
                            <p>Sub Region: {{ country.subregion }}</p>
                            <p v-if="country.capital">Capital: {{ country.capital }}</p>
                            <p v-else> </p>
                        </div>
                        <div class="info-block">
                            <p>Top level domain: {{ country.topLevelDomain[0] }}</p>
                            <p v-if="country.currencies">Currencies: {{ country.currencies[0].name }}</p>
                            <p v-else> </p>
                            <p>Languajes: {{ country.languages.map(l => l.name).join(', ')}}</p>
                        </div>
                        <div class="info-border info-block">
                            <p v-if="country.borders">Border Countries: {{  country.borders.join(', ') }}</p>
                            <p v-else> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import countries from "@/data/data.json"

const route = useRoute()
const name = route.params.name
const country = countries.find(c => c.name == name)


</script>

<style scoped>
section{
    background-color:#202c37;
    height: calc(100vh - 80px);
    padding-top: 2rem;
}

.back{
    margin: 2rem;
    background-color: #2b3945;
    border: none;
    outline: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 6px #00000077;
}
.country-info{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 4em;
    margin: 1rem 2rem 0 2rem;
    padding-top: 1rem;
}

.flag-cont{
    min-width: 370px;
    max-width: 600px;
    background-color: #2b3945;
    padding: .5rem;
    border-radius: 8px;
    aspect-ratio: 3/2;
}
.flag-cont > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.info-cont{
    flex: 1 1;
    color: #fff;
}
.info-cont > h4{
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}
.info-texts{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.info-border{
    grid-column:  1/-1;
    margin-top: 2.5rem;
}
.info-block p{
    margin-block: 1rem;
}

@media (max-width: 900px) {
    .country-info{
        flex-direction: column;
    }
    section{
        height: auto;
    }
    .info-texts{
    display: grid;
    grid-template-columns: repeat(1,1fr);
}
}
</style>