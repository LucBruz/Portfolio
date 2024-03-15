<script>

export default {

    props: ['data', 'handleClick'],
    data() {
        return {
            comic: {},
            link: '',
            collection: {}
        }
    },
}
</script>


<template>

    <div class="container">
        <div class="band-connect">
            <div class="band-connect-left">
                <div>
                    <h2 title="Nom du comics" > {{ data.title }} </h2>   <br>
                    <p> {{ data.description  }} </p>
                    
                </div>

            </div>
            <img class="image" :src="data.url" alt="">
        </div>
    </div>

</template>



<style scoped>
.image{
    border-radius: 30px;
}
.container {
    width: 8rem;
    height: 30rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.band-connect {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 50px auto;
    width: 65rem;
    height: 65%;

    transform: scale(1.3);

    margin: 0 auto;

    position: absolute;
}

.band-connect h2 {
    font-size: 1.8em;
    color: whitesmoke;
    line-height: 30px;
    text-align: center;
    margin: 0 20px;
}

.band-connect p {
    
    color: whitesmoke;
    
    text-align: center;
    margin: 0 20px;
}

.band-connect img {
    width: 60%;
    height: 100%;
    object-fit: cover;
}

.band-connect-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
}

.band-connect-left div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
}



</style>