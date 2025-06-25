function cartHandler() {
  return {
    activePage: 'dashboard',
    // Login Admin
    loginEmail: '',
    loginPassword: '',
    isPasswordVisible: false,
    login() {
      // Login admin hanya cek ke email dan password default
      const storedEmail = 'rizaldoricky@gmail.com';
      const storedPassword = 'jayapura11';
      if (this.loginEmail === storedEmail && this.loginPassword === storedPassword) {
        Swal.fire({
          title: 'Login Berhasil!',
          text: 'Selamat datang di dashboard.',
          icon: 'success',
          confirmButtonText: 'Lanjut',
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then(() => {
          localStorage.setItem('isLoggedIn', 'true');
          window.location.href = 'index.html'; // Ganti dashboard.html ke index.html
        });
      } else {
        Swal.fire({
          title: 'Login Gagal!',
          text: 'Email atau password salah.',
          icon: 'error',
          confirmButtonText: 'Coba Lagi'
        });
      }
    },
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    setAdminCredentials(email, password) {
      localStorage.setItem('adminEmail', email);
      localStorage.setItem('adminPassword', password);
    },
    // ===================== PRODUK DASHBOARD =====================
    // Data Produk ...
    products: [ 
      { name: 'Noken Kecil', price: 150000, diskon: 300000, image: 'assets/img/rajutan-kulit-kayu/10.png', descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Kecil 2', price: 180000, diskon:  350000, image: 'assets/img/rajutan-kulit-kayu/16.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Anyaman', price: 180000, diskon:  350000, image: 'assets/img/rajutan-kulit-kayu/11.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Besar', price: 250000, diskon: 400000, image: 'assets/img/rajutan-kulit-kayu/1.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 300000, diskon:  450000, image: 'assets/img/rajutan-kulit-kayu/4.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rotan 1', price: 350000, diskon:  500000, image: 'assets/img/rajutan-kulit-kayu/12.png', descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rotan 2', price: 400000, diskon:  550000, image: 'assets/img/rajutan-kulit-kayu/13.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rotan 3', price: 400000, diskon:  550000, image: 'assets/img/rajutan-kulit-kayu/14.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 }
    ],
    products2: [
      { name: 'Noken Kecil', price: 150000, diskon:  300000, image: 'assets/img/rajutan-benang/3.png', descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Besar 1', price: 250000, diskon: 40000, image: 'assets/img/rajutan-benang/5.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Besar 2', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/6.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Anyaman', price: 180000, diskon:  350000, image: 'assets/img/rajutan-benang/7.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Motiv PNG 1', price: 150000, diskon: 300000, image: 'assets/img/rajutan-benang/8.png', descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Motiv PNG 2', price: 250000, diskon: 350000, image: 'assets/img/rajutan-benang/9.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/17.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/18.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/19.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/22.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Anyaman', price: 180000, diskon:  350000, image: 'assets/img/rajutan-benang/23.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 }
    ],
    products3: [ 
      { name: 'Anting anting Bia', price: 150000, diskon:  350000, image: 'assets/img/aksesoris/2.png', descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false, qty: 1 },
      { name: 'Koteka Coklat', price: 250000, diskon:  350000, image: 'assets/img/aksesoris/20.png' , descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false, qty: 1 },
      { name: 'Koteka Hitam', price: 200000, diskon:  350000, image: 'assets/img/aksesoris/21.png' , descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false, qty: 1 }

     ],

    // --- Data utama produk (untuk main site & dashboard) ---
    get allProducts() {
      // Gabungkan semua produk dari localStorage agar konsisten di dashboard & main site
      const getArr = (key, fallback) => {
        try {
          const arr = JSON.parse(localStorage.getItem(key));
          return Array.isArray(arr) ? arr : fallback;
        } catch {
          return fallback;
        }
      };
      // Recovery: jika data filter-staters hilang dari localStorage, reset ke default
      let p1 = getArr('products', this.products);
      if (!p1.some(p => p.category === 'filter-staters')) {
        localStorage.setItem('products', JSON.stringify(this.products));
        p1 = [...this.products];
      }
      const normalize = (arr, sourceName) => arr.map((p, i) => ({
        ...p,
        price: isNaN(Number(p.price)) ? 0 : Number(p.price),
        diskon: isNaN(Number(p.diskon)) ? 0 : Number(p.diskon),
        sourceArray: sourceName,
        realIndex: i
      }));
      const p2 = normalize(getArr('products2', this.products2), 'products2');
      const p3 = normalize(getArr('products3', this.products3), 'products3');
      return [...normalize(p1, 'products'), ...p2, ...p3];
    },

    newProduct: { name: '', price: '', diskon: '', image: '', descriptions: '', category: '' },
    editIndex: null,
    editSource: '',

    handleFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newProduct.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    createProduct() {
      const { name, price, diskon, descriptions, image, category } = this.newProduct;
      if (!name || !price || diskon === undefined || diskon === null || diskon === '' || !descriptions || !image || !category) {
        Swal.fire({
          icon: 'warning',
          title: 'Form tidak lengkap!',
          text: 'Silakan isi semua kolom untuk menambahkan produk.'
        });
        return;
      }
      const parsedPrice = parseFloat(price);
      const parsedDiskon = parseFloat(diskon);
      const newProd = {
        ...this.newProduct,
        price: isNaN(parsedPrice) ? 0 : parsedPrice,
        diskon: isNaN(parsedDiskon) ? 0 : parsedDiskon,
        liked: false,
        inCart: false
      };
      let key = '';
      if (category.includes('filter-staters')) key = 'products';
      else if (category.includes('filter-salads')) key = 'products2';
      else if (category.includes('filter-specialty')) key = 'products3';
      if (key) {
        const arr = JSON.parse(localStorage.getItem(key)) || this[key];
        arr.push(newProd);
        localStorage.setItem(key, JSON.stringify(arr));
        if (window.triggerDashboardSync) window.triggerDashboardSync(key);
      }
      this.loadFromLocalStorage();
      this.resetProductForm();
      Swal.fire({
        icon: 'success',
        title: 'Produk Ditambahkan!',
        text: 'Produk berhasil ditambahkan ke daftar.'
      });
    },

    startEditProduct(index, source) {
      this.editIndex = index;
      this.editSource = source;
      let sourceArray;
      try {
        const raw = localStorage.getItem(source);
        sourceArray = (raw && raw !== "undefined") ? JSON.parse(raw) : this[source];
      } catch {
        sourceArray = this[source];
      }
      const product = sourceArray[index];
      this.newProduct = {
        name: product.name,
        price: product.price,
        diskon: product.diskon !== undefined ? product.diskon : '',
        descriptions: product.descriptions,
        image: product.image,
        category: product.category
      };
    },

    updateProduct() {
      if (this.editIndex === null || !this.editSource) return;
      const parsedPrice = parseFloat(this.newProduct.price);
      const parsedDiskon = parseFloat(this.newProduct.diskon);
      const updated = {
        ...this.newProduct,
        price: isNaN(parsedPrice) ? 0 : parsedPrice,
        diskon: isNaN(parsedDiskon) ? 0 : parsedDiskon,
        liked: false,
        inCart: false
      };
      let arr;
      try {
        const raw = localStorage.getItem(this.editSource);
        arr = (raw && raw !== "undefined") ? JSON.parse(raw) : this[this.editSource];
      } catch {
        arr = this[this.editSource];
      }
      arr.splice(this.editIndex, 1, updated);
      localStorage.setItem(this.editSource, JSON.stringify(arr));
      if (window.triggerDashboardSync) window.triggerDashboardSync(this.editSource);
      this.loadFromLocalStorage();
      this.resetProductForm();
      Swal.fire({
        icon: 'success',
        title: 'Produk Diperbarui!',
        text: 'Produk berhasil diperbarui.'
      });
    },

    deleteProduct(index, source) {
      Swal.fire({
        title: 'Yakin ingin menghapus?',
        text: 'Data produk akan dihapus secara permanen.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          const arr = JSON.parse(localStorage.getItem(source)) || this[source];
          arr.splice(index, 1);
          localStorage.setItem(source, JSON.stringify(arr));
          if (window.triggerDashboardSync) window.triggerDashboardSync(source);
          this.loadFromLocalStorage();
          Swal.fire('Dihapus!', 'Produk berhasil dihapus.', 'success');
        }
      });
    },

    resetProductForm() {
      this.editIndex = null;
      this.editSource = '';
      this.newProduct = { name: '', price: '', diskon: '', image: '', descriptions: '', category: '' };
      if (this.$refs && this.$refs.fileInput) this.$refs.fileInput.value = '';
    },

    // ===================== CRUD USER & TRANSAKSI DASHBOARD =====================
    users: [],
    transactions: [],
    expenses: JSON.parse(localStorage.getItem('expenses') || '[]'),
    showAddExpense: false,
    expenseDate: new Date().toISOString().slice(0,10),
    expenseDesc: '',
    expenseAmount: '',
    cashflowTable: [],
    loadUsers() {
      const rawUsers = JSON.parse(localStorage.getItem('users')) || [];
      // Filter hanya user dengan email unik (case-insensitive, trim spasi)
      const seen = new Set();
      const uniqueUsers = rawUsers.filter(u => {
        if (!u.email) return false;
        const cleanEmail = u.email.trim().toLowerCase();
        if (seen.has(cleanEmail)) return false;
        seen.add(cleanEmail);
        // Update email di objek user agar konsisten
        u.email = cleanEmail;
        return true;
      });
      this.users = uniqueUsers;
      // Update localStorage agar hanya user unik yang tersimpan
      localStorage.setItem('users', JSON.stringify(uniqueUsers));
    },
    deleteUser(email) {
      Swal.fire({
        title: 'Hapus Pengguna?',
        text: 'Data tidak dapat dikembalikan!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Ya, hapus'
      }).then((result) => {
        if (result.isConfirmed) {
          let users = JSON.parse(localStorage.getItem('users')) || [];
          users = users.filter(u => u.email !== email);
          localStorage.setItem('users', JSON.stringify(users));
          if (window.triggerDashboardSync) window.triggerDashboardSync('users');
          this.loadUsers();
          Swal.fire('Dihapus!', 'Pengguna berhasil dihapus.', 'success');
        }
      });
    },
    loadTransactions() {
      this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      this.expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
      this.updateCashflowTable();
      this.renderAllCharts && this.renderAllCharts();
    },
    // ===================== LAPORAN & KPI =====================
    get totalRevenue() {
      return this.transactions.reduce((sum, trx) => {
        const total = Number(trx.totalPrice);
        return sum + (isNaN(total) ? 0 : total);
      }, 0);
    },
    // Tambahan: Update KPI dan data chart berdasarkan transaksi & filter tanggal
    updateKPI() {
      // Filter transaksi sesuai selectedMonth (YYYY-MM)
      const month = this.selectedMonth;
      const filtered = this.transactions.filter(trx => {
        if (!trx.date) return false;
        return trx.date.startsWith(month);
      });
      // Total penjualan
      const totalPenjualan = filtered.reduce((sum, trx) => sum + (Number(trx.totalPrice) || 0), 0);
      // Rata-rata transaksi
      const avgTransaksi = filtered.length ? (totalPenjualan / filtered.length) : 0;
      // Produk terlaris
      const produkCount = {};
      filtered.forEach(trx => {
        (trx.items || []).forEach(item => {
          if (!produkCount[item.name]) produkCount[item.name] = 0;
          produkCount[item.name] += item.qty || 1;
        });
      });
      let produkTerlaris = '-';
      let maxQty = 0;
      Object.entries(produkCount).forEach(([name, qty]) => {
        if (qty > maxQty) {
          produkTerlaris = name;
          maxQty = qty;
        }
      });
      // Pengguna aktif (unik)
      const penggunaAktif = new Set(filtered.map(trx => trx.customer?.email)).size;
      // Tabel keuangan (per transaksi)
      const tabelKeuangan = filtered.map(trx => ({
        tanggal: trx.date ? new Date(trx.date).toLocaleDateString('id-ID') : '-',
        nama: trx.customer?.name || '-',
        total: trx.totalPrice || 0
      }));
      this.kpi = {
        totalPenjualan,
        avgTransaksi,
        produkTerlaris,
        penggunaAktif,
        tabelKeuangan
      };
    },
    // Data untuk grafik tren penjualan bulanan
    getChartData() {
      // Ambil transaksi sesuai selectedMonth (YYYY-MM)
      const month = this.selectedMonth;
      const daysInMonth = new Date(Number(month.split('-')[0]), Number(month.split('-')[1]), 0).getDate();
      const daily = Array(daysInMonth).fill(0);
      this.transactions.forEach(trx => {
        if (trx.date && trx.date.startsWith(month)) {
          const day = Number(trx.date.slice(8, 10)) - 1;
          daily[day] += Number(trx.totalPrice) || 0;
        }
      });
      return daily;
    },
    // Data untuk pie chart produk terlaris
    getPieChartData() {
      const month = this.selectedMonth;
      const produkCount = {};
      this.transactions.forEach(trx => {
        if (trx.date && trx.date.startsWith(month)) {
          (trx.items || []).forEach(item => {
            if (!produkCount[item.name]) produkCount[item.name] = 0;
            produkCount[item.name] += item.qty || 1;
          });
        }
      });
      return produkCount;
    },
    // Update Chart.js chart (panggil setelah updateKPI atau filter tanggal berubah)
    updateChart() {
      // Line chart tren penjualan harian
      if (window.salesChart && window.salesChart.data) {
        const data = this.getChartData();
        window.salesChart.data.labels = data.map((_, i) => `${i+1}`);
        window.salesChart.data.datasets[0].data = data;
        window.salesChart.update();
      }
      // Pie chart produk terlaris
      if (window.pieChart && window.pieChart.data) {
        const pieData = this.getPieChartData();
        window.pieChart.data.labels = Object.keys(pieData);
        window.pieChart.data.datasets[0].data = Object.values(pieData);
        window.pieChart.update();
      }
    },
    // Fungsi untuk inisialisasi chart setelah canvas ada
    initCharts() {
      // Inisialisasi line chart tren penjualan harian
      const ctxLine = document.getElementById('salesChart');
      if (ctxLine && !window.salesChart) {
        window.salesChart = new Chart(ctxLine, {
          type: 'line',
          data: {
            labels: this.getChartData().map((_, i) => `${i+1}`),
            datasets: [{
              label: 'Penjualan Harian',
              data: this.getChartData(),
              borderColor: '#4f46e5',
              backgroundColor: 'rgba(79,70,229,0.1)',
              fill: true,
              tension: 0.3
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { display: false } }
          }
        });
      }
      // Inisialisasi pie chart produk terlaris
      const ctxPie = document.getElementById('pieChart');
      if (ctxPie && !window.pieChart) {
        const pieData = this.getPieChartData();
        window.pieChart = new Chart(ctxPie, {
          type: 'pie',
          data: {
            labels: Object.keys(pieData),
            datasets: [{
              data: Object.values(pieData),
              backgroundColor: [
                '#6366f1', '#f59e42', '#10b981', '#ef4444', '#fbbf24', '#3b82f6', '#a21caf', '#eab308'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } }
          }
        });
      }
      // Setelah chart dibuat, update datanya
      this.updateChart();
    },
    loadFromLocalStorage() {
      const p = localStorage.getItem('products');
      if (p) {
        this.allProducts = JSON.parse(p);
      } else {
        // Gabungkan semua produk default
        this.allProducts = [...this.products, ...this.products2, ...this.products3];
        localStorage.setItem('products', JSON.stringify(this.allProducts));
      }
    },
    init() {
      // Set default admin credentials setiap kali halaman login dibuka
      localStorage.setItem('adminEmail', 'rizaldoricky@gmail.com');
      localStorage.setItem('adminPassword', 'jayapura11');
      // Always load latest data from localStorage on dashboard load
      this.loadUsers();
      this.loadTransactions();
      // Jangan panggil updateChart di sini, panggil setelah chart diinisialisasi
      // this.updateChart();
      // Watcher manual untuk selectedMonth (karena Alpine tidak reactive seperti Vue)
      const self = this;
      Object.defineProperty(this, 'selectedMonth', {
        get() { return self._selectedMonth || new Date().toISOString().slice(0, 7); },
        set(val) {
          self._selectedMonth = val;
          self.watchSelectedMonth();
        }
      });
      if (typeof window !== 'undefined') {
        window.init = this.init.bind(this);
      }
    },
    // ===================== LOGOUT ADMIN DASHBOARD =====================
    logout() {
      // Hapus status login admin dan redirect ke halaman login admin
      localStorage.removeItem('isUserLoggedIn');
      localStorage.removeItem('userEmail');
      // Jika ingin juga hapus data admin lain:
      // localStorage.removeItem('adminEmail');
      // localStorage.removeItem('adminPassword');
      Swal.fire({
        title: 'Logout?',
        text: 'Anda yakin ingin keluar dari dashboard admin?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Logout',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Berhasil Logout',
            text: 'Anda telah keluar dari dashboard admin.',
            icon: 'success',
            timer: 1200,
            showConfirmButton: false
          });
          setTimeout(function() {
            window.location.replace('loginAdmin.html');
          }, 1200);
        }
      });
    },
    selectedMonth: new Date().toISOString().slice(0, 7),
    // ===================== EDIT PROFILE ADMIN DASHBOARD =====================
    userProfile: {
      name: localStorage.getItem('adminName') || 'Admin',
      role: localStorage.getItem('adminRole') || 'ADMIN',
      email: localStorage.getItem('adminEmail') || 'admin@nokenshop.com',
      avatar: localStorage.getItem('adminAvatar') || 'https://ui-avatars.com/api/?name=' + (localStorage.getItem('adminName') || 'Admin')
    },
    // Fungsi untuk load ulang profile admin dari localStorage
    loadAdminProfile() {
      this.userProfile.name = localStorage.getItem('adminName') || 'Admin';
      this.userProfile.role = localStorage.getItem('adminRole') || 'ADMIN';
      this.userProfile.email = localStorage.getItem('adminEmail') || 'admin@nokenshop.com';
      this.userProfile.avatar = localStorage.getItem('adminAvatar') || 'https://ui-avatars.com/api/?name=' + (localStorage.getItem('adminName') || 'Admin');
    },
    showEditProfile: false,
    editProfile: {
      name: localStorage.getItem('adminName') || 'Admin',
      email: localStorage.getItem('adminEmail') || 'admin@nokenshop.com',
      role: localStorage.getItem('adminRole') || 'ADMIN',
      avatar: localStorage.getItem('adminAvatar') || 'https://ui-avatars.com/api/?name=' + (localStorage.getItem('adminName') || 'Admin')
    },
    // Tambahan: handle upload avatar dari file
    handleAvatarFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      // Batasi ukuran file maksimal 200KB
      if (file.size > 200 * 1024) {
        Swal.fire('Gagal', 'Ukuran file avatar maksimal 200KB!', 'error');
        event.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.editProfile.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    saveProfile() {
      localStorage.setItem('adminName', this.editProfile.name);
      localStorage.setItem('adminEmail', this.editProfile.email);
      localStorage.setItem('adminRole', this.editProfile.role);
      localStorage.setItem('adminAvatar', this.editProfile.avatar || 'https://ui-avatars.com/api/?name=' + this.editProfile.name);
      this.loadAdminProfile(); // update userProfile setelah edit
      this.showEditProfile = false;
      Swal.fire('Berhasil', 'Profil admin berhasil diperbarui!', 'success');
    },
    openEditProfile() {
      // Salin data userProfile ke editProfile sebelum modal dibuka
      this.editProfile.name = this.userProfile.name;
      this.editProfile.email = this.userProfile.email;
      this.editProfile.role = this.userProfile.role;
      this.editProfile.avatar = this.userProfile.avatar;
      this.showEditProfile = true;
    },
    kpi: {
      totalPenjualan: 0,
      avgTransaksi: 0,
      produkTerlaris: '-',
      penggunaAktif: 0,
      tabelKeuangan: []
    },
    loggedInUserEmail: localStorage.getItem('adminEmail') || 'admin@nokenshop.com',
    loggedInRole: localStorage.getItem('adminRole') || 'ADMIN',
    filterTransaksi: { keyword: '', tanggal: '', sort: '' },
    filterTransaksiChanged() {
      // Trigger reactivity jika diperlukan, bisa kosong jika filter pakai computed/return
    },
    filteredTransactions() {
      let filtered = this.transactions || [];
      const kw = (this.filterTransaksi.keyword || '').toLowerCase();
      if (kw) {
        filtered = filtered.filter(trx => {
          const name = (trx.customer?.name || '').toLowerCase();
          const email = (trx.customer?.email || '').toLowerCase();
          const date = (trx.date || '').toLowerCase();
          return name.includes(kw) || email.includes(kw) || date.includes(kw);
        });
      }
      return filtered;
    },
    // ===================== REGISTER ADMIN =====================
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPasswordConfirm: '',
    registerPasswordVisible: false,
    userRegister() {
      if (!this.registerName || !this.registerEmail || !this.registerPassword || !this.registerPasswordConfirm) {
        Swal.fire('Gagal', 'Semua kolom wajib diisi!', 'warning');
        return;
      }
      if (this.registerPassword !== this.registerPasswordConfirm) {
        Swal.fire('Gagal', 'Konfirmasi password tidak sama!', 'error');
        return;
      }
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.some(u => u.email === this.registerEmail)) {
        Swal.fire('Gagal', 'Email sudah terdaftar!', 'error');
        return;
      }
      users.push({
        name: this.registerName,
        email: this.registerEmail,
        password: this.registerPassword,
        registeredAt: new Date().toISOString(),
        role: 'admin'
      });
      localStorage.setItem('users', JSON.stringify(users));
      // Set juga credential admin dashboard agar bisa login
      localStorage.setItem('adminEmail', this.registerEmail);
      localStorage.setItem('adminPassword', this.registerPassword);
      Swal.fire('Berhasil', 'Admin berhasil didaftarkan! Silakan login dengan akun baru.', 'success').then(() => {
        this.registerName = '';
        this.registerEmail = '';
        this.registerPassword = '';
        this.registerPasswordConfirm = '';
        window.location.href = 'index.html'; // langsung ke login admin
      });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('dashboardDarkMode', this.isDarkMode);
      if (this.isDarkMode) {
        document.body.classList.add('bg-dark-custom');
        document.body.classList.remove('bg-light', 'text-dark');
      } else {
        document.body.classList.remove('bg-dark-custom');
        document.body.classList.add('bg-light', 'text-dark');
      }
    },
    showSetAdminModal: false,
    setAdminEmail: localStorage.getItem('adminEmail') || '',
    setAdminPassword: localStorage.getItem('adminPassword') || '',
    setAdminPasswordVisible: false,
    // ===================== GRAFIK PENJUALAN & ANALITIK =====================
    renderAllCharts() {
      this.renderSalesTrendChart();
      this.renderCategoryPieChart();
      this.renderCategoryRadarChart();
      this.renderDSOChart();
      this.renderCashflowChart(); // Tambahkan render cashflow
    },
    renderCashflowChart() {
      // Pastikan canvas ada
      const ctx = document.getElementById('cashflowChart');
      if (!ctx) return;
      // Destroy chart lama jika ada
      if (window.cashflowChartInstance) {
        window.cashflowChartInstance.destroy();
      }
      // Ambil data cashflowTable
      const rows = this.cashflowTable || [];
      // Gabungkan pemasukan & pengeluaran per tanggal
      const dateMap = {};
      rows.forEach(row => {
        if (!dateMap[row.tanggal]) {
          dateMap[row.tanggal] = { pemasukan: 0, pengeluaran: 0, saldo: 0 };
        }
        dateMap[row.tanggal].pemasukan += Number(row.pemasukan) || 0;
        dateMap[row.tanggal].pengeluaran += Number(row.pengeluaran) || 0;
        dateMap[row.tanggal].saldo = row.saldo; // saldo terakhir per tanggal
      });
      // Urutkan tanggal
      const sortedDates = Object.keys(dateMap).sort((a, b) => new Date(a) - new Date(b));
      const pemasukan = [], pengeluaran = [], saldo = [];
      sortedDates.forEach(tgl => {
        pemasukan.push(dateMap[tgl].pemasukan);
        pengeluaran.push(dateMap[tgl].pengeluaran);
        saldo.push(dateMap[tgl].saldo);
      });
      // Render Chart.js
      window.cashflowChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: sortedDates,
          datasets: [
            {
              label: 'Pemasukan',
              data: pemasukan,
              borderColor: '#10b981',
              backgroundColor: 'rgba(16,185,129,0.1)',
              fill: false,
              tension: 0.3
            },
            {
              label: 'Pengeluaran',
              data: pengeluaran,
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239,68,68,0.1)',
              fill: false,
              tension: 0.3
            },
            {
              label: 'Saldo',
              data: saldo,
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99,102,241,0.1)',
              fill: true,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom' } },
          interaction: { mode: 'index', intersect: false },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    },
    renderSalesTrendChart() {
      const ctx = document.getElementById('salesTrendChart');
      if (!ctx) return;
      const trx = this.transactions || [];
      const dateMap = {};
      trx.forEach(t => {
        const d = new Date(t.date).toLocaleDateString('id-ID');
        if (!dateMap[d]) dateMap[d] = 0;
        dateMap[d] += Number(t.totalPrice) || 0;
      });
      const labels = Object.keys(dateMap);
      const data = Object.values(dateMap);
      if (window.salesTrendChartInstance) window.salesTrendChartInstance.destroy();
      window.salesTrendChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Total Penjualan (Rp)',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              type: 'bar',
            },
            {
              label: 'Tren Penjualan (Line)',
              data: data,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.1)',
              borderWidth: 2,
              fill: false,
              type: 'line',
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            title: { display: true, text: 'Tren Penjualan per Hari' }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    },
    renderCategoryPieChart() {
      const ctx = document.getElementById('categoryPieChart');
      if (!ctx) return;
      const trx = this.transactions || [];
      // Ambil master produk untuk mapping kategori fallback
      const allProducts = this.allProducts || [];
      const categoryMap = { 'Rajutan Kulit Kayu': 0, 'Rajutan Benang': 0, 'Aksesoris': 0 };
      trx.forEach(t => {
        (t.items || []).forEach(item => {
          let kategori = null;
          // 1. Cek descriptions
          if (item.descriptions && item.descriptions.includes('Rajutan Kulit Kayu')) kategori = 'Rajutan Kulit Kayu';
          else if (item.descriptions && item.descriptions.includes('Rajutan Benang')) kategori = 'Rajutan Benang';
          else if (item.descriptions && item.descriptions.includes('Aksesoris')) kategori = 'Aksesoris';
          // 2. Jika descriptions tidak jelas, cek category
          else if (item.category === 'filter-staters') kategori = 'Rajutan Kulit Kayu';
          else if (item.category === 'filter-salads') kategori = 'Rajutan Benang';
          else if (item.category === 'filter-specialty') kategori = 'Aksesoris';
          // 3. Jika masih null, cek master produk berdasarkan nama
          else {
            const found = allProducts.find(p => p.name === item.name);
            if (found) {
              if (found.category === 'filter-staters') kategori = 'Rajutan Kulit Kayu';
              else if (found.category === 'filter-salads') kategori = 'Rajutan Benang';
              else if (found.category === 'filter-specialty') kategori = 'Aksesoris';
            }
          }
          // 4. Fallback terakhir
          if (!kategori) kategori = 'Aksesoris';
          categoryMap[kategori] += item.qty || 1;
        });
      });
      if (window.categoryPieChartInstance) window.categoryPieChartInstance.destroy();
      window.categoryPieChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(categoryMap),
          datasets: [{
            data: Object.values(categoryMap),
            backgroundColor: [
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(255, 99, 132, 0.7)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            title: { display: true, text: 'Distribusi Penjualan per Kategori' }
          }
        }
      });
    },
    renderCategoryRadarChart() {
      const ctx = document.getElementById('categoryRadarChart');
      if (!ctx) return;
      const trx = this.transactions || [];
      const allProducts = this.allProducts || [];
      const categories = ['Rajutan Kulit Kayu', 'Rajutan Benang', 'Aksesoris'];
      const dataQty = [0, 0, 0];
      const dataOmzet = [0, 0, 0];
      trx.forEach(t => {
        (t.items || []).forEach(item => {
          let idx = 2; // default aksesoris
          // 1. Cek descriptions
          if (item.descriptions && item.descriptions.includes('Rajutan Kulit Kayu')) idx = 0;
          else if (item.descriptions && item.descriptions.includes('Rajutan Benang')) idx = 1;
          else if (item.descriptions && item.descriptions.includes('Aksesoris')) idx = 2;
          // 2. Jika descriptions tidak jelas, cek category
          else if (item.category === 'filter-staters') idx = 0;
          else if (item.category === 'filter-salads') idx = 1;
          else if (item.category === 'filter-specialty') idx = 2;
          // 3. Jika masih default, cek master produk berdasarkan nama
          else {
            const found = allProducts.find(p => p.name === item.name);
            if (found) {
              if (found.category === 'filter-staters') idx = 0;
              else if (found.category === 'filter-salads') idx = 1;
              else if (found.category === 'filter-specialty') idx = 2;
            }
          }
          dataQty[idx] += item.qty || 1;
          dataOmzet[idx] += (item.price || 0) * (item.qty || 1);
        });
      });
      if (window.categoryRadarChartInstance) window.categoryRadarChartInstance.destroy();
      window.categoryRadarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: categories,
          datasets: [
            {
              label: 'Total Qty Terjual',
              data: dataQty,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2
            },
            {
              label: 'Total Omzet (Rp)',
              data: dataOmzet,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            title: { display: true, text: 'Performa Kategori Produk' }
          },
          scales: {
            r: { beginAtZero: true }
          }
        }
      });
    },
    renderDSOChart() {
      const ctx = document.getElementById('dsoChart');
      if (!ctx) return;
      const trx = this.transactions || [];
      if (trx.length === 0) return;
      // Hitung DSO per bulan: rata-rata hari outstanding per bulan
      const dsoMap = {};
      const now = new Date();
      trx.forEach(t => {
        if (!t.date) return;
        const trxDate = new Date(t.date);
        const month = trxDate.getFullYear() + '-' + String(trxDate.getMonth()+1).padStart(2,'0');
        const daysOutstanding = Math.max(0, Math.floor((now - trxDate) / (1000*60*60*24)));
        if (!dsoMap[month]) dsoMap[month] = [];
        dsoMap[month].push(daysOutstanding);
      });
      const labels = Object.keys(dsoMap).sort();
      const data = labels.map(m => {
        const arr = dsoMap[m];
        return arr.length ? (arr.reduce((a,b) => a+b,0) / arr.length).toFixed(2) : 0;
      });
      if (window.dsoChartInstance) window.dsoChartInstance.destroy();
      window.dsoChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'DSO (Hari)',
            data: data,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            title: { display: true, text: 'Days Sales Outstanding (DSO) per Bulan' }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    },
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
      localStorage.setItem('products', JSON.stringify(this.allProducts));
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
      this.renderAllCharts();
    },
    submitOrder() {
      // ...existing code submit order...
      // Setelah transaksi/order berhasil:
      this.loadTransactions();
      this.renderAllCharts();
    },
    printReceipt(trx) {
      if (!trx) return;
      let itemsHtml = (trx.items || []).map(item =>
        `<tr><td>${item.name}</td><td>${item.qty}</td><td>Rp ${item.price.toLocaleString('id-ID')}</td><td>Rp ${(item.price * item.qty).toLocaleString('id-ID')}</td></tr>`
      ).join('');
      let html = `
        <div style='text-align:left; max-width:360px; margin:auto; font-size:13px;'>
          <h4 style='text-align:center; font-size:16px; margin-bottom:8px;'>Resi Pesanan Noken Shop</h4>
          <p><b>Nama:</b> ${trx.customer?.name || '-'}</p>
          <p><b>Alamat:</b> ${trx.customer?.address || '-'}</p>
          <p><b>No HP:</b> ${trx.customer?.phone || '-'}</p>
          <p><b>Email:</b> ${trx.customer?.email || '-'}</p>
          <p><b>Tanggal:</b> ${trx.date ? new Date(trx.date).toLocaleString('id-ID') : '-'}</p>
          <hr>
          <table style='width:100%;border-collapse:collapse;font-size:12px;'>
            <thead>
              <tr><th>Produk</th><th>Qty</th><th>Harga</th><th>Subtotal</th></tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
            <tfoot>
              <tr><td colspan='3' style='text-align:right;'><b>Total</b></td><td><b>Rp ${trx.totalPrice.toLocaleString('id-ID')}</b></td></tr>
            </tfoot>
          </table>
          <hr>
          <p style='text-align:center;'>Terima kasih telah berbelanja di Noken Shop Mama Papua!</p>
        </div>
      `;
      Swal.fire({
        title: 'Cetak Resi',
        html: html,
        icon: 'info',
        confirmButtonText: 'Tutup',
        showCancelButton: true,
        cancelButtonText: 'Cetak',
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          const printWindow = window.open('', '_blank', 'width=400,height=600');
          printWindow.document.open();
          printWindow.document.write(`
            <html>
              <head>
                <title>Resi Transaksi</title>
              </head>
              <body onload="window.print(); window.close();">
                ${html}
              </body>
            </html>
          `);
          printWindow.document.close();
        }
      });
    },
    deleteTransaction(id) {
      const idx = this.transactions.findIndex(trx => trx.id === id);
      if (idx !== -1) {
        this.transactions.splice(idx, 1);
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
        this.renderAllCharts && this.renderAllCharts();
        Swal.fire('Berhasil', 'Transaksi berhasil dihapus!', 'success');
      }
    },
    addExpense() {
      if (!this.expenseDate || !this.expenseDesc || !this.expenseAmount) return;
      this.expenses.push({
        tanggal: this.expenseDate,
        keterangan: this.expenseDesc,
        jumlah: Number(this.expenseAmount)
      });
      localStorage.setItem('expenses', JSON.stringify(this.expenses));
      this.showAddExpense = false;
      this.expenseDate = new Date().toISOString().slice(0,10);
      this.expenseDesc = '';
      this.expenseAmount = '';
      this.updateCashflowTable();
    },
    updateCashflowTable() {
      // Ambil semua transaksi dan pengeluaran, urutkan berdasarkan tanggal
      const trx = (this.transactions || []).map(t => {
        let produkRingkas = '';
        if (Array.isArray(t.items) && t.items.length > 0) {
          produkRingkas = t.items.map(item => `- ${item.name}${item.qty > 1 ? ' x' + item.qty : ''}`).join('<br>');
        }
        let keterangan = '';
        if (t.customer?.name) {
          keterangan = `<b>${t.customer.name}</b>`;
          if (produkRingkas) keterangan += '<br>' + produkRingkas;
        } else {
          keterangan = produkRingkas;
        }
        return {
          tanggal: t.date ? new Date(t.date).toISOString().slice(0,10) : '-',
          keterangan: keterangan,
          pemasukan: t.totalPrice || 0,
          pengeluaran: 0
        };
      });
      const pengeluaranList = (this.expenses || []).map(e => ({
        tanggal: e.tanggal,
        keterangan: e.keterangan,
        pemasukan: 0,
        pengeluaran: e.jumlah
      }));
      // Gabungkan dan urutkan semua arus kas
      const allRows = [...trx, ...pengeluaranList].sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal));
      let saldo = 0;
      const rows = allRows.map(row => {
        saldo += (row.pemasukan || 0) - (row.pengeluaran || 0);
        return { ...row, saldo };
      });
      this.cashflowTable = rows;
    },
    confirmDeleteAllTransactions() {
      Swal.fire({
        title: 'Hapus Semua Transaksi?',
        text: 'Semua data transaksi akan dihapus permanen! Lanjutkan?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          this.transactions = [];
          localStorage.setItem('transactions', JSON.stringify(this.transactions));
          this.renderAllCharts && this.renderAllCharts();
          Swal.fire('Dihapus!', 'Semua transaksi berhasil dihapus.', 'success');
        }
      });
    },
    sidebarOpen: false,
    isDarkMode: localStorage.getItem('dashboardDarkMode') === 'true',
    watchActivePage() {
      // Watcher manual untuk Alpine: pantau perubahan activePage
      let lastPage = this.activePage;
      setInterval(() => {
        if (this.activePage !== lastPage) {
          lastPage = this.activePage;
          if (this.activePage === 'laporan') {
            if (window.Alpine && Alpine.nextTick) {
              Alpine.nextTick(() => { this.renderAllCharts && this.renderAllCharts(); });
            } else {
              setTimeout(() => { this.renderAllCharts && this.renderAllCharts(); }, 100);
            }
          }
        }
      }, 300);
    },
  }
}
// ===================== END OF DASHBOARD ADMIN LOGIC =====================
// Semua logic user-side e-commerce, cart, checkout, userLogin, userRegister, dsb sudah dihapus dari file ini!

// Agar Alpine.js bisa akses cartHandler dan init dari HTML
window.cartHandler = cartHandler;
// window.init = cartHandler().init; // Tidak perlu jika sudah x-init="init()" di Alpine

// Fungsi global untuk error login Google/Facebook
window.showSocialLoginError = function(provider) {
  let title = '', text = '';
  if (provider === 'google') {
    title = 'Login Google Gagal';
    text = 'Login Google tidak dapat digunakan karena client_id belum dikonfigurasi dengan benar. Silakan hubungi admin atau gunakan login email/password.';
  } else if (provider === 'facebook') {
    title = 'Login Facebook Gagal';
    text = 'Login Facebook hanya bisa digunakan di website HTTPS dan App ID Facebook harus valid. Silakan hubungi admin atau gunakan login email/password.';
  } else {
    title = 'Login Sosial Gagal';
    text = 'Terjadi masalah pada login sosial. Silakan gunakan login email/password.';
  }
  Swal.fire({
    icon: 'error',
    title: title,
    text: text
  });
}
