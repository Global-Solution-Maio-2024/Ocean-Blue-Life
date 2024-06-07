window.watsonAssistantChatOptions = {
  integrationID: "92353fd6-b64b-4270-aad7-a266db9c6a05", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "f3113ce9-265f-4ed4-af2f-ab98dba7629f", // The ID of your service instance.
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
