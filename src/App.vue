<template>
  <header>
    <a href="/">Agenda</a>
    <div>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dedede" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </span>
      <input type="text" placeholder="Pesquisar..." />
    </div>
  </header>

  <main>
    

  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return { }
  },
  created() {
    this.axios.get("http://localhost:3000/contacts").then((response) => {
      console.log(response.data);
    });
  },
};
</script>
<style>
header {
  background-color: rgb(133, 133, 245);
  height: 60px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

header a {
  color: white;
  text-decoration: none;
  padding: 0 20px;
}

header div {
  display: flex;
  position: relative;
  min-width: 1200px;
  margin: auto;
}

header span {
  position: absolute;
  right: 10px;
  top: 8px;
}

header input {
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
}
</style>
