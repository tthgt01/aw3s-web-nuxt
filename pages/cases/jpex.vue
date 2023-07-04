<template>
  <div>
    <v-layout>
      <Navigation/>
      <v-main>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-my-fund-safe">
            <h1>為什麼 JPEX 一直被指為騙局？</h1>
            <p>坊間一直有不少聲音指出<br/>加密貨幣交易所 JPEX 是一場騙局。</p>
            <br/>
            <p>而香港證監會和全球反詐騙組織，<br/>都紛紛把 JPEX 列入可疑名單，<br/>並建議投資者小心<br/>和避免把資金投入此不受規管的平台。</p>
            <br/>
            <p>經深入調查發現，<br/>JPEX 的運作確實與資金盤騙局有很多相似之處。</p>
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
                  香港證監會 - 無牌公司及可疑網站名單<br/>
                  <a
                    target="_blank"
                    href="https://www.sfc.hk/TC/alert-list/2850"
                    >查看</a
                  >
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
                  GA-SO全球反詐騙組織 - 詐騙網站名單<br/>
                  <a
                    target="_blank"
                    href="https://www.globalantiscam.org/scam-websites/j"
                    >查看</a
                  >
                </div>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="case-study">
            <h2>那 JPEX 是騙局嗎？</h2>
            <p>判斷 JPEX 是否騙局前，我們先來了解什麼是常見的資金盤騙局。</p>
            <p>下列影片中所提及的「以新錢填補舊錢」，正為資金盤騙局的主要基礎：</p>
            <div class="examples">
              <iframe
                src="https://www.youtube.com/embed/co8EmbhovPQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <br/>
            <p class="remark">另外，我們也收集了 ChatGPT4 根據資金盤的特徵<br/>對 JPEX 的評估：<button type="button" @click="openModal('/assets/jpex/chatgpt.jpg')">參閱</button></p>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-jpex-a-scam-2">
            <h2>JPEX 有否「以新錢填補舊錢」？</h2>
            <p>
              評估加密貨幣交易所有否「以新錢填補舊錢」、是否有足夠資金可以隨時完全歸還所有投資者，「資金證明(PoR)」是非常重要的一環。
            </p>
            <br/>
            <p>
              FTX 交易所崩盤後，各大交易所都定期發佈PoR來證明自己沒有挪用用戶資產。
            </p>
            <p>
              而 JPEX 亦於2022年11月13日公告將會推出PoR。但直至現在， JPEX 還未提供有效的PoR證明。
            </p>
            <br/>
            <p>
              幸好，區塊鏈是公開透明，任何人都可查閱。而經深入調查鏈上數據發現，
            </p>
            <p>JPEX 有十分大的資金缺口，所以有理由相信他們是典型的資金盤騙局。這也解釋了為什麼他們做不到 PoR。</p>
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
                <div class="description">
                  Binance 儲備證明:<br/>
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
                <div class="description">
                  Jpex 用戶資產儲備聲明:<br/>
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
            <h2>JPEX的規模好像很大，在香港到處廣告，又有名人加持，也會是騙局嗎？</h2>
            <p>
              項目的宣傳規模，並非有效判斷是否騙局的指標。
              <br/>
              很多騙局之所以有資金做到大型宣傳，正正是因為他們挪用了客戶資金。
              <br/>
              如FTX花了數以十億計美金做宣傳，最後發現大部分的宣傳費都是挪用了客戶資金。
            </p>
            <p>
              除了剛剛影片提及，連股神巴菲特都中伏的例子的 DC SOLAR 外，以下為另一個宣傳規模非常大的資金盤騙局例子：
            </p>
            <div class="examples">
              <iframe
                src="https://www.youtube.com/embed/iqrGNOCp5Cg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p>
              由此可見，大型的廣告宣傳以及KOL在大家面前建立的富人形象，都只是騙徒為了獲取你的信任的手法。
              <br/>
              只要令很多人中計，那麼再多的廣告費，買再多的名車名錶，對騙徒來說都是能輕鬆回本的。
            </p>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-jpex-licensed">
            <h2>JPEX 不是拿了很多牌照嗎？會有是騙局的可能嗎？</h2>
            <p>
              經查證， JPEX 擁有的牌照為「金融業務公司」。
              <br/>
              並無賦與其「經營」加密貨幣交易平台的資格。
              <br/>
              故 JPEX 於美國/加拿大/澳洲/立陶宛，都不能「經營」加密貨幣交易平台。
              <br/>
              JPEX 只是利用大眾對牌照制度不認識去混水換魚。
            </p>
            <p>
              同時， JPEX 並不符合香港證監會之發牌過渡期的資格。
              <br/>
              其在香港「營運」及聯同旗下 KOL「宣傳」經已犯法。
            </p>
            <div class="examples">
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/license-issue/jpex.png"
                    @click="openModal('/assets/jpex/license-issue/jpex.png')"
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
                  Jpex 網站上的牌照:<br/>
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
                  WikiBit對Jpex牌照評核:<br/>
                  <a
                    target="_blank"
                    href="https://www.wikibit.kr/dr/1259547801820.html"
                  >查看</a>
                </div>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="what-makes-the-gap">
            <h2>那麼 JPEX 的資金缺口有多大？</h2>
            <p>
              根據鏈上數據顯示，JPEX 一直透過旗下 OTC，重複出售JPEX內的 USDT 穩定幣，令其缺口越變越大。
              <br/>
              現在的資金缺口估計高達3億3千萬美元，即約26億港幣左右，存量只有實際入金量的9%。
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
            <h2>JPEX 與旗下 OTC 的關係</h2>
            <p>
              JPEX 透過打造針對不同群眾的加密貨幣 KOL/專家，開設多間OTC，舉辦很多實體講座以及利用網上的投資交流群組。
              <br/>
              JPEX 透過提供一條龍服務，吸引大量加密貨幣新手把資金投入其平台上的各個項目如 JPC、JPP 並進行長時間質押。
            </p>
            <p>在盡可能把用戶資金鎖在其平台上的同時，JPEX 把用戶已存入 JPEX 的資金(USDT穩定幣) 在旗下 OTC 重複出售予投資者並重新投入 JPEX 平台上。</p>
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
                  以上 OTC 幾乎只支援於 JPEX 平台上進行出入金
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
                  Coingaroo 特別澄清公告:<br/>
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
            <h2>我已經用了 JPEX 很久，一直可以出金，應該問題不大？</h2>
            <p>我們可以透過剛剛的影片了解到，資金盤一直是用「新錢填補舊錢」，直到新錢不足以填補舊錢後，騙局就會崩盤。</p>
            <p>
              而除了資金缺口非常嚴重外，JPEX 對於用戶的資金保障一直存在各種問題，如資金被盗、資金莫名奇妙減少等。
              <br/>
              另外平台也有很多做假，對用戶不友善的地方，甚至涉及洗黑錢之嫌，之後會有更詳細說明。
            </p>
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
                <div class="description">
                  資金被盗事件之一:<br/>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/groups/495950654340065/permalink/1286766811925108/"
                    >查看</a
                  >
                </div>
              </div>
              <div>
                <div>
                  <v-img
                    :max-height="450"
                    src="/assets/jpex/stole-fund/ppt.png"
                    @click="
                      openModal(
                        '/assets/jpex/stole-fund/ppt.png'
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
                <div class="description">
                  資金莫名減少事例:<br/>
                  <a
                    target="_blank"
                    href="https://www.ptt.cc/bbs/DigiCurrency/M.1670160071.A.FE9.html"
                    >查看</a
                  >
                </div>
              </div>
            </div>
          </section>
        </v-parallax>
        <v-parallax src="https://wallpapercave.com/wp/wp2406485.jpg">
          <section class="is-my-fund-safe">
            <h2>我有資金在 JPEX 的項目上，我該怎麼辦？</h2>
            <p>以加密貨幣為噱頭的資金盤騙局經常出現，<br/>說到底，也只是「新錢填補舊錢」，<br/>一旦新錢不足，騙局就會結束，<br/>投資者資金當然會一併消失。</p>
            <br/>
            <p>由於我們無法知道騙局實際資本狀況<br/>以及執法機構的調查進度，<br/>對於騙局何時會因為資本不足以支撐營運<br/>或騙徒為逃避執法而決定收網，<br/>我們並不能提供一個預計，<br/>投資者的資金會面臨隨時血本無歸的風險。</p>
            <br/>
            <p>東張西望｜ 近二百名事主疑墮進虛擬貨幣騙局而血本無歸！<br/><a href="https://www.youtube.com/watch?v=bAzvUSXactM" target="_blank">按此查看</a></p>
            <br/>
            <p>一個沒有顯示倒數時間的計時炸彈，<br/>你能預計何時會爆嗎？</p>
            <br/>
            <p>我們建議當遇上任何有可疑平台時，<br/>應先盡可能取回本金，避免招致損失。</p>
            <br/>
            <p>有關以上調查結果的更詳細證據，稍後將完整公佈。</p>
            <!-- <p>有關以上調查結果的更詳細證據，可參閱: <a
              target="_blank"
              href="/cases/jpex-detail"
            >查看</a></p> -->
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
import Navigation from "/components/Navigation.vue";
import ImageModal from "/components/ImageModal.vue";

useHead({
  title: "Anti Web3 Scam | Case Study - jp-ex.io",
  meta: [{ name: "description", content: "Jp-ex.io 是否詐騙平台之案例探討。" }],
});
const modal = ref(null);

const openModal = (imgSrc) => {
  modal.value.open(imgSrc);
};
</script>

<style scoped>
section {
  height: 100vh;
  padding: 0 25px;
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
  font-size: 16px;
}
section .examples {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 15px;
  margin-bottom: 15px;
}
section .examples iframe {
  width: 280px;
  height: 145px;
}
section .examples .description {
  text-align: center;
  margin-top: 8px;
  font-size: 12px;
}
section .remark {
  text-align: center;
  font-size: 13px;
}
section .remark button {
  text-decoration: underline;
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

@media only screen and (min-width:961px) {
  section .examples iframe {
    width: 560px;
    height: 315px;
  }
}
</style>
