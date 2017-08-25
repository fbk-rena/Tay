const loadPage = function () {
    console.log("Hello");
    loadSongs();
    loadCollections();
}

const itunes = {
    tay: "https://itunes.apple.com/search?term=taylor+swift&entity=song&limit=250",
    mix: "https://itunes.apple.com/search?term=pop&media=music&country=us&limit=6"
};
const songLayout = `<li class="collection-item avatar tracks">
                        <img src="__img__" alt="" class="circle">
                        <div class="row">
                            <p class="title ">__title__</p>
                            <span>__collection__</span>
                            <span href="#!" class="secondary-content">__id__</span>
                        </div>
                    </li>`;
const cardMix = `<div class="card col l6 m12">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="" src="__img__">
                        </div>
                        <div class="card-content">
                            <span class="cyan-text text-accent-4">__title__</span>
                            <span>__collection__</span>
                        </div>
                    </div>`;
const playlist = $("#taysongs");
const loadSongs = function () {
    $.getJSON(itunes.tay, function (response) {
        const tracks = response.results;
        console.log(tracks);
        tracks.forEach(function (track) {
            const addNewSong = songLayout.replace("__img__", track.artworkUrl100)
                .replace("__title__", track.trackName)
                .replace("__collection__", track.collectionName)
                .replace("__id__", track.trackId);
            playlist.append(addNewSong);
        });
    })
};
const loadCollections = function () {
    $.getJSON(itunes.mix, function (response) {
        const collection = response.results;
        collection.forEach(function (track) {
            const mixes = cardMix.replace("__img__", track.artworkUrl100)
                .replace("__title__", track.trackName)
                .replace("__collection__", track.collectionName)
            $("#collections").append(mixes);
        });
    })
};



$(document).ready(loadPage);
