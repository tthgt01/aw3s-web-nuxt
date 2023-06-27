<template>
  <div>
    <v-layout>
      <Navigation/>
      <v-main>
        <div class="content">
          <h1>關於 Anti Web3 Scam</h1>
          <p>我們的使命是共同維護具有前景但脆弱的 Web3 世界，免受日益威脅的網路詐騙的侵害。在科技行業的飛速發展下，我們觀察到了 Web3 技術和加密貨幣的巨大潛力。然而，隨著其崛起，也出現了大量利用公眾熱情的網路詐騙。</p>
          <br/>
          <p>Web 產業的越漸普及，成為了我們行動的轉折點。為產業的長遠健康發展，我們需要更多的貢獻及資源來對抗欺詐行為。因此，我們成立了 Anti Web3 Scam，致力於賦予公眾識別並規避詐騙項目的知識。</p>
          <br/>
          <p>我們的目標是在 Web3 和加密貨幣世界中建立一個信任和安全的生態系統。來自 Web3 產業的我們會持續分析和研究新興平台，致力於提高公眾對 Web3 騙局的防範意識。我們會盡力提供必要的工具和資源，幫助有意投入這產業的公眾，識別並規避詐騙項目。</p>
          <br/>
          <p>我們堅信，只有當 Web3 技術對每個人都是安全可信的，才能實現其真正的價值。我們致力於打擊欺詐行為，盡全力於詐騙中解救出的每一個人都讓我們離實現更安全、更透明的數字未來的目標更近一步。</p>
          <br/>
          <p>加入我們的使命。我們一起可以創造一個安全、透明、無詐騙的數字空間。讓我們安全、自信地釋放 Web3 和加密貨幣的真正潛力。</p>
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
