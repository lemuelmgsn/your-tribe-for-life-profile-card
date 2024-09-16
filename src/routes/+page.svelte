<script>
    export let data

    let imagePath = "/images/gundam.visitekaartje.jpg"; // Relatieve pad naar afbeelding
</script>

<body>
<main>
    <section>
        <div class="top-card">
            <h1>{data.person.name}</h1>
            <a href="{data.person.github_handle}"> <img src= "{data.person.avatar}" class="github-link" alt="profile picture"></a>
        </div>

        <div class="img-container">
            <img src='/images/gundam.visitekaartje.jpg' alt="afbeelding" class="images"/>
            <img src='/images/schoenen.visitekaartje.jpg' alt="afbeelding" class="images"/>
            <img src='/images/kleding.visitekaartje.jpg' alt="afbeelding" class="images"/>
        </div>

        <div class="info">
            <h2>{data.person.bio}</h2>
            <ul>
                <li>Text</li>
                <li>Text</li>
                <li>Text</li>
            </ul>
        </div>

        <div class="links">
            <a href="https://open.spotify.com/">spotify</a>
            <a href="https://www.instagram.com/">insta</a>
        </div>

    </section>
</main>
</body>



<style>

*{
    font-family: sans-serif;
}
body{
    background-color: black;
}

section{
    background-color: white;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    align-items: center;
    justify-content: center;
    border: 5px solid lightgrey;
    border-radius: 8px;
    margin: auto;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(105, 105, 105, 0.19);
}
.top-card{
    display: flex;
    flex-direction: row;
    /* background-color: blue; */
    width: 100%;
}
.top-card > a{
    margin-left: auto;
    padding-right: 10px;
    align-self: center;
}
.top-card > h1{
    padding-left: 20px;
    color: #4b4b4b;
}
img{
    height: 2em;
    width: 2em;
    border-radius: 1em;
}
.img-container{
    display: flex;
    flex-direction: column;
    /* height: 550px; */
    width: 95%;
    border-radius: 8px;
    align-items: center;
    border: 5px solid lightgrey;
}
.images{
    width: 50%;
    height: 80%;
    background-color: grey;
    margin: 10px;
    /* border-radius: 4px; */
    aspect-ratio: 1 / 1;
}
.info{
    margin-right: auto;
    width: 100%;
    border-bottom: 4px solid lightgrey;
}
.info > h2{
    padding-left: 20px;
    font-size: 1.2em;
    color: #4b4b4b;
}
.links{
    margin-left: auto;
    /* width: 100%; */
    padding: 10px;
}
.links > a{
    margin-left: auto;
    align-self: end;
}


@media (min-width: 690px) {
    .img-container {
        flex-direction: row;
        height: 300px;
    }
    .images{
        width: 100%;
        margin: 8px;
    }
}


</style>