<!-- eslint-disable prettier/prettier -->
<template>
  <div class="card">
    <div class="card-title">
        <span>{{title}}</span>
        <img src="https://img.icons8.com/offices/10/000000/chevron-right.png"/>
    </div>
    <div class="card-content">
        <div>
            <div class="content">{{content}}</div>
            <div class="date">{{date}}</div>
            <div v-if="price" class="price">{{price}}</div>
        </div>
        <div v-if="img" class="card-img" :style="{'background-color': color}">
            <div>{{content1}}</div>
            <img :src="img" alt="" >
        </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String,
  date: String,
  price: String,
  content1: String,
  img: String,
  color: String,
})
</script>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    width: 49%;
}
.card-title{
  padding: 9px 12px;
  background-color: #d8d9d9;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
}
.card-title span{
    font-family: SFProText;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
}
.card-title span:first-child{
  padding: 1px;
  background-color: #de2233;
}
.card-content{
  padding: 9px 12px;
  background-color: #f2f2f2;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}
.content{
    font-family: SFProText;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #202529;
}
.card-content .date{
    font-family: SFProText;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #5e6265;
}
.card-content .price{
    font-family: SFProText;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #de2233;
}
.card-img{
    margin: 1px 0 0 8px;
    padding: 8px 5px 6px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.card-img img{
    object-fit: contain;
    max-height: 80%;
    max-width: 80%;
}
</style>