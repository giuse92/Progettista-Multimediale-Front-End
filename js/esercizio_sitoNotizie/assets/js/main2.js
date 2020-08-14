//Costruisco in html le sezioni per articoli e filtro
document.body.innerHTML = `<!-- Menù navigazione -->
<nav>
    <div class="logo">Feic niùs</div>
</nav>
<!-- News -->
<section id="mostraNews">
    <div class="articoli"></div>
    <div class="filtro"><span>Filtra per:</span></div>
</section>`;

let sectionMostraNews = document.getElementById('mostraNews');
let divArticoli = sectionMostraNews.firstElementChild;
let tutteLeNotizie = [
    {
        categoria: "sport",
        titolo: "Titolo 1 sport",
        paragrafi: `<p>Lorem 1 sport ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor erat. Nunc et venenatis orci, id gravida
        urna. Donec bibendum tempus vehicula. Mauris vestibulum nisi sit amet nulla varius, vitae mattis diam suscipit. Nulla
        dictum massa suscipit, vehicula dui nec, euismod augue. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Curabitur lobortis pellentesque ultricies. Suspendisse ut egestas libero, sit amet vehicula
        orci.</p>
        <p>Duis ultrices, lectus a porttitor tincidunt, ipsum mauris vehicula augue, vitae vestibulum leo ipsum sit amet velit.
        Nulla ornare dolor ac quam commodo, sed fringilla quam sollicitudin. In nec sollicitudin erat. Mauris pretium in turpis
        at pretium. Sed id tortor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec euismod quam at velit maximus, et rhoncus turpis elementum. Ut sit amet felis sollicitudin, pulvinar odio non,
        suscipit nibh. Proin quis augue imperdiet, malesuada turpis et, dignissim dui. Quisque varius id ex id pretium.
        Pellentesque laoreet, justo et cursus commodo, sapien nulla aliquam nunc, pulvinar congue ante sem ut tellus. Praesent
        sed finibus eros. Maecenas malesuada cursus lacus eu efficitur. Nam non turpis nec purus vehicula eleifend. Nam
        facilisis, ante in dapibus auctor, tortor enim lacinia ipsum, sed dapibus massa felis a neque. Proin facilisis nisl
        arcu.</p>
        <p>Etiam pretium magna non sodales rutrum. Cras a tortor vel sem molestie efficitur a vel dui. Aliquam sit amet interdum
        lectus, a vestibulum libero. Vivamus id fermentum nisl. Quisque fermentum sit amet libero vitae mollis. Vivamus non est
        a augue scelerisque malesuada. Vivamus commodo volutpat sem, sed accumsan nisl efficitur et. Sed laoreet aliquam ligula,
        nec blandit eros pretium at. Proin id fringilla leo.</p>`
    },
    {
        categoria: "sport",
        titolo: "Titolo 2 sport",
        paragrafi: `<p>Lorem 2 sport ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor erat. Nunc et venenatis orci, id gravida
        urna. Donec bibendum tempus vehicula. Mauris vestibulum nisi sit amet nulla varius, vitae mattis diam suscipit. Nulla
        dictum massa suscipit, vehicula dui nec, euismod augue. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Curabitur lobortis pellentesque ultricies. Suspendisse ut egestas libero, sit amet vehicula
        orci.</p>
        <p>Duis ultrices, lectus a porttitor tincidunt, ipsum mauris vehicula augue, vitae vestibulum leo ipsum sit amet velit.
        Nulla ornare dolor ac quam commodo, sed fringilla quam sollicitudin. In nec sollicitudin erat. Mauris pretium in turpis
        at pretium. Sed id tortor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec euismod quam at velit maximus, et rhoncus turpis elementum. Ut sit amet felis sollicitudin, pulvinar odio non,
        suscipit nibh. Proin quis augue imperdiet, malesuada turpis et, dignissim dui. Quisque varius id ex id pretium.
        Pellentesque laoreet, justo et cursus commodo, sapien nulla aliquam nunc, pulvinar congue ante sem ut tellus. Praesent
        sed finibus eros. Maecenas malesuada cursus lacus eu efficitur. Nam non turpis nec purus vehicula eleifend. Nam
        facilisis, ante in dapibus auctor, tortor enim lacinia ipsum, sed dapibus massa felis a neque. Proin facilisis nisl
        arcu.</p>
        <p>Etiam pretium magna non sodales rutrum. Cras a tortor vel sem molestie efficitur a vel dui. Aliquam sit amet interdum
        lectus, a vestibulum libero. Vivamus id fermentum nisl. Quisque fermentum sit amet libero vitae mollis. Vivamus non est
        a augue scelerisque malesuada. Vivamus commodo volutpat sem, sed accumsan nisl efficitur et. Sed laoreet aliquam ligula,
        nec blandit eros pretium at. Proin id fringilla leo.</p>`
    },
    {
        categoria: "gossip",
        titolo: "Titolo 1 gossip",
        paragrafi: `<p>Lorem 1 gossip ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor erat. Nunc et venenatis orci, id gravida
        urna. Donec bibendum tempus vehicula. Mauris vestibulum nisi sit amet nulla varius, vitae mattis diam suscipit. Nulla
        dictum massa suscipit, vehicula dui nec, euismod augue. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Curabitur lobortis pellentesque ultricies. Suspendisse ut egestas libero, sit amet vehicula
        orci.</p>
        <p>Duis ultrices, lectus a porttitor tincidunt, ipsum mauris vehicula augue, vitae vestibulum leo ipsum sit amet velit.
        Nulla ornare dolor ac quam commodo, sed fringilla quam sollicitudin. In nec sollicitudin erat. Mauris pretium in turpis
        at pretium. Sed id tortor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec euismod quam at velit maximus, et rhoncus turpis elementum. Ut sit amet felis sollicitudin, pulvinar odio non,
        suscipit nibh. Proin quis augue imperdiet, malesuada turpis et, dignissim dui. Quisque varius id ex id pretium.
        Pellentesque laoreet, justo et cursus commodo, sapien nulla aliquam nunc, pulvinar congue ante sem ut tellus. Praesent
        sed finibus eros. Maecenas malesuada cursus lacus eu efficitur. Nam non turpis nec purus vehicula eleifend. Nam
        facilisis, ante in dapibus auctor, tortor enim lacinia ipsum, sed dapibus massa felis a neque. Proin facilisis nisl
        arcu.</p>
        <p>Etiam pretium magna non sodales rutrum. Cras a tortor vel sem molestie efficitur a vel dui. Aliquam sit amet interdum
        lectus, a vestibulum libero. Vivamus id fermentum nisl. Quisque fermentum sit amet libero vitae mollis. Vivamus non est
        a augue scelerisque malesuada. Vivamus commodo volutpat sem, sed accumsan nisl efficitur et. Sed laoreet aliquam ligula,
        nec blandit eros pretium at. Proin id fringilla leo.</p>`
    },
    {
        categoria: "cronaca-nera",
        titolo: "Titolo 1 cronaca nera",
        paragrafi: `<p>Lorem 1 cronaca-nera ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor erat. Nunc et venenatis orci, id gravida
        urna. Donec bibendum tempus vehicula. Mauris vestibulum nisi sit amet nulla varius, vitae mattis diam suscipit. Nulla
        dictum massa suscipit, vehicula dui nec, euismod augue. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Curabitur lobortis pellentesque ultricies. Suspendisse ut egestas libero, sit amet vehicula
        orci.</p>
        <p>Duis ultrices, lectus a porttitor tincidunt, ipsum mauris vehicula augue, vitae vestibulum leo ipsum sit amet velit.
        Nulla ornare dolor ac quam commodo, sed fringilla quam sollicitudin. In nec sollicitudin erat. Mauris pretium in turpis
        at pretium. Sed id tortor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec euismod quam at velit maximus, et rhoncus turpis elementum. Ut sit amet felis sollicitudin, pulvinar odio non,
        suscipit nibh. Proin quis augue imperdiet, malesuada turpis et, dignissim dui. Quisque varius id ex id pretium.
        Pellentesque laoreet, justo et cursus commodo, sapien nulla aliquam nunc, pulvinar congue ante sem ut tellus. Praesent
        sed finibus eros. Maecenas malesuada cursus lacus eu efficitur. Nam non turpis nec purus vehicula eleifend. Nam
        facilisis, ante in dapibus auctor, tortor enim lacinia ipsum, sed dapibus massa felis a neque. Proin facilisis nisl
        arcu.</p>
        <p>Etiam pretium magna non sodales rutrum. Cras a tortor vel sem molestie efficitur a vel dui. Aliquam sit amet interdum
        lectus, a vestibulum libero. Vivamus id fermentum nisl. Quisque fermentum sit amet libero vitae mollis. Vivamus non est
        a augue scelerisque malesuada. Vivamus commodo volutpat sem, sed accumsan nisl efficitur et. Sed laoreet aliquam ligula,
        nec blandit eros pretium at. Proin id fringilla leo.</p>`
    },
    {
        categoria: "notizie-estero",
        titolo: "Titolo 1 notizie dall'estero",
        paragrafi: `<p>Lorem 1 notizie-estero ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor erat. Nunc et venenatis orci, id gravida
        urna. Donec bibendum tempus vehicula. Mauris vestibulum nisi sit amet nulla varius, vitae mattis diam suscipit. Nulla
        dictum massa suscipit, vehicula dui nec, euismod augue. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Curabitur lobortis pellentesque ultricies. Suspendisse ut egestas libero, sit amet vehicula
        orci.</p>
        <p>Duis ultrices, lectus a porttitor tincidunt, ipsum mauris vehicula augue, vitae vestibulum leo ipsum sit amet velit.
        Nulla ornare dolor ac quam commodo, sed fringilla quam sollicitudin. In nec sollicitudin erat. Mauris pretium in turpis
        at pretium. Sed id tortor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec euismod quam at velit maximus, et rhoncus turpis elementum. Ut sit amet felis sollicitudin, pulvinar odio non,
        suscipit nibh. Proin quis augue imperdiet, malesuada turpis et, dignissim dui. Quisque varius id ex id pretium.
        Pellentesque laoreet, justo et cursus commodo, sapien nulla aliquam nunc, pulvinar congue ante sem ut tellus. Praesent
        sed finibus eros. Maecenas malesuada cursus lacus eu efficitur. Nam non turpis nec purus vehicula eleifend. Nam
        facilisis, ante in dapibus auctor, tortor enim lacinia ipsum, sed dapibus massa felis a neque. Proin facilisis nisl
        arcu.</p>
        <p>Etiam pretium magna non sodales rutrum. Cras a tortor vel sem molestie efficitur a vel dui. Aliquam sit amet interdum
        lectus, a vestibulum libero. Vivamus id fermentum nisl. Quisque fermentum sit amet libero vitae mollis. Vivamus non est
        a augue scelerisque malesuada. Vivamus commodo volutpat sem, sed accumsan nisl efficitur et. Sed laoreet aliquam ligula,
        nec blandit eros pretium at. Proin id fringilla leo.</p>`
    },
    {
        categoria: "notizie-estero",
        titolo: "Titolo 2 notizie dall'estero",
        paragrafi: `<p>Lorem 2 notizie-estero ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor erat. Nunc et venenatis orci, id gravida
        urna. Donec bibendum tempus vehicula. Mauris vestibulum nisi sit amet nulla varius, vitae mattis diam suscipit. Nulla
        dictum massa suscipit, vehicula dui nec, euismod augue. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Curabitur lobortis pellentesque ultricies. Suspendisse ut egestas libero, sit amet vehicula
        orci.</p>
        <p>Duis ultrices, lectus a porttitor tincidunt, ipsum mauris vehicula augue, vitae vestibulum leo ipsum sit amet velit.
        Nulla ornare dolor ac quam commodo, sed fringilla quam sollicitudin. In nec sollicitudin erat. Mauris pretium in turpis
        at pretium. Sed id tortor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec euismod quam at velit maximus, et rhoncus turpis elementum. Ut sit amet felis sollicitudin, pulvinar odio non,
        suscipit nibh. Proin quis augue imperdiet, malesuada turpis et, dignissim dui. Quisque varius id ex id pretium.
        Pellentesque laoreet, justo et cursus commodo, sapien nulla aliquam nunc, pulvinar congue ante sem ut tellus. Praesent
        sed finibus eros. Maecenas malesuada cursus lacus eu efficitur. Nam non turpis nec purus vehicula eleifend. Nam
        facilisis, ante in dapibus auctor, tortor enim lacinia ipsum, sed dapibus massa felis a neque. Proin facilisis nisl
        arcu.</p>
        <p>Etiam pretium magna non sodales rutrum. Cras a tortor vel sem molestie efficitur a vel dui. Aliquam sit amet interdum
        lectus, a vestibulum libero. Vivamus id fermentum nisl. Quisque fermentum sit amet libero vitae mollis. Vivamus non est
        a augue scelerisque malesuada. Vivamus commodo volutpat sem, sed accumsan nisl efficitur et. Sed laoreet aliquam ligula,
        nec blandit eros pretium at. Proin id fringilla leo.</p>`
    },
]

for (let i = 0; i < tutteLeNotizie.length; i++) {
    let objArticolo = tutteLeNotizie[i];
    let line = `<div class="`;
    for (prop in objArticolo) {
        if (prop == "categoria") {
            line += `${objArticolo[prop]}">`;
        } else if (prop == "titolo") {
            line += `<h2>${objArticolo[prop]}</h2>`
        } else if (prop == "paragrafi") {
            line += `${objArticolo[prop]}`
        }
    }
    line += `</div>`;
    divArticoli.innerHTML += line;
}