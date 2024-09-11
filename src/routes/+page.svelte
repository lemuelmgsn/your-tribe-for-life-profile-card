<script>
    export let data
</script>

<body>
<main>
    <section>
        <div class="top-card">
            <h1>Lemuel</h1>
            <a href="https://github.com/lemuelmgsn">github icon</a>
        </div>

        <div class="img-container">
            <div class="images">1</div>
            <div class="images">1</div>
            <div class="images">1</div>
        </div>

        <div class="info">
            <h2>*frontend design & development*</h2>
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


<p> {data.naam} </p>

<style>

*{
    font-family: sans-serif;
}

section{
    display: flex;
    flex-direction: column;
    max-width: 800px;
    align-items: center;
    justify-content: center;
    border: 5px solid lightgrey;
    border-radius: 8px;
    margin: auto;
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
.img-container{
    display: flex;
    flex-direction: column;
    height: 550px;
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