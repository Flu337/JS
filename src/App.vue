<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
            
            выбери колеса

        </li>
        <li class="dd">
          крутая тачка 

        </li>
      </ul>
    </nav>
  </header>
  <main>
    <!-- <HomePage/> -->
     <RobotBuilder/>
  </main>

</template>

<script setup>
import HomePage from './home/HomePage.vue'
import RobotBuilder from './build/RobotBuilder.vue'
</script>





<style scoped>
body{
  background: linear-gradient(to bottom, #555,#999);
  background-attachment: fixed;
}
.dd{
  position: absolute;
  color: rgb(255, 232, 232);
  text-align: justify;
  font-size: larger;
  font-family: 'Times New Roman', Times, serif;
  text-shadow: #523 32321px;
  top:  100px;
  left: 100px
}

#app{
  font-family: Arial, Helvetica, sans-serif;
}

main{
  margin: 0 auto;
  padding-top: 50px;
  padding: 30px;
  background-color: rgb(201, 201, 201);
  width: 1024px;
  min-height: 300px;
  background-color: #555 ;
}

header{
  background-color: #cacaca;
  width: 1024px;
  margin: 0 auto;
  position: absolute;

}

ul{
  padding: 3px;
  display: flex;
}

.nav-item{
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  border-right: 1px solid #490000;
}
.logo{
  vertical-align: middle;
  height: 30px;
}

</style>
