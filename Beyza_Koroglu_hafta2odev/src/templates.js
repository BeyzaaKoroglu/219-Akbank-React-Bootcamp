const TransferTemplate = `
<div id="money_transfer" class="col-6">
  <form id="money_transfer_form">
    <h6 class="mt-2">Havale Yap</h6>
    <select class="form-select mt-1" name="moneySender" id="moneySender">
      <option value="ydfg">Gönderen</option>
    </select>
    <select
      class="form-select mt-1"
      id="moneyReceiver"
      name="moneyReceiver"
    >
      <option value="">Alıcı</option>
    </select>
    <input
      class="form-select mt-1"
      id="transferMoney"
      name="transferMoney"
      type="number"
      placeholder="Gönderilecek miktar"
    />
    <button
      class="btn btn-light mt-1"
      onclick="javascript:moneyTransfer()"
      type="button"
    >
      Gönder
    </button>
  </form>
</div>
<div id="product_transfer" class="col-6">
  <form id="product_transfer_form">
    <h6 class="mt-2">Satış Yap</h6>
    <select
      class="form-select mt-1"
      id="productSender"
      name="productSender"
    >
      <option value="">Gönderen</option>
    </select>
    <select
      class="form-select mt-1"
      id="productReceiver"
      name="productReceiver"
    >
      <option value="">Alıcı</option>
    </select>
    <select
      class="form-select mt-1"
      id="transferProduct"
      name="transferProduct"
    >
      <option value="">Ürünler</option>
    </select>
    <button
      class="btn btn-light mt-1"
      onclick="javascript:productTransfer()"
      type="button"
    >
      Gönder
    </button>
  </form>
</div>`;

const userOneProductTemplate = `
<tr>
  <td>{{product}}</td>
  <td>{{quantity}}</td>
</tr>`;

const userProductsTemplate = `
<thead>
  <tr>
    <th scope="col">Ürün</th>
    <th scope="col">Adet</th>
  </tr>
</thead>
<tbody id="userProducts">

</tbody>`;

const userDetailTemplate = `
<div id="user_detail" class="bg-white rounded-3">
  <h4 class="mb-3">
    {{fullName}} {{category}}<button
      id="detail_close_button"
      class="btn btn-light pt-0"
    >
      X
    </button>
  </h4>
</div>`;

const productTemplate = `
<tr>
  <td>{{product}}</td>
  <td>{{price}}₺</td>
  <td>{{stock}}</td>
</tr>`;

const productListTemplate = `
<h5 class="mt-2">Ürün Listesi</h5>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Ürün</th>
      <th scope="col">Fiyat</th>
      <th scope="col">Stok</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody id="products">

  </tbody>
</table>`;

const userTemplate = `
<tr>
  <td>{{fullName}}</td>
  <td>{{balance}}₺</td>
  <td><button onclick={javascript:changeDetailPage("products")} type="button" class="btn btn-link text-black">Ürünler</button></td>
  <td><button onclick={javascript:changeDetailPage("activities")} type="button" class="btn btn-link text-black">Hareketler</button></td>
</tr>`;

const userListTemplate = `
<h5 class="mt-2">Kullanıcı Listesi</h5>
<table class="table">
  <thead>
    <tr>
      <th scope="col">İsim</th>
      <th scope="col">Bakiye</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody id="users">

  </tbody>
</table>`;

const productFormTemplate = `
<h5 class="mt-2">Ürün Ekle</h5>
<form id="add_product">
  <input class="form-control mt-1" name="product" placeholder="Ürün giriniz" />
  <input class="form-control mt-1" name="price" type="number" placeholder="Fiyat giriniz" />
  <input class="form-control mt-1" name="stock" type="number" placeholder="Stok giriniz" />
  <button class="btn btn-light mt-1" onclick="javascript:addProduct()" type="button">Ekle</button>
</form>`;

const userFormTemplate = `
<h5 class="mt-2">Kullanıcı Ekle</h5>
<form id="add_user">
  <input class="form-control mt-2" name="fullName" placeholder="İsim giriniz" />
  <input class="form-control mt-2" name="balance" type="number" placeholder="Bakiye giriniz" />
  <button class="btn btn-light mt-2" onclick="javascript:addUser()" type="button">Ekle</button>
</form>`;

const rootTemplate = `
<div id="first-row" class="row">
  <div class="col-1"></div>
  <div id="user_form" class="col-3 m-1 bg-white rounded-3"></div>
  <div id="trasfer_cover" class="col-4 m-1 bg-white rounded-3"></div>
  <div id="product_form" class="col-3 m-1 bg-white rounded-3"></div>
  <div class="col-1"></div>
</div>
<div id="second-row" class="row">
  <div class="col-1"></div>
  <div id="user_list" class="col-3 p-2 m-1 mt-2 bg-white rounded-3">
    Kayıtlı bir kullanıcı yok.
  </div>
  <div id="user_detail_cover" class="col-4 p-0 m-1 mt-2 rounded-3">
    Bilgilerini görmek istediğiniz kişiyi seçiniz.
  </div>
  <div id="product_list" class="col-3 p-2 m-1 mt-2 bg-white rounded-3">
    Kayıtlı bir ürün yok.
  </div>
  <div class="col-1"></div>
</div>`;
