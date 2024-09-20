<title>Visitekaartje</title>

<script>
    export let data

    let imagePath = "/images/gundam.visitekaartje.jpg"; // Relatieve pad naar afbeelding
</script>

<body>
<main>
    <article>

        <section class="top-card">
            <h1>{data.person.name} {data.person.surname}</h1>
            <a href="{data.person.github_handle}"> <img src= "{data.person.avatar}" class="pf-img" alt="profile picture"></a>
        </section>

        <div class="img-container">
            <picture>
                <source srcset="/images/gundam.visitekaartje.jpg?format=avif" type="image/avif">
                <source srcset="/images/gundam.visitekaartje.jpg?format=webp" type="image/webp">
                <img src="/images/gundam.visitekaartje.jpg" alt="afbeelding" loading="lazy" width= auto height= auto>
            </picture>
            <picture>
                <source srcset="/images/schoenen.visitekaartje.jpg?format=avif" type="image/avif">
                <source srcset="/images/schoenen.visitekaartje.jpg?format=webp" type="image/webp">
                <img src="/images/schoenen.visitekaartje.jpg" alt="afbeelding" loading="lazy" width= auto height= auto>
            </picture>
            <picture>
                <source srcset="/images/kleding.visitekaartje.jpg?format=avif" type="image/avif">
                <source srcset="/images/kleding.visitekaartje.jpg?format=webp" type="image/webp">
                <img src="/images/kleding.visitekaartje.jpg" alt="afbeelding" loading="lazy" width= auto height= auto>
            </picture>
        </div>




        <section class="info">
            <h2>{data.person.bio}</h2>
            <div class="lijsten">
                <ul>
                    <li><a href="{data.person.github_handle}">github</a></li>
                    <li><a href="https://discord.com">discord</a></li>
                    <li><a href="https://codepen.io/">codepen.io</a></li>
                </ul>
                <ul>
                    <li><a href="https://open.spotify.com/">spotify</a></li>
                    <li><a href="https://www.reddit.com/">reddit</a></li>
                    <li><a href="https://www.instagram.com/">instagram</a></li>
                </ul>
            </div>
        </section>

        <footer class="links">
            <a href="https://fdnd.nl/">@FDND</a>
        </footer>

    </article>
</main>
</body>



<style>

*{
    font-family: sans-serif;
    font-family: "Lucida Console", Courier, monospace;
}
body{
    background-color: black;
}
h1, h2, h3, a, .info{
    color: white;
}
.lijsten{
    display: flex;
    margin-bottom: 1.5em;
}
.lijsten > ul{
    justify-self: left;
    list-style-type: square;
}
.lijsten > ul > li{
    margin: 1em;
}
article{
    background-color: black;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    align-items: center;
    justify-content: center;
    border: 5px solid rgb(39, 39, 39);
    border-radius: 8px;
    margin: auto;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(105, 105, 105, 0.19);
}
.top-card{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.top-card > a{
    margin-left: auto;
    padding-right: 10px;
    align-self: center;
}
.top-card > h1{
    padding-left: 20px;
    font-size: 1.5em;
}
.pf-img{
    height: 2em;
    width: 2em;
    border-radius: 1em;
}
.img-container{
    display: flex;
    flex-direction: column;
    width: 95%;
    border-radius: 8px;
    align-items: center;
    border: 5px solid rgb(39, 39, 39);
}
picture{
    width: 100%;
    height: 80%;
    background-color: grey;
    margin: 30px 10px;
    aspect-ratio: 1 / 1;
}
img{
    width: 100%;
}
.info{
    margin-right: auto;
    width: 100%;
    border-bottom: 4px solid rgb(39, 39, 39);
}
.info > h2{
    padding-left: 20px;
    font-size: 1.2em;
}
.links > a, .links{
    margin-left: auto;
}
.links{
    padding: 10px;
}
.links > a{
    align-self: end;
}
a{
    padding: 5px;
    box-shadow: inset 0 0 0 0 grey;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
a:hover{
    color: #000;
    box-shadow: inset 240px 0 0 0 white;
}
@media (min-width: 690px) {
    .img-container {
        flex-direction: row;
    }
    .images{
        width: 100%;
        margin: 8px;
    }
}
</style>