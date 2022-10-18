<template>
  <navbar />

  <div class="container-fluid d-flex gap-5 mt-3">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <sidebar/>
        </div>

        <div class="col-10">
          <div class="card">
            <div class="card-header chead">Dashboard</div>
            <div class="d-flex justify-content-between p-2">
              <caption class="kepsyen">
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
                  <router-link to="#">
                    <button @click="deleteTableRow(dataTable.id)" class="btn btn-danger action">Hapus</button>
                  </router-link>
                  <router-link type="button" class="btn btn-waring" :to="`/updatebar/${dataTable.id}`">Update</router-link>
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
.kepsyen {
  font-weight: bolder;
}
</style>

<script>
import router from "@/router";
import axios from "axios";
import navbar from "../../components/navbar.vue";
import sidebar from "../../components/sidebar.vue";

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
    components: {
    navbar,
    sidebar,
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
        logout() {
            localStorage.clear();
            setTimeout(() => {
                router.push({
                    path: "/",
                }, 3000);
            });
        },
        async deleteTableRow(id) {
            console.log("id:", id);
            await axios
                .delete("http://159.223.57.121:8090/barang/delete/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            })
                .then(async (response) => {
                const data = await response.data;
                if (data.status === "OK") {
                    alert("Hapus Barang sukses");
                    this.getData();
                }
            });
        },
    },
    
};
</script>
