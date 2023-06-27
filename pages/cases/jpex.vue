<template>
  <div>
    <v-layout>
      <Navigation/>
      <v-main>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-my-fund-safe">
            <h1>為什麼 Jpex 一直被指為騙局？</h1>
            <p>坊間一直有不少聲音指出加密貨幣交易所 jp-ex.io 是一場騙局。</p>
            <p>而香港證監會和全球反詐騙組織，都紛紛把 Jpex 列入可疑名單，並建議投資者小心和避免把資金投入此不受規管的平台。</p>
            <p>事實上，Jpex 的運作確實與資金盤騙局有很多相似之處。</p>
            <div class="examples">
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/sfc.png"
                    @click="openModal('/assets/jpex/sfc.png')"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
                <div class="description">
                  香港證監會 - 無牌公司及可疑網站名單
                </div>
              </div>
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/ga-so.png"
                    @click="openModal('/assets/jpex/ga-so.png')"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
                <div class="description">
                  GA-SO全球反詐騙組織 - 詐騙網站名單
                </div>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="case-study">
            <h2>那 Jpex 是騙局嗎？</h2>
            <p>判斷 Jpex 是否騙局前，我們先來了解什麼是加密貨幣或 web3 常見的資金盤騙局。</p>
            <p>下列影片中所提及的「以新錢填補舊錢」，正為資金盤騙局的主要基礎：</p>
            <div class="examples">
              <iframe
                :width="isLargeScreen ? 560 : iframWidth"
                height="315"
                src="https://www.youtube.com/embed/co8EmbhovPQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-jpex-a-scam-2">
            <h2>那麼 Jpex 有否「以新錢填補舊錢」？</h2>
            <p>
              評估有關項目有否「以新錢填補舊錢」、是否能夠有足夠資金可以完全歸還所有投資者，「資金證明」是非常重要的一環來進行評估。
            </p>
            <p>
              於 FTX 加密貨幣交易所崩盤後，各大交易所紛紛推出及定期發佈POR來證明自己沒有挪用用戶資產，並有足夠的資產歸還用戶。有關POR可供投資者自行查閱和驗證。
            </p>
            <p>
              而 Jpex 亦於2022年11月13日公告將會推出POR。可惜直至現在，Jpex還未提供有效的POR證明。
            </p>
            <div class="examples">
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/por/binance.png"
                    @click="openModal('/assets/jpex/por/binance.png')"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
                <div>
                  Binance 儲備證明:
                  <a
                    target="_blank"
                    href="https://www.binance.com/zh-TC/proof-of-reserves"
                    >查看</a
                  >
                </div>
              </div>
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/por/jpex.png"
                    @click="openModal('/assets/jpex/por/jpex.png')"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
                <div>
                  Jpex 用戶資產儲備聲明:
                  <a
                    target="_blank"
                    href="https://blog.jp-ex.io/zh/jpex-reserve-update-20221113/"
                    >查看</a
                  >
                </div>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-jpex-a-scam">
            <h2>Jpex 規模很大，在香港到處廣告，也會是騙局嗎？</h2>
            <p>
              項目的規模，並非應該用以判斷是否騙局的指標。而資金盤騙局主要是基於「新錢填補舊錢」的概念上，有不同的演化，歷史上亦有各式大大小小的資金盤騙局。
            </p>
            <p>
              除了剛剛影片提及的 DC SOLAR 例子外，以下為另一知名且規模非常大的資金盤騙局例子：
            </p>
            <div class="examples">
              <iframe
                :width="isLargeScreen ? 560 : iframWidth"
                height="315"
                src="https://www.youtube.com/embed/iqrGNOCp5Cg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-jpex-licensed">
            <h2>Jpex 不是拿了很多牌照嗎？會有是騙局的可能嗎？</h2>
            <p>
              Jpex 確實是有申請官網所列出的有關牌照。可惜，其有關牌照實際只能證明其為一所「金融業務公司」。
            </p>
            <p>
              而並非擁有「經營」加密貨幣/證券交易平台的資格，亦即代表 Jpex 於美國/加拿大/澳洲/立陶宛都不代表其能「經營」交易平台。
            </p>
            <p>
              除此之外，現時 Jpex 並不符合香港證監會之發牌及過渡期的資格。其在香港「營運」及聯同旗下 KOL「宣傳」已等同犯法。
            </p>
            <div class="examples">
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/license-issue/jpex.jpg"
                    @click="openModal('/assets/jpex/license-issue/jpex.jpg')"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
                <div class="description">
                  Jpex 網站上的牌照:
                  <a target="_blank" href="https://jp-ex.io/zh/about">查看</a>
                </div>
              </div>
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/license-issue/wikibit.jpg"
                    @click="openModal('/assets/jpex/license-issue/wikibit.jpg')"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
                <div class="description">
                  WikiBit 對 Jpex 的牌照評核:
                  <a
                    target="_blank"
                    href="https://www.wikibit.kr/dr/1259547801820.html"
                    >查看</a
                  >
                </div>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="funding-gap">
            <h2>Jpex 的資金缺口有多大？</h2>
            <p>
              根據鏈上數據的統計，Jpex
              現在的資金缺口高達3億7千萬美元，即約29億港幣左右，存量只有實際入金量的9%。
            </p>
            <div class="examples">
              <div>
                <v-img
                  :max-height="450"
                  src="/assets/jpex/funding-gap.png"
                  @click="openModal('/assets/jpex/funding-gap.png')"
                >
                  <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                      <v-progress-circular
                        color="grey-lighten-4"
                        indeterminate
                      ></v-progress-circular>
                    </div>
                  </template>
                </v-img>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="what-makes-the-gap">
            <h2>為什麼 Jpex 可以出現如此大的資金缺口？</h2>
            <p>
              根據鏈上數據顯示，Jpex 一直透過旗下 otc，重複出售同一批 USDT
              穩定幣，令其缺口越變越大。
            </p>
            <div class="examples">
              <div>
                <v-img
                  :max-height="450"
                  src="/assets/jpex/otc/relationship.png"
                  @click="openModal('/assets/jpex/otc/relationship.png')"
                >
                  <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                      <v-progress-circular
                        color="grey-lighten-4"
                        indeterminate
                      ></v-progress-circular>
                    </div>
                  </template>
                </v-img>
              </div>
              <div>
                <v-img
                  :max-height="450"
                  src="/assets/jpex/otc/cy.png"
                  @click="openModal('/assets/jpex/otc/cy.png')"
                >
                  <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                      <v-progress-circular
                        color="grey-lighten-4"
                        indeterminate
                      ></v-progress-circular>
                    </div>
                  </template>
                </v-img>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="what-makes-the-gap">
            <h2>Jpex 與旗下 otc 的關係</h2>
            <p>Jpex 透過打造加密貨幣 KOL/專家的方法，以有關 KOL 吸引大量加密貨幣新手把資金投入 Jpex 平台上的各個項目如 jpc、jpp 並進行長時間質押。</p>
            <p>在盡可能把用戶資金鎖在其平台上的同時，Jpex 把用戶已質押的資金(USDT穩定幣) 以旗下 OTC 重複出售予投資者並重新投入 Jpex 平台上。</p>
            <div class="examples">
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/otc/otcs.png"
                    @click="openModal('/assets/jpex/otc/otcs.png')"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
                <div class="description">
                  以上 OTC 只支援於 Jpex 平台上進行出入金
                </div>
              </div>
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/otc/coingaroo.png"
                    @click="openModal('/assets/jpex/otc/coingaroo.png')"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
                <div class="description">
                  Coingaroo 特別澄清公告:
                  <a
                    target="_blank"
                    href="https://www.instagram.com/p/CquDpZSBR_8/"
                    >查看</a
                  >
                </div>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-my-fund-safe">
            <h2>其實 Jpex 可以出金，應該問題不大？</h2>
            <p>我們可以透過剛剛的影片了解到，資金盤一直是用「新錢填補舊錢」，直到新錢不足以填補舊錢後，騙局就會爆煲。</p>
            <p>而除了資金缺口非常嚴重外，Jpex 對於用戶的資金保障一直存在各種問題，如資金被盗、資金突然減少等。</p>
            <div class="examples">
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/stole-fund/case-steven.png"
                    @click="
                      openModal('/assets/jpex/stole-fund/case-steven.png')
                    "
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
              </div>
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/stole-fund/coingaroo-explanation.png"
                    @click="
                      openModal(
                        '/assets/jpex/stole-fund/coingaroo-explanation.png'
                      )
                    "
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </div>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-my-fund-safe">
            <h2>我有資金在 jpex 的項目上，我該怎麼辦？</h2>
            <p>做任何投資前，理應多了解相關項目的風險。在沒有充分了解前，務必好好保護你的資金。</p>
            <p>打加密貨幣旗號而出現的資金盤騙局不時以不同形式出現，說到底，也只是「新錢填補舊錢」，一旦新錢不足，騙局就會結束，投資者資金當然會一併消失。</p>
            <p>由於我們無法知道騙局實際資本狀況，對於騙局何時會因為資本不足以支撐營運/騙徒決定收網而結束，投資者的資金面臨隨時血本無歸的風險。</p>
            <p>遇上可疑平台/認為有關平台有可疑，應先盡可能取回本金，避免招致損失。</p>
          </section>
        </v-parallax>
      </v-main>
    </v-layout>
    <teleport to="body">
      <ImageModal ref="modal" />
    </teleport>
  </div>
