window.watsonAssistantChatOptions = {
  integrationID: "92353fd6-b64b-4270-aad7-a266db9c6a05",
  region: "au-syd",
  serviceInstanceID: "f3113ce9-265f-4ed4-af2f-ab98dba7629f",
  onLoad: async (instance) => {
    await instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
