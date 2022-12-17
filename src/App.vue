<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <a href="/">Agenda</a>
    <div>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#dedede"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </span>
      <input type="text" v-model="search" placeholder="Pesquisar..." />
    </div>
  </header>
  <main>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <template v-for="contact in filteredList" :key="contact.id">
          <tbody>
            <tr>
              <th scope="row">{{ contact.id }}</th>
              <td>{{ contact.name }}</td>
              <td>{{ contact.email }}</td>
            </tr>
          </tbody>
        </template>
      </table>
    </div>
  </main>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "App",
  data() {
    return {
      search: '',
      contacts: {},
    };
  },
  created() {
    this.axios.get("http://localhost:3000/contacts").then((response) => {
      this.contacts = response.data;
    });
  },

  computed: {
    filteredList() {
      return this.contacts.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
};
</script>
<!-- eslint-disable prettier/prettier -->
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
