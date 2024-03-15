<script>
export default {
    name: 'TechCard',
    props: {
        title: String,
        image: String,
        description: String,
        couleur: String, // Ajout de la prop "couleur"
        couleurBack: String, // Ajout de la prop "couleurBack" pour la couleur de fond du dos de la carte
        lien: String
    },

}
</script>

<template>
    <div>  
    <div class="card" :style="{ '--couleur-background': couleur }">
        <div class="card-face front">
            <div class="title-container">
                <h2> {{ title }} </h2>
                <img width="180" height="180" class="test" :src="image" />
            </div>
        </div>
        <div class="card-face back" :style="{ '--couleur-back-background': couleurBack }">
            <p class="description"> {{ description }} </p>
            <p class="lien"> Pour plus d'information : <a :href="lien">Site offciel</a> </p>
        </div>
    </div>
    <div class="containeur caroussel">
        
    </div>
</div>
</template>


<style scoped>
.card {
    width: 15vw;
    height: 40vh;
    perspective: 1000px;
    cursor: pointer;
    transition: transform 0.5s, box-shadow 0.5s;
    transform-style: preserve-3d;
    
}

.description {
    margin-top: 100px;
    font-size: 18px; /* Augmente la taille de la police */
    line-height: 1.5; /* Espacement entre les lignes */
    word-spacing: 0.2em; /* Espacement entre les mots */
    
}

.lien {
    display: flex;
    margin-top: auto;
    font-size: 18px; /* Augmente la taille de la police */
    line-height: 1.5; /* Espacement entre les lignes */
    word-spacing: 0.2em; /* Espacement entre les mots */
    text-align: center;
    flex-direction: column;
    
}

.front {
    background-color: var(--couleur-background);
}


.card-face {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 20px;
    padding-top: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}



.back {
    background-color: var(--couleur-back-background) !important;
    transform: rotateY(180deg);
}

.card:hover .front {
    transform: rotateY(180deg);

}

.card:hover .back {
    transform: rotateY(360deg);

}

.title-container {
    width: 100%;
    text-align: center;
    display: block;
    justify-content: center;
}

.title-container h2 {
    margin-bottom: 20px;
}

    /* background-color: ; */
    /* Gris pour Back-end 403F4C*/

    /* background-color: ; */
    /* Bleu clair pour Front-end 66C7F4*/


    /* background-color: #FFECB3; */
    /* Jaune clair pour Base de données */


    /* background-color: #C8E6C9; */
    /* Vert clair pour Sauvegarde */






</style>