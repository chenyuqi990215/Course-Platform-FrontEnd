<template>
  <div class="footer-container">
    <footer>
      <ul class="footer-list">
        <li>
          <p class="about-us">关于我们：</p>
        </li>
        <li>
          <a href="https://github.com/MoriningPerson">
            <p>@Stella</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/chenyuqi990215">
            <p>@Olaf</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/zzpzbl"><p>@Zzpzbl</p></a>
        </li>
        <li>
          <a href="#"><p>@wcy</p></a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default
{
  name: "Footer"
}
</script>

<style scoped>

div.footer-container {
  color:rgb(188,188,188);
  background-color: rgb(78, 78, 78);
}

ul {
  width: 20cm;
  margin: 0 auto;
  list-style-type: none;
  display:flex;
}

p {
  margin:20px 40px;
}

a:hover {
  color:white;
}

a {
  color:rgb(188,188,188);
}

.about-us{
  font-weight: bold;
}


</style>