</template>
<script setup>
import { useMediaQuery } from "@vueuse/core";

import Navigation from "/components/Navigation.vue";
import ImageModal from "/components/ImageModal.vue";

useHead({
  title: "Anti Web3 Scam | Case Study - jp-ex.io",
  meta: [{ name: "description", content: "Jp-ex.io 是否詐騙平台之案例探討。" }],
});
const isLargeScreen = useMediaQuery("(min-width: 1024px)").value;
const iframWidth = isLargeScreen ? 560 : 375 - 95;
const modal = ref(null);

const openModal = (imgSrc) => {
  modal.value.open(imgSrc);
};
</script>

<style scoped>
section {
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}
section a {
  color: #fff;
}
section h1,
section h2 {
  text-align: center;
  margin-bottom: 5px;
}
section p {
  text-align: center;
  font-size: 18px;
}
section .examples {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
section .examples .description {
  text-align: center;
  margin-top: 8px;
  font-size: 15px;
}
.source {
  position: fixed;
  bottom: 20px;
  font-size: 16px;
  z-index: 999;
  text-align: center;
  color: #fff;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.source div {
  background-color: #000;
  padding: 5px 10px;
  border-radius: 10px;
}
.source a,
section a:visited,
section a:active,
section a:hover {
  color: #fff;
}


</style>
