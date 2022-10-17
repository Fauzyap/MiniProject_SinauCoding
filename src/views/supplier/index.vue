<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        MARKETPLACE
        <img src="../../assets/img/sinaulogo.png" alt="Logo" width="100" height="30" class="d-inline-block align-text-top" />
      </a>
    </div>
  </nav>

  <div class="container-fluid d-flex gap-5 mt-3">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="card kard align-self-start">
            <img src="../../assets/img/profile.jpg" class="card-img-top" alt="..." />
            <div class="card-body kartu-bodi">
              <h5 class="card-title">{{ name }}</h5>
            </div>
          </div>
          <div class="card my-2">
            <div class="card-header chead text-center">Menu</div>
            <router-link type="button" class="btn btn-outline-primary" to="/indexsup">Supplier</router-link>
            <br />
            <router-link type="button" class="btn btn-outline-primary" to="/indexbar">Barang</router-link>
          </div>
        </div>

        <div class="col-10">
          <div class="card">
            <div class="card-header chead">Dashboard</div>
            <div class="d-flex justify-content-between p-2">
              <caption class="kepsyen">
                Supplier
              </caption>
              <router-link to="/createsup" class="btn btn-primary">Tambah</router-link>
            </div>
          </div>

          <table class="table">
            <thead>
              <tr class="table-active">
                <th scope="col">NO</th>
                <th scope="col">Nama Supplier</th>
                <th scope="col">Alamat</th>
                <th scope="col">No Telpon</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dataTable, index) in dataTable.data" :key="dataTable.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ dataTable.namaSupplier }}</td>
                <td>{{ dataTable.alamat }}</td>
                <td>{{ dataTable.noTelp }}</td>

                <td>
                  <router-link to="#">
                    <button @click="deleteTableRow(dataTable.id)" class="btn btn-danger action">Hapus</button>
                  </router-link>
                  <router-link type="button" class="btn btn-waring" :to="`/updatesup/${dataTable.id}`">Update</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keypsyen {
  font-weight: bolder;
}
</style>

<script>
import axios from "axios";

export default {
  name: "tableSupplier",
  data: function () {
    return {
      dataTable: [],
      name: localStorage.getItem("profileName"),
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        params: {
          offset: 0,
          limit: 15,
        },
      });
      this.dataTable = data;
    },
    async deleteTableRow(id) {
      console.log("id:", id);
      await axios
        .delete("http://159.223.57.121:8090/supplier/delete/" + id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        })
        .then(async (response) => {
          const data = await response.data;

          if (data.status === "OK") {
            alert("Hapus Supplier sukses");
            this.getData();
          }
        });
    },
  },
};
</script>
