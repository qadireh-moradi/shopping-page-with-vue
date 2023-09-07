


<script src="./FetchData.js"></script>

<template>
       <div class="cover" id="cover"></div>
    
    <div class="item"  v-for="item in data" >
      
        <div class="imageswrapper">
            <div class="addBasket" @click="openModal('Row_'+item.id,item.id)">+</div>
            <div class="image">
         
            <img :src="item.image" width="80" />
        </div>
        </div>
        
        <div class="cost" >{{ item.cost }}</div>
        <div class="title" >
           {{item.name }}
        </div>
        <div class="modal" :id="['Row_' + item.id]" >
        <div class="modal-header">
          <button @click="closeModal()" class="close-button">close</button>
        </div>
        <div class="modal-body">
            <ul class="basket_list" id="basket_list">
                <li v-for="basket in addToBasketResult">
                  <div class="basket_image">
                    <div class="basket_image_wrapper">
                    <img :src="basket.image" width="80" />
                  </div>
                  <div class="buttons">
                    <span @click="plusBasket(basket.id)">+</span>
                    <span class="counts">{{basket.count}}</span>
                    <span  @click="minusBasket(basket.id)">-</span>
                  </div>
                  </div>
                  <div class="basket_title_wrapper">
                    <span class="basket_cost">{{basket.cost}}</span>
                    <span class="basket_title">{{ basket.name }}</span>
                  </div>
                </li>
            </ul>
        </div>
        <div class="modal-footer">
            <div class="basket_info">
              <ul>
                <li><span class="basket_info_title">Delivery fee</span><span>2$</span></li>
                <li><span class="basket_info_title">Total</span><span>200$</span></li>
              </ul>
             
            </div>
            <div class="clr" ></div>
            <button class="checkout">Chekout</button>
        </div>
    </div>
    </div>

</template>

<style scoped>
.close-button{
  font-size: 11px;
  border-radius: 5px;
  border:0;
  background-color: #ccc;
  margin: 15px ;
  cursor: pointer;
  padding: 5px 10px;
}
.modal-header{
  border-bottom: 1px solid #ccc;
}
.clr{
  clear: both;
}
.checkout{
  background-color: #177756;
  color: #fff;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  margin:0  auto;
  padding: 15px;
  border: 0;
  display: block;
  margin-top: 15px;
}
.basket_info_title{
  font-weight: bold;
}
.basket_info{
  padding: 15px;
}
.basket_info li{
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 15px
}
.modal-body{
  padding: 15px;
}
.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  margin: 0 auto;
  background-color: #ebffff;
  color: #068581;
  position: relative;
  top: -20px;
  border-radius: 10px;
}
.buttons .counts{
  font-size: 11px;
}
.buttons span{
  display: inline-block;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.basket_list li{
  display: flex;

}
.basket_list .basket_title{
  color: #96969d;
  font-size: 12px;
  margin-left: 10px;
}
.basket_list .basket_cost{

  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.basket_title_wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
}
.basket_image_wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #e9e9ee;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}

</style>
