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
              <caption>
                Barang
              </caption>
              <router-link to="/createbar" class="btn btn-primary">Tambah</router-link>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr class="table-active">
                <th scope="col">NO</th>
                <th scope="col">Nama Barang</th>
                <th scope="col">Stock</th>
                <th scope="col">Harga</th>
                <th scope="col">Nama Supplier</th>
                <th scope="col">Alamat Supplier</th>
                <th scope="col">No Telp Supplier</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dataTable, index) in dataTable.data" :key="dataTable.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ dataTable.namaBarang }}</td>
                <td>{{ dataTable.stok }}</td>
                <td>{{ dataTable.harga }}</td>
                <td>{{ dataTable?.supplier?.namaSupplier }}</td>
                <td>{{ dataTable?.supplier?.alamat }}</td>
                <td>{{ dataTable?.supplier?.noTelp }}</td>
                <td>
                  <button type="button" class="btn btn-danger m-1">Hapus</button>
                  <router-link type="button" class="btn btn-waring" to="/home">Update</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "tableBarang",
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
      const { data } = await axios.get("http://159.223.57.121:8090/barang/find-all", {
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
  },
};
</script>
