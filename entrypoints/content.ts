export default defineContentScript({
  matches: ["*://www.youtube.com/*"],

  main() {
    console.log("🚀 YouTube Summary Extension loaded");
  },
});
