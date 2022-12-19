<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <div class="container">
      <div class="row d-flex align-items-center mt-3">
        <div class="col">
          <a href="/">Agenda</a>
        </div>
        <div class="col wrapper-search">
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
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col" style="padding-left: 40px;">Ações</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="contact in filteredList" :key="contact.id">          
            <tr>
              <th scope="row">{{ contact.id }}</th>
              <td>{{ contact.name }}</td>
              <td>{{ contact.email }}</td>
              <td>
                <router-link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                </router-link>

                <router-link :to="{name: 'contact'}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </router-link>

                <a @click="removeAllTutorials(contact.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </a>
              </td>
            </tr>          
          </template>
        </tbody>
      </table>
    </div>
  </main>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "IndexPage",
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
  },

  methods: {
    removeAllTutorials(id) {
      this.axios.delete("http://localhost:3000/contacts/"+`${id}`).then((response) => {
        this.contacts = response.data;
      });
    }
  }
};
</script>
<!-- eslint-disable prettier/prettier -->
<style>
header {
  background-color: rgb(133, 133, 245);
  height: 80px;
  overflow: hidden;
}

header a {
  color: white;
  text-decoration: none;
  padding: 0 20px;
}

header .wrapper-search {
  display: block;
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

.table-hover {
  cursor: pointer;
}

svg {
  margin: 10px;
}

td a:nth-child(1) {
    color: rgb(198, 198, 28);
}

td a:nth-child(1):hover {
  color: rgb(129, 129, 17);
}

td a:nth-child(2) {
  color: rgb(28, 107, 198);
}

td a:nth-child(3) {
  color: rgb(198, 28, 51);
}

</style>
