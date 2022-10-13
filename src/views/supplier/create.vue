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
            <form>
              <div class="form-group">
                <label for="">Nama Supplier:</label>
                <input type="text"  class="form-control" placeholder="Masukan Nama Supplier" />
              </div>
              <div class="form-group">
                <label for="">Alamat Supplier:</label>
                <input type="text"  class="form-control" placeholder="Masukan Alamat Supplier" />
              </div>
              <div class="form-group">
                <label for="">No Telp Supplier:</label>
                <input type="text"  class="form-control" placeholder="Masukan No Telp Supplier" />
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
  