<template>
  <div>
    <v-layout>
      <Navigation/>
      <v-main>
        <div class="content">
          <h1>關於 Anti Web3 Scam</h1>
          <p>我們是一個專注於金融安全與教育的組織。我們的使命是提高公眾對金融騙局的認知，並為網路時代提供一個安全的舞台，讓人們能自由而安全地管理自己的財富。</p>
          <br/>
          <p>在我們的平台上，您將找到多樣的學習資源，如在線課程、研討會和網誌，都旨在協助您瞭解並識別各類金融騙局。我們知道目前的資源可能尚未十分完整，但我們已積極並持續地致力於資訊的收集和內容的製作。</p>
          <br/>
          <p>此外，我們正在創建並不斷豐富一個公開且可搜尋的金融騙局數據庫。儘管這個數據庫在剛開始時可能資訊不多，但我們確信在持續努力和時間的積累下，這個數據庫將能夠提供全面且詳實的已知騙局案例與策略。</p>
          <br/>
          <p>在 Web3 的時代，我們相信透明度和參與性是建立一個更安全金融環境的關鍵。因此，我們提供一個平台讓大家可以報告新的騙局或可疑活動，並透過我們的網路平台持續分享與更新這些資訊，讓所有人都能及時掌握最新的騙局訊息。</p>
          <br/>
          <p>我們樂於合作並建立信任關係，與政府機構、金融服務提供者、學術機構和其他非營利組織都有緊密的聯繫。我們還建立了一個社區，提供一個分享經驗、學習新信息並互相支持的地方。</p>
          <br/>
          <p>我們誠摯歡迎您加入我們的組織，一起打造一個更安全、更透明的金融世界。</p>
        </div>
      </v-main>
    </v-layout>
  </div>
</template>
<script setup>
import Navigation from "/components/Navigation.vue";
useHead({
  title: "Anti Web3 Scam | About Us",
  meta: [{ name: "description", content: "Anti Web3 Scam 致力於提高公眾對 Web3 騙局的防範意識。我們提供準確的資訊，幫助您識別並規避詐騙項目，為打造一個更健康、安全和透明的 Web3 產業共同努力。" }],
});
</script>

<style scoped>
.content {
  padding: 20px;
}
.content h1 {
  font-size: 21px;
  margin-bottom: 20px;
}
.content p {
  font-size: 15px;
}
.site-name {
  color: #fff;
}
</style>
