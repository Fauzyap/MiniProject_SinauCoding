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
          <form @submit.prevent="submitData">
            <div class="form-group">
              <label for="">Nama Barang:</label>
              <input type="text" v-model="username" class="form-control" placeholder="Masukan Nama Barang" />
            </div>
            <div class="form-group">
              <label for="">Harga Barang:</label>
              <input type="text" v-model="password" class="form-control" placeholder="Masukan Harga Barang" />
            </div>
            <div class="form-group">
              <label for="">Stok Barang:</label>
              <input type="text" v-model="password" class="form-control" placeholder="Masukan Jumlah Stok Barang" />
            </div>
            <div class="form-group">
              <label for="">Stok Barang:</label>
              <select class="form-select" aria-label="Default select example">
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
export default {};
</script>

<style></style>
