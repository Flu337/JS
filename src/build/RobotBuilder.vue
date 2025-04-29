<template>
 <div>
  <button class="add-to-cart" @click="addToCart()">В КОРЗИНУ</button>
        <div class="top-row">
        </div>
        <div class="car">
          <img class="ff" src="../assets/pictures_originals_2014_Auto___Maybach_Beautiful_car_Saab_9-3_in_Moscow__060895_.jpg" alt="">
        </div>
        <div class="middle-row">
            <div class="left part">
                <img class="leftimg" :src="selectedRobot.leftArm.src" title="arm">
                <button @click="selectPreviosArm()" class="prev-selector">&#9651;</button>
                <button @click="selectNextArm()" class="next-selector">&#9661;</button>
            </div>
            <div class="right part">
                <img class="rightimg" :src="selectedRobot.rightArm.src" title="arm">
                <button @click="selectPreviosRightArm()" class="prev-selector">&#9651;</button>
                <button @click="selectNextRightArm()" class="next-selector">&#9661;</button>
            </div>
        </div>
    </div>
</template>

<script>
import availableParts from '../data/parts'

function getPreiosValidIndex(index, length){
  const decIndex = index -1;
  return decIndex < 0 ? length -1 : decIndex;
}

function getNextValidIndex(index, length){
  const incIndex = index +1;
  return incIndex > length -1 ? 0 : incIndex;
}

export default {
    name: 'RobotBuilder',
    data(){
        return {
            availableParts,
            cart: [], 
            selectedArmIndex: 0,
            selectedArmRightIndex: 0,

        }
    },
    
    computed:{
      selectedRobot(){
        return{
          leftArm: availableParts.arms[this.selectedArmIndex],
          rightArm: availableParts.arms[this.selectedArmRightIndex],
      }
      }
    },

    methods:{
      addToCart(){
        const robot = this.selectedRobot;
        const cost = robot.head.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost;
        this.cart.push(Object.assign(robot, { cost }))
      },

      selectNextArm(){
          this.selectedArmIndex = getNextValidIndex(this.selectedArmIndex, 
            availableParts.arms.length
          )
      },
      selectPreviosArm(){
          this.selectedArmIndex = getPreiosValidIndex(this.selectedArmIndex, 
            availableParts.arms.length
          )
      },
      selectNextRightArm(){
          this.selectedArmRightIndex = getNextValidIndex(this.selectedArmRightIndex, 
            availableParts.arms.length
          )
      },
      selectPreviosRightArm(){
          this.selectedArmRightIndex = getNextValidIndex(this.selectedArmRightIndex, 
            availableParts.arms.length
          )
      },
    
    }
}
</script>

<style>
.leftimg{
  display: flex;
  position: absolute;
  left: 16px;
  top: 8px;
}
.rightimg{
  display: flex;
  position: absolute;
  left: -5px;
  top: 8px;
}
.car{
  display: flex;
  width: 500px;
}
.ff{
  display: flex;
  width: 500px;
  justify-content: center;
}
.part {
  position: relative;
  width: 105px;
  height: 105px;
 
}
.part {
  img {
    width: 80px;
  }
}
.top-row {
  display: flex;
  justify-content: space-around;
  padding-top: 60px;
}
.middle-row {
  width: 1000px;
 position: absolute;
  display: flex;
left: 500px;
top: 585px;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
  width: 280px;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 10px;
  height: 100px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 175px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -100px;
  left: -3px;
  width: 30px;
  height: 25px;
}
.left .next-selector {
  top: 100px;
  bottom: -28px;
  left: -3px;
  width: 30px;
  height: 25px;
}
.right .prev-selector {
  top: -100px;
  left: 24px;
  width: 30px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 30px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale{
  color:red
}

.add-to-cart{
  margin-top: 30px;
}

td, th{
  text-align: left;
  padding: 5px;
  padding-right: 20px;;
}

.cost{
  text-align: left;
}
</style>
