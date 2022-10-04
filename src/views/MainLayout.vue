<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container main-layout">
        <div class="row">
            <div class="col col-left">
                <div class="sidebar">
                    <div class="group">
                        <div class="title">ナビゲーション</div>
                        <div class="item"><img height="24" src="/images/icon_home.svg" alt="">トップ</div>
                        <div class="item"><img height="24" src="/images/icon_person.svg" alt="">マイページ</div>
                    </div>
                    <div class="group">
                        <div class="title">チケット購入</div>
                        <div class="item"><img height="24" src="/images/icon_car.svg" alt="">レース一覧</div>
                        <div class="item"><img height="24" src="/images/icon_win.svg" alt="">特別チケット購入</div>
                    </div>
                    <div class="group">
                        <div class="title">セキュリティ</div>
                        <div class="item"><img height="24" src="/images/privacy.svg" alt="">パスワード変更</div>
                        <div class="item"><img height="24" src="/images/icon_security.svg" alt="">プライバシー</div>
                    </div>
                    <div class="group">
                        <div class="title">その他</div>
                        <div class="item"><img height="24" src="/images/icon_exit.svg" alt="">ログアウトする</div>
                    </div>
                </div>
            </div>
            <div class="col col-right">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.row{
    display: flex;
    justify-content: center;
}
.col-left{
    width: 316px;
    height: 544px;
    margin: 0 22px 1055px 0;
    padding: 20px 20px 0 20px;
    border-radius: 8px;
    background-color: #202529;

}
.col-right{
    width: 862px;
}
.sidebar{
    display: flex;
    flex-direction:column;
    height: 100%;
}
.sidebar .group{
    margin-bottom: 40px;
}
.sidebar .group div{
    margin-bottom: 20px;
}
.title{
    height: 14px;
    font-family: HiraginoSans-W6;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    color: #b0b1b2;
}
.item{
    width: 240px;
    height: 14px;
    font-family: HiraginoKakuGothicProN-W6;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
}
.item img{
    margin: 0 12px 0 0;
}
</style>