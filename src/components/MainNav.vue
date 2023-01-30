<template>
  <div class="header">
    {{msg1}}
    {{msg2}}
    {{msg3}}


  </div>
  <div class="navbar">
    <div>
      <a href="#home">Home</a>
    </div>
    <div>
      <a href="#about">About Us</a>
    </div>
    <div>
      <a href="#contact">Programmes</a>
    </div>
      <div class="subnav">
      <button class="subnavbtn">Short Cousres <i class="fa fa-caret-down"></i></button>
      <div class="subnav-content">
        <a href="#bring">Bring</a>
        <a href="#deliver">Deliver</a>
        <a href="#package">Package</a>
        <a href="#express">Express</a>
      </div>
    </div>
    </div>


</template>

<script>
export default {
  name: 'MainNav',
  props: {
    msg1: String,
    msg2: String,
    msg3: String

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
/* The navigation menu */
.navbar {
  overflow: hidden;
  background-color: green;
}

/* Navigation links */
.navbar a {
  float: left;
  font-size: 18px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The subnavigation menu */
.subnav {
  float: left;
  overflow: hidden;
}

/* Subnav button */
.subnav .subnavbtn {
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

/* Add a red background color to navigation links on hover */
.navbar a:hover, .subnav:hover .subnavbtn {
  background-color: blue;
}

/* Style the subnav content - positioned absolute */
.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: blue;
  width: 100%;
  z-index: 1;
}

/* Style the subnav links */
.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
}

/* Add a grey background color on hover */
.subnav-content a:hover {
  background-color: #eee;
  color: darkgreen;
}

/* When you move the mouse over the subnav container, open the subnav content */
.subnav:hover .subnav-content {
  display: block;
}
.header{
  font-family: FreeSerif;
  font-size: 40px;
  background-color: aqua;
}
</style>
