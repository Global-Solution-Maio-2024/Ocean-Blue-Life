async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 7.139898800982919, lng: 79.92733219140383 };

  const map = new Map(document.getElementById("map"), {
    zoom: 11,
    center,
    mapId: "4504f8b37365c3d0",
  });

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }
}

function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa-solid fa-water-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
         <h1 class="title">${property.title}</h1>
        
        <div class="description">${property.description}</div>
        <br>
        <div class="text">${property.text}</div>
        <br>
        <h2 class="estrago">${property.estrago}</h2>
        
        <div class="estrago">${property.oleo}</div>
        <br>
        
        <img src="./OceanBlueLife/assets/img/navio.png" style="width: 300px; margin-bottom: 10px; "/>
        
        <hr/>
        <h2 class="estrago" style="color: red;">${property.correntes}</h2>

        <div class="image__container">
          <img src="./OceanBlueLife/assets/img/salinidade.png" style="width:500px; margin-left:4px;"/>
          <img src="./OceanBlueLife/assets/img/temperatura.png" style="width:500px; margin-left:4px;"/>
          <img src="./OceanBlueLife/assets/img/correntes.gif" style="width:500px; margin-left:-10px; "/>
        </div>
      
        <div class="text">${property.data}</div>
        
    </div>
    `;
  return content;
}

const properties = [
  {
    title: "Desastre Marítimo do X-PRESS PEARL e SRI LANKA",
    description:
      "O desastre marítimo do X-Press Pearl foi um incidente que ocorreu em maio de 2021 neste ponto.",
    text: "O navio porta-contêineres X-Press Pearl, de bandeira de Singapura, pegou fogo ao largo da costa do Sri Lanka. O navio transportava uma carga perigosa, incluindo produtos químicos e plásticos, e o incêndio resultou em <strong>graves consequências ambientais e econômicas</strong>",
    estrago: "Tamanho do estrago ambiental",
    oleo: "Apesar dos esforços dos bombeiros e autoridades locais para extinguir as chamas, o navio acabou afundando em águas rasas a cerca de 9,5 quilômetros da costa do Sri Lanka. Isso resultou em um <strong>grande vazamento de óleo e na liberação de uma quantidade significativa de produtos químicos no oceano</strong>, causando sérios danos ao ecossistema marinho e à vida selvagem local.",
    correntes:
      "Modelo de predição de Salinidade, Temperatura e Correntes - Na data e local do ocorrido",
    data: "***Dados de salinidade colaboram para entender o comportamento das correntes. Dados de temperatura colaboram para entender o comportamento das correntes",
    temperatura:
      "Modelo de predição de Temperatura - Na data e local do ocorrido",
    type: "ocean",
    size: 300,
    position: {
      lat: 7.110269213822187,
      lng: 79.82028682616873,
    },
  },
];

initMap();
