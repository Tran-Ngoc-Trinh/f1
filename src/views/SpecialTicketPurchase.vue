<template>
  <div class="container">
    <div class="row block-1">
      <div class="group">
        <div class="title">2022年全日本スーパーフォーミュラ選手権</div>
        <div>
          <span class="item">トップ</span>
          <img src="https://img.icons8.com/offices/13/000000/chevron-right.png"/>
          <span class="item">レース一覧</span>
          <img src="https://img.icons8.com/offices/13/000000/chevron-right.png"/>
          <span class="item">2022年全日本スーパーフォーミュラ選手権</span>
        </div>
      </div>
    </div>
    <div class="row block-2">
      <div class="group">
        <img src="/images/super_formula.JPG" alt="">
        <div>2022年全日本スーパーフォーミュラ選手権</div>
      </div>
    </div>
    <div class="row block-3">
      <div class="group">
        <div class="title">
          <div></div>
          <span>開催期間</span>
        </div>
        <div>
          <span class="font1">2022年</span>
          <span class="font2">9</span>
          <span class="font1">月</span>
          <span class="font2">23</span>
          <span class="font1">日</span>
          <span class="font1">(金・祝)</span>
          <span class="font2">~</span>
          <span class="font1">2022年</span>
          <span class="font2">10</span>
          <span class="font1">月</span>
          <span class="font2">10</span>
          <span class="font1">日</span>
          <span class="font1">(月・祝)</span>
        </div>
      </div>
    </div>
    <div class="row block-4">
      <div class="group">
        <div class="title">
          <div></div>
          <span>選択中施設</span>
        </div>
        <div class="bold">
          グランドスタンド
        </div>
      </div>
    </div>
    <div class="row block-5">
      <div class="group">
        <div class="title">
          <div></div>
          <span>抽選販売</span>
        </div>
        <CarkTicket title="受付中" content="グランドスタンド"  date="申し込み期間 2022/3/12金10:00~2022/3/15日20:00"/>
      </div>
    </div>
    <div class="row block-6">
      <div class="group">
        <div class="title">
          <div></div>
          <span>抽選販売</span>
        </div>
        <div class="title1">自由観戦券</div>
        <div class="card">
          <CarkTicket title="受付中" content="自由観戦券"  date="申し込み期間 2022/3/12金10:00~2022/3/15日20:00"
          price="3,300円" content1="残りわずか" img="/images/icon_triangle.svg" color="#ffba00" />
          <CarkTicket title="受付中" content="3/14土「週末観戦特別券」キャンペーン適用"  date="申し込み期間 2022/3/12金10:00~2022/3/15日20:00"
           price="24,800円" content1="在庫あり" img="/images/icon_circle.svg" color="#37cc00" />
        </div>
        <div class="title1">指定席</div>
        <div class="card">
          <CarkTicket title="終了" content="指定席券グランドスタンド L1~L9"  date="販売期間2022/3/12金10:00~2022/3/15日20:00"
          price="1,100円" content1="在庫無し" img="/images/icon_close.svg" color="#de2233" />
        </div>
        <div class="title1">ファンシート</div>
        <div class="card">
          <CarkTicket title="受付中" content="自由観戦券"  date="販売期間2022/3/12金10:00~2022/3/15日20:00"
          price="24,800円" content1="在庫あり" img="/images/icon_circle.svg" color="#37cc00" />
        </div>
        <div class="title1">駐車券</div>
        <div class="card">
          <CarkTicket title="売り切れ" content="駐車券抽選"  date="販売期間2022/3/12金10:00~2022/3/15日20:00"
          price="800円" content1="販売期間外" img="/images/icon.svg" color="#727578" />
          <CarkTicket title="購入上限超過" content="駐車券抽選"  date="販売期間2022/3/12金10:00~2022/3/15日20:00"
          price="800円" content1="購入上限超過" img="/images/icon.svg" color="#727578" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CarkTicket from "./../components/CardTicket.vue"
</script >
<style scoped>
.container {
  font-family: HiraginoKakuGothicProN-W6;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.row{
  border-radius: 8px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
}
.row .title{
  display: flex;
  align-items: center;
}
.row .title div{
  width: 3px;
  height: 16px;
  margin: 0 8px 0 0;
  background-color: #de2233;
}
.row .title span{
  height: 16px;
  font-family: HiraginoKakuGothicProN-W6;
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
  color: #202529;
}
.block-1{
  background-color: #202529;
}
.block-1 .group{
   margin: 16px 0 22px 24px;
}
.block-1 img{
  margin: 0 4px
}
.title{
  height: 24px;
  font-size: 24px;
  color: #fff;
  margin-bottom: 8px;
}
.item{
  color: #f2f2f2;
  height: 12px;
}
.item:last-child{
  color: #87898b;
}
.item-icon{
  margin: 0 5px;
}
.block-2{
  background-color: #fff;
}
.block-2 .group div{
  font-family: SFProText;
  font-size: 20px;
  font-weight: bold;
  color: #202529;
  margin: 12px 0 24px 24px;
}
.block-2 img{
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
}
.block-3, .block-4, .block-5, .block-6{
  background-color: #fff;
  margin: 23px 0 23px 2px;
  padding: 24px;
}
.bold{
  font-weight: bold;
}
.block-6 .title1{
  margin: 16px 532px 12px 0;
}
.card{
  display: flex;
  justify-content: space-between;
}
.font1{
  height: 18px;
  font-family: SFProText;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #202529;
}
.font2{
  height: 38px;
  font-family: SFProText;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.66;
  letter-spacing: normal;
  text-align: left;
  color: #202529;
}
</style>