<template>
    <div>
        <Header @theme="tld"/>
        <slot/>
    </div>
</template>

<script setup>
    function tld(v){
        if(v){
            v = false
        }
        console.log('v :>> ', v);
    } 
</script>

<style>
*,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans';
}
a{
    text-decoration: none;
    color: black;
}

.light-bgc{
background-color: #fafafa;
color: #111517;
}
.light-input{
    background-color: #858585;
}

</style>
