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
        <strong class="title">${property.title}</strong>
        <br>
        <div class="description">${property.description}</div>
    </div>
    `;
  return content;
}

const properties = [
  {
    title: "Desastre Marítimo do X-PRESS PEARL e SRI LANKA",
    description:
      "O desastre marítimo do X-Press Pearl foi um incidente que ocorreu em maio de 2021. O navio porta-contêineres X-Press Pearl, de bandeira de Singapura, pegou fogo ao largo da costa do Sri Lanka. O navio transportava uma carga perigosa, incluindo produtos químicos e plásticos, e o incêndio resultou em graves consequências ambientais e econômicas.",
    type: "ocean",
    size: 300,
    position: {
      lat: 7.110269213822187,
      lng: 79.82028682616873,
    },
  },
];

initMap();
