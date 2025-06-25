function 
cartHandler() {
  return {
    activePage: 'dashboard',

 

// Login
loginEmail: '',
loginPassword: '',
isPasswordVisible: false,

login() {
  const storedEmail = localStorage.getItem('adminEmail') || 'rizaldoricky@gmail.com';
  const storedPassword = localStorage.getItem('adminPassword') || 'jayapura11';

  if (this.loginEmail === storedEmail && this.loginPassword === storedPassword) {
    Swal.fire({
      title: 'Login Berhasil!',
      text: 'Selamat datang di dashboard.',
      icon: 'success',
      confirmButtonText: 'Lanjut'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('isLoggedIn', 'true'); // ✅ Simpan status login
        window.location.href = 'dashboard.html';
      }
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

    // Data Produk ...
    products: [ 
      { name: 'Noken Kecil', price: 150000, diskon: 300000, image: 'assets/img/rajutan-kulit-kayu/10.png', descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Kecil 2', price: 180000, diskon: 350000, image: 'assets/img/rajutan-kulit-kayu/16.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Anyaman', price: 180000, diskon: 350000, image: 'assets/img/rajutan-kulit-kayu/11.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Besar', price: 250000, diskon: 400000, image: 'assets/img/rajutan-kulit-kayu/1.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Rajutan', price: 300000, diskon: 450000, image: 'assets/img/rajutan-kulit-kayu/4.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Rotan 1', price: 350000, diskon: 500000, image: 'assets/img/rajutan-kulit-kayu/12.png', descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Rotan 2', price: 400000, diskon: 550000, image: 'assets/img/rajutan-kulit-kayu/13.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Rotan 3', price: 400000, diskon: 550000, image: 'assets/img/rajutan-kulit-kayu/14.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false }
    ],
    products2: [
      { name: 'Noken Kecil', price: 150000, diskon: 300000, image: 'assets/img/rajutan-benang/3.png', descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Besar 1', price: 250000, diskon: 400000, image: 'assets/img/rajutan-benang/5.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Besar 2', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/6.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Anyaman', price: 180000, diskon: 350000, image: 'assets/img/rajutan-benang/7.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Motiv PNG 1', price: 150000, diskon: 300000, image: 'assets/img/rajutan-benang/8.png', descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Motiv PNG 2', price: 250000, diskon: 350000, image: 'assets/img/rajutan-benang/9.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Rajutan', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/17.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Rajutan', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/18.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Rajutan', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/19.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Rajutan', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/22.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Anyaman', price: 180000, diskon: 350000, image: 'assets/img/rajutan-benang/23.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false }
    ],
    products3: [ 
      { name: 'Anting anting Bia', price: 150000, diskon: 100000, image: 'assets/img/aksesoris/2.png', descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false },
      { name: 'Koteka Coklat', price: 250000, diskon: 200000, image: 'assets/img/aksesoris/20.png' , descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false },
      { name: 'Koteka Hitam', price: 200000, diskon: 150000, image: 'assets/img/aksesoris/21.png' , descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false }

     ],


     events:[
      { name: 'Noken Kecil', price: 150000, diskon: 300000, image: 'assets/img/rajutan-kulit-kayu/10.png', descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Besar 2', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/6.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Rajutan', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/22.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Anyaman', price: 180000, diskon: 350000, image: 'assets/img/rajutan-benang/23.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Koteka Hitam', price: 200000, diskon: 350000, image: 'assets/img/aksesoris/21.png' , descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false },
      { name: 'Noken Motiv PNG 1', price: 150000, diskon: 300000, image: 'assets/img/rajutan-benang/8.png', descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },

     ],
    // Cart & Checkout ...
    cart: [],
    showSidebar: false,
    showForm: false,
    customerData: { name: '', address: '', email: '', phone: '' },

    get totalItems() {
      return this.cart.reduce((sum, item) => sum + item.qty, 0);
    },
    get totalPrice() {
      return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    },
    searchQuery: '',

    get filteredProducts() {
      const query = this.searchQuery.toLowerCase();
      const all = [...this.products, ...this.products2, ...this.products3];
      return all.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.descriptions.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    },
    addToCart(product) {
      const found = this.cart.find(p => p.name === product.name);
      found ? found.qty++ : this.cart.push({ ...product, qty: 1 });
      this.saveToLocalStorage(); // simpan setelah menambah
    },
    increaseQty(product) { product.qty++; this.saveToLocalStorage(); },
    decreaseQty(product) {
      if (product.qty > 1) product.qty--;
      else this.cart = this.cart.filter(item => item.name !== product.name);
      this.saveToLocalStorage();
    },

    checkout() {
      if (this.cart.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Keranjang Belanja Kosong",
        });
        return;
      }
      this.showForm = true;
    },

submitOrder() {
  if (!this.customerData.name || !this.customerData.address || !this.customerData.email) {
    Swal.fire({
      icon: 'warning',
      title: 'Lengkapi Data Diri!',
      text: 'Mohon isi nama, alamat, dan email!'
    });
    return;
  }

  const totalItems = parseInt(this.totalItems, 10);
  const totalPrice = parseFloat(this.totalPrice);
  const validTotalItems = isNaN(totalItems) ? 0 : totalItems;
  const validTotalPrice = isNaN(totalPrice) ? 0 : totalPrice;

  const newTransaction = {
    id: Date.now(),
    customer: { ...this.customerData },
    items: [...this.cart],
    totalItems: validTotalItems,
    totalPrice: validTotalPrice,
    date: new Date().toLocaleString(),
  };

  const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
  storedTransactions.push(newTransaction);
  localStorage.setItem("transactions", JSON.stringify(storedTransactions));

  const itemDetails = this.cart.map(item =>
    `- ${item.name} x ${item.qty} = Rp${(item.price * item.qty).toLocaleString()}`
  ).join('\n');

  const message = `
Halo, saya ingin melakukan pemesanan:

${itemDetails}

Total Barang: ${validTotalItems}
Total Harga: Rp${validTotalPrice.toLocaleString()}

Nama: ${this.customerData.name}
Alamat: ${this.customerData.address}
Email: ${this.customerData.email}
  `;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '6281215376865'; // Ganti dengan nomor tujuan
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  this.cart = [];
  this.saveToLocalStorage(); // <-- Tambahkan ini agar sidebar langsung kosong
  this.customerData = { name: "", address: "", email: "", phone: "" };
  this.showForm = false;
  this.showSidebar = false;

  Swal.fire({
    icon: 'success',
    title: 'Checkout Berhasil!',
    text: 'Anda akan diarahkan ke WhatsApp untuk menyelesaikan pemesanan.',
    timer: 2500,
    showConfirmButton: false,
    willClose: () => {
      // Buka WhatsApp di tab baru
      window.open(waLink, '_blank');
      // Tunggu sebentar lalu refresh halaman
      setTimeout(() => {
        location.reload();
      }, 500); // delay agar WA sempat terbuka
    }
  });
},


    toggleSidebar() { this.showSidebar = !this.showSidebar; },
    closeSidebar() { this.showSidebar = false; },


    // --- Integrasi Data Produk, Transaksi, Pengguna, Laporan (Dashboard <-> Main Site) ---

    // Gabungkan produk dari localStorage agar selalu konsisten di dashboard & main site
    get allProducts() {
      const getArr = (key, fallback) => {
        try {
          const arr = JSON.parse(localStorage.getItem(key));
          return Array.isArray(arr) ? arr : fallback;
        } catch {
          return fallback;
        }
      };
      const combine = (arr, sourceName) => arr.map((p, i) => ({ ...p, sourceArray: sourceName, realIndex: i }));
      const p1 = combine(getArr('products', this.products), 'products');
      const p2 = combine(getArr('products2', this.products2), 'products2');
      const p3 = combine(getArr('products3', this.products3), 'products3');
      return [...p1, ...p2, ...p3];
    },

    // CRUD Produk
    editIndex: null,
    editSource: '',
    newProduct: { name: '', price: '', diskon: '', descriptions: '', image: '', category: '' },

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
      const newProd = {
        ...this.newProduct,
        price: parseFloat(price),
        diskon: parseFloat(diskon),
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
      const sourceArray = JSON.parse(localStorage.getItem(source)) || this[source];
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
      const updated = {
        ...this.newProduct,
        price: parseFloat(this.newProduct.price),
        diskon: parseFloat(this.newProduct.diskon),
        liked: false,
        inCart: false
      };
      const arr = JSON.parse(localStorage.getItem(this.editSource)) || this[this.editSource];
      arr.splice(this.editIndex, 1, updated);
      localStorage.setItem(this.editSource, JSON.stringify(arr));
      if (window.triggerDashboardSync) window.triggerDashboardSync(this.editSource);
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
          Swal.fire('Dihapus!', 'Produk berhasil dihapus.', 'success');
        }
      });
    },

    resetProductForm() {
      this.editIndex = null;
      this.editSource = '';
      this.newProduct = { name: '', price: '', diskon: '', descriptions: '', image: '', category: '' };
      if (this.$refs && this.$refs.fileInput) this.$refs.fileInput.value = '';
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newProduct.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    // --- Integrasi Transaksi ---
    transactions: [],
    loadTransactions() {
      this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    },
    deleteTransaction(id) {
      const trx = this.transactions.find(t => t.id === id);
      if (!trx) {
        Swal.fire('Error', 'Transaksi tidak ditemukan.', 'error');
        return;
      }
      Swal.fire({
        title: 'Hapus Transaksi?',
        text: 'Data transaksi akan dihapus permanen!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          this.transactions = this.transactions.filter(trx => trx.id !== id);
          localStorage.setItem('transactions', JSON.stringify(this.transactions));
          if (window.triggerDashboardSync) window.triggerDashboardSync('transactions');
          this.loadTransactions();
          Swal.fire('Dihapus!', 'Transaksi berhasil dihapus.', 'success');
        }
      });
    },
    confirmDeleteAllTransactions() {
      Swal.fire({
        title: 'Hapus semua transaksi?',
        text: 'Semua data transaksi akan dihapus permanen!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus Semua',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          this.transactions = [];
          localStorage.setItem('transactions', '[]');
          if (window.triggerDashboardSync) window.triggerDashboardSync('transactions');
          Swal.fire('Dihapus!', 'Semua transaksi dihapus.', 'success');
        }
      });
    },

    // --- Integrasi Pengguna ---
    users: [],
    loadAllUsers() {
      // Ambil data user hanya dari localStorage 'users' dan filter unik
      const rawUsers = JSON.parse(localStorage.getItem('users')) || [];
      const seen = new Set();
      const uniqueUsers = rawUsers.filter(u => {
        if (!u.email) return false;
        const cleanEmail = u.email.trim().toLowerCase();
        if (seen.has(cleanEmail)) return false;
        seen.add(cleanEmail);
        u.email = cleanEmail;
        return true;
      });
      this.users = uniqueUsers;
      localStorage.setItem('users', JSON.stringify(uniqueUsers));
    },
    deleteUser(email) {
      Swal.fire({
        title: 'Hapus User?',
        text: 'User akan dihapus permanen!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          let users = JSON.parse(localStorage.getItem('users')) || [];
          users = users.filter(u => u.email !== email);
          localStorage.setItem('users', JSON.stringify(users));
          this.users = users;
          if (window.triggerDashboardSync) window.triggerDashboardSync('users');
          Swal.fire('Dihapus!', 'User berhasil dihapus.', 'success');
        }
      });
    },

    // --- Integrasi Laporan (KPI) ---
    get totalRevenue() {
      return this.transactions.reduce((sum, trx) => {
        const total = Number(trx.totalPrice);
        return sum + (isNaN(total) ? 0 : total);
      }, 0);
    },
    // ...existing code for KPI, chart, etc...

    // --- Inisialisasi Data Sinkronisasi ---
    init() {
      // Wajib login sebelum akses dashboard
      if (window.location.pathname.includes('dashboard') && localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
      }
      // Load admin profile dari localStorage jika ada
      const savedAdmin = JSON.parse(localStorage.getItem('adminProfile'));
      if (savedAdmin) {
        this.editProfile = { ...this.editProfile, ...savedAdmin };
      }
      // Load produk dari localStorage
      this.products = JSON.parse(localStorage.getItem('products')) || this.products;
      this.products2 = JSON.parse(localStorage.getItem('products2')) || this.products2;
      this.products3 = JSON.parse(localStorage.getItem('products3')) || this.products3;
      // Load transaksi
      this.loadTransactions();
      // Load user
      this.loadAllUsers();
      // ...existing code for reset inCart, etc...
    },

    logout() {
      Swal.fire({
        title: 'Logout?',
        text: 'Anda yakin ingin keluar dari dashboard?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('isLoggedIn');
          window.location.href = 'index.html';
        }
      });
    },

    printReceipt(trx) {
      if (!trx || !trx.customer) {
        Swal.fire('Error', 'Data transaksi tidak valid.', 'error');
        return;
      }
      const itemsHtml = (trx.items || []).map(item =>
        `<tr><td>${item.name}</td><td>${item.qty}</td><td>Rp ${item.price.toLocaleString('id-ID')}</td><td>Rp ${(item.price * item.qty).toLocaleString('id-ID')}</td></tr>`
      ).join('');
      const receiptHtml = `
        <html>
        <head>
          <title>Bukti Resi Pemesanan Noken Shop</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 24px; }
            h2 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 16px; }
            th, td { border: 1px solid #333; padding: 8px; text-align: left; }
            th { background: #eee; }
            .total { font-weight: bold; }
          </style>
        </head>
        <body>
          <h2>Bukti Resi Pemesanan Noken Shop</h2>
          <p><strong>Nama:</strong> ${trx.customer.name || '-'}</p>
          <p><strong>Alamat:</strong> ${trx.customer.address || '-'}</p>
          <p><strong>Email:</strong> ${trx.customer.email || '-'}</p>
          <p><strong>No HP:</strong> ${trx.customer.phone || '-'}</p>
          <p><strong>Tanggal:</strong> ${trx.date || '-'}</p>
          <hr>
          <table>
            <thead>
              <tr><th>Produk</th><th>Qty</th><th>Harga</th><th>Subtotal</th></tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
            <tfoot>
              <tr class="total"><td colspan="3">Total</td><td>Rp ${(trx.totalPrice || 0).toLocaleString('id-ID')}</td></tr>
            </tfoot>
          </table>
          <p style="margin-top:32px; text-align:center;">Terima kasih telah berbelanja di Noken Shop!</p>
          <script>window.print(); window.onafterprint = window.close;</script>
        </body>
        </html>
      `;
      const win = window.open('', '_blank', 'width=600,height=800');
      win.document.write(receiptHtml);
      win.document.close();
    },

    // --- Edit Profile Admin ---
    showEditProfile: false,
    editProfile: {
      name: 'Admin Noken Shop',
      email: 'admin@nokenshop.com',
      role: 'ADMIN',
      avatar: 'https://ui-avatars.com/api/?name=Admin',
    },
    openEditProfile() {
      // Load dari localStorage jika ada
      const saved = JSON.parse(localStorage.getItem('adminProfile'));
      if (saved) {
        this.editProfile = { ...this.editProfile, ...saved };
      }
      this.showEditProfile = true;
    },
    saveProfile() {
      localStorage.setItem('adminProfile', JSON.stringify(this.editProfile));
      this.showEditProfile = false;
      Swal.fire({
        icon: 'success',
        title: 'Profil Diperbarui!',
        text: 'Data profil admin berhasil disimpan.'
      });
      this.openEditProfile(); // reload data adminProfile ke editProfile
      this.showEditProfile = false; // pastikan modal tertutup
    },
    handleAvatarFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.editProfile.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },

  }
}

// HAPUS seluruh blok Alpine.data('cartHandler', ...) duplikat di bawah ini jika masih ada!
// Tidak boleh ada inisialisasi ulang users/loadAllUsers dari dashboardUsers atau Alpine.data lain di file ini.

// Inisialisasi Alpine jika diperlukan
if (window.Alpine && window.Alpine.data) {
  window.Alpine.data('cartHandler', cartHandler);
}
