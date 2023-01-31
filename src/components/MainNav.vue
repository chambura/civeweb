<template>
  <div class="header">
          <img alt="UDOM Logo" src="../../public/udomlogo-removebg-preview.png"/>
          <h1>DEPARTMENT OF COMPUTER SCIENCE</h1>
          <h2>College of Informatics and Virtual Education</h2>
          <h3>University of DODOMA</h3>
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
        <a href="#bring">Course 1</a>
        <a href="#deliver">ourse 2</a>
        <a href="#package">ourse 3</a>
        <a href="#express">ourse 4</a>
      </div>
    </div>
    </div>


</template>

<script>
export default {
  name: 'MainNav',
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
  background-color: rgb(0, 217, 255);
}

/* Style the subnav content - positioned absolute */
.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: rgb(23, 23, 196);
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
.header {
  font-family: FreeSerif;
  background-color: rgb(166, 202, 226);
  margin-top: -40px;
  padding-top: 0%;
  text-align: center;
}
img {
  height: 250px;
  width: 250px;
  display: flex;
  padding-top: 0px;
  margin-top: 0px;
  position: absolute;
  align-content: flex-start;
  float: left;
}
h1 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 60px;
  color: blue;
}
h2 {
  font-family:'Times New Roman', Times, serif;
  font-size: 50px;
  color: rgb(221, 10, 98);
}
h3 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 40px;
  color: rgb(2, 17, 5);

}
</style>
