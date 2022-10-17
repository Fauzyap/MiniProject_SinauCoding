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
        <h5 class="card-header chead text-center">Tambah Supplier</h5>
        <div class="card-body">
          <form @submit.prevent="tambahSupplier">
            <div class="form-group">
              <label for="namaSupplier">Nama Supplier:</label>
              <input v-model="namaSupplier" type="text" class="form-control" id="namaSupplier" placeholder="Masukan Nama Supplier" />
            </div>
            <div class="form-group">
              <label for="alamat">Alamat Supplier:</label>
              <input v-model="alamat" type="text" class="form-control" id="alamat" placeholder="Masukan Alamat Supplier" />
            </div>
            <div class="form-group">
              <label for="NoTelpSupplier">No Telp Supplier:</label>
              <input v-model="noTelp" type="text" class="form-control" id="NoTelpSupplier" placeholder="Masukan No Telp Supplier" />
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
      namaSupplier: "",
      alamat: "",
      noTelp: "",
    };
  },
  methods: {
    tambahSupplier: async function () {
      let dataSupplier = {
        namaSupplier: this.namaSupplier,
        alamat: this.alamat,
        noTelp: this.noTelp,
      };
      await axios
        .post("http://159.223.57.121:8090/supplier/create", dataSupplier, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        })
        .then(async (response) => {
          const data = await response.data;
          if (data.status === "OK") {
            Vue.swal("sukses tambah Supplier");
          }
          this.$router.push("/indexsup");
          (this.namaSupplier = ""), (this.alamat = ""), (this.noTelp = "");
        });
    },
  },
};
</script>

<style></style>
