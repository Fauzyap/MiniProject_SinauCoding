<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        MARKETPLACE
        <img src="../../assets/img/sinaulogo.png" alt="Logo" width="100" height="30" class="d-inline-block align-text-top" />
      </a>
    </div>
  </nav>

  <div class="container mt-5">
    <div class="justify-content-center">
      <div class="card">
        <h5 class="card-header chead text-center">Tambah Barang</h5>
        <div class="card-body">
          <form @submit.prevent="tambahBarang">
            <div class="form-group">
              <label for="namaBarang">Nama Barang:</label>
              <input type="text" v-model="namaBarang" class="form-control" placeholder="Masukan Nama Barang" />
            </div>
            <div class="form-group">
              <label for="hargaBarang">Harga Barang:</label>
              <input type="text" v-model="harga" class="form-control" placeholder="Masukan Harga Barang" />
            </div>
            <div class="form-group">
              <label for="StokBarang">Stok Barang:</label>
              <input type="text" v-model="stok" class="form-control" placeholder="Masukan Jumlah Stok Barang" />
            </div>
            <div class="form-group">
              <label for="inputSup">Supplier Barang:</label>
              <select class="form-select" aria-label="Default select example" v-model="supplier">
                <option v-for="(data,index) in dataSupplier" v-bind:key="index" :value="data">{{ data.namaSupplier }}</option>
              </select>
            </div>
            <div class="col-md-12 d-flex p-2 justify-content-between">
              <router-link to="/indexbar" class="btn btn-secondary">Kembali</router-link>
              <br />
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      namaBarang: "",
      harga: "",
      stok: "",
      supplier: [],
      dataSupplier: [],
    };
  },
  methods: {
    async getSupplier() {
      const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        params: {
          offset: 0,
          limit: 15,
        },
      });
      console.log("data:", data.data);
      this.dataSupplier = await data.data;
    },
    tambahBarang: async function () {
      let dataBarang = {
        namaBarang: this.namaBarang,
        harga: this.harga,
        stok: this.stok,
        supplier: this.supplier,
      };
      await axios
        .post("http://159.223.57.121:8090/barang/create", dataBarang, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        })
        .then(async (response) => {
          const data = await response.data;
          if (data.status === "OK") {
            alert("sukses tambah Barang");
          }
          this.$router.push("/indexbar");
          this.namaBarang = "";
          this.harga = "";
          this.stok = "";
          this.supplier = "";
        });
    },
  },
  created() {
    this.getSupplier();
  },
};
</script>

<style></style>
