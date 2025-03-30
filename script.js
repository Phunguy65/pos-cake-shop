// Sample data
const products = [
  { id: 1, name: "Bánh Kem Socola", category: "Bánh Kem", price: "45.000₫", stock: 100, status: "Còn Hàng" },
  { id: 2, name: "Bánh Cupcake Vanilla", category: "Bánh Ngọt", price: "42.000₫", stock: 85, status: "Còn Hàng" },
  { id: 3, name: "Bánh Tiramisu", category: "Bánh Kem", price: "35.000₫", stock: 120, status: "Còn Hàng" },
  { id: 4, name: "Bánh Croissant", category: "Bánh Mì", price: "47.000₫", stock: 75, status: "Còn Hàng" },
  { id: 5, name: "Bánh Mì Gối", category: "Bánh Mì", price: "37.000₫", stock: 90, status: "Còn Hàng" },
  { id: 6, name: "Cookies Socola", category: "Cookies", price: "45.000₫", stock: 65, status: "Còn Hàng" },
  { id: 7, name: "Bánh Bông Lan", category: "Bánh Ngọt", price: "32.000₫", stock: 15, status: "Sắp Hết" },
  { id: 8, name: "Bánh Donut", category: "Bánh Ngọt", price: "35.000₫", stock: 0, status: "Hết Hàng" },
]

const orders = [
  { id: "001", customer: "Nguyễn Văn A", date: "22/03/2025 10:30", items: 3, amount: "245.000₫", status: "Hoàn Thành" },
  { id: "002", customer: "Trần Thị B", date: "22/03/2025 09:15", items: 2, amount: "187.000₫", status: "Đang Xử Lý" },
  { id: 3, customer: "Lê Văn C", date: "21/03/2025 15:45", items: 4, amount: "320.000₫", status: "Hoàn Thành" },
  { id: "004", customer: "Phạm Thị D", date: "21/03/2025 13:20", items: 1, amount: "122.000₫", status: "Đã Hủy" },
  { id: "005", customer: "Hoàng Văn E", date: "21/03/2025 11:10", items: 3, amount: "227.000₫", status: "Hoàn Thành" },
  { id: "006", customer: "Ngô Thị F", date: "20/03/2025 16:30", items: 2, amount: "165.000₫", status: "Hoàn Thành" },
  { id: "007", customer: "Đỗ Văn G", date: "20/03/2025 14:15", items: 5, amount: "382.000₫", status: "Đang Xử Lý" },
  { id: "008", customer: "Lý Thị H", date: "20/03/2025 10:45", items: 2, amount: "147.000₫", status: "Hoàn Thành" },
]

const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Quản Lý",
    email: "nguyenvana@example.com",
    phone: "0987654321",
    joined: "15/01/2023",
    status: "Đang Làm",
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Nhân Viên Bán Hàng",
    email: "tranthib@example.com",
    phone: "0987654322",
    joined: "10/03/2023",
    status: "Đang Làm",
  },
  {
    id: 3,
    name: "Lê Văn C",
    role: "Nhân Viên Làm Bánh",
    email: "levanc@example.com",
    phone: "0987654323",
    joined: "22/04/2023",
    status: "Đang Làm",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    role: "Thu Ngân",
    email: "phamthid@example.com",
    phone: "0987654324",
    joined: "05/06/2023",
    status: "Đang Làm",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    role: "Nhân Viên Làm Bánh",
    email: "hoangvane@example.com",
    phone: "0987654325",
    joined: "18/08/2023",
    status: "Nghỉ Phép",
  },
  {
    id: 6,
    name: "Ngô Thị F",
    role: "Thu Ngân",
    email: "ngothif@example.com",
    phone: "0987654326",
    joined: "30/10/2023",
    status: "Đang Làm",
  },
  {
    id: 7,
    name: "Đỗ Văn G",
    role: "Nhân Viên Làm Bánh",
    email: "dovang@example.com",
    phone: "0987654327",
    joined: "12/12/2023",
    status: "Đang Làm",
  },
  {
    id: 8,
    name: "Lý Thị H",
    role: "Nhân Viên Làm Bánh",
    email: "lythih@example.com",
    phone: "0987654328",
    joined: "08/02/2024",
    status: "Nghỉ Phép",
  },
]

const customers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0987654321",
    orders: 12,
    spent: "1.250.000₫",
    lastOrder: "22/03/2025",
    status: "Thường Xuyên",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@example.com",
    phone: "0987654322",
    orders: 8,
    spent: "850.000₫",
    lastOrder: "20/03/2025",
    status: "Thường Xuyên",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@example.com",
    phone: "0987654323",
    orders: 5,
    spent: "520.000₫",
    lastOrder: "15/03/2025",
    status: "Thỉnh Thoảng",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "phamthid@example.com",
    phone: "0987654324",
    orders: 3,
    spent: "320.000₫",
    lastOrder: "10/03/2025",
    status: "Thỉnh Thoảng",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "hoangvane@example.com",
    phone: "0987654325",
    orders: 1,
    spent: "120.000₫",
    lastOrder: "05/03/2025",
    status: "Mới",
  },
  {
    id: 6,
    name: "Ngô Thị F",
    email: "ngothif@example.com",
    phone: "0987654326",
    orders: 15,
    spent: "1.520.000₫",
    lastOrder: "21/03/2025",
    status: "VIP",
  },
  {
    id: 7,
    name: "Đỗ Văn G",
    email: "dovang@example.com",
    phone: "0987654327",
    orders: 7,
    spent: "720.000₫",
    lastOrder: "18/03/2025",
    status: "Thường Xuyên",
  },
  {
    id: 8,
    name: "Lý Thị H",
    email: "lythih@example.com",
    phone: "0987654328",
    orders: 20,
    spent: "2.100.000₫",
    lastOrder: "22/03/2025",
    status: "VIP",
  },
]

// Thêm hàm sắp xếp dữ liệu
function sortData(data, field, direction = "asc") {
  return [...data].sort((a, b) => {
    let valueA = a[field]
    let valueB = b[field]

    // Xử lý giá trị tiền tệ
    if (typeof valueA === "string" && valueA.includes("₫")) {
      valueA = Number.parseFloat(valueA.replace(/\./g, "").replace("₫", ""))
      valueB = Number.parseFloat(valueB.replace(/\./g, "").replace("₫", ""))
    }

    // Xử lý giá trị ngày tháng
    if (field === "date" || field === "lastOrder" || field === "joined") {
      const partsA = valueA.split(/[/ :]/)
      const partsB = valueB.split(/[/ :]/)

      if (partsA.length >= 3 && partsB.length >= 3) {
        // Chuyển đổi từ DD/MM/YYYY sang YYYY/MM/DD để so sánh
        valueA = new Date(`${partsA[2]}/${partsA[1]}/${partsA[0]} ${partsA[3] || "00"}:${partsA[4] || "00"}`)
        valueB = new Date(`${partsB[2]}/${partsB[1]}/${partsB[0]} ${partsB[3] || "00"}:${partsB[4] || "00"}`)
      }
    }

    // Xử lý giá trị số
    if (typeof valueA === "string" && !isNaN(valueA)) {
      valueA = Number.parseFloat(valueA)
      valueB = Number.parseFloat(valueB)
    }

    // So sánh và sắp xếp
    if (valueA < valueB) return direction === "asc" ? -1 : 1
    if (valueA > valueB) return direction === "asc" ? 1 : -1
    return 0
  })
}

// Thêm biến lưu trạng thái sắp xếp hiện tại
let currentSortField = ""
let currentSortDirection = "asc"

// Thêm hàm xử lý sự kiện sắp xếp cho các bảng
function setupSortingEvents() {
  // Sắp xếp sản phẩm
  document
    .querySelector('#products-page .form-select[style*="max-width: 200px"]:last-child')
    .addEventListener("change", function () {
      const sortOption = this.value
      let field = "name"
      let direction = "asc"

      if (sortOption === "Sắp xếp: Tên") {
        field = "name"
        direction = "asc"
      } else if (sortOption === "Sắp xếp: Giá (Thấp đến Cao)") {
        field = "price"
        direction = "asc"
      } else if (sortOption === "Sắp xếp: Giá (Cao đến Thấp)") {
        field = "price"
        direction = "desc"
      } else if (sortOption === "Sắp xếp: Tồn Kho") {
        field = "stock"
        direction = "desc"
      }

      currentSortField = field
      currentSortDirection = direction

      const sortedProducts = sortData(products, field, direction)
      renderProductsTableWithData(sortedProducts)
    })

  // Sắp xếp đơn hàng
  document
    .querySelector('#orders-page .form-select[style*="max-width: 200px"]:last-child')
    .addEventListener("change", function () {
      const sortOption = this.value
      let field = "id"
      let direction = "desc"

      if (sortOption === "Sắp xếp: Mới Nhất") {
        field = "id"
        direction = "desc"
      } else if (sortOption === "Sắp xếp: Cũ Nhất") {
        field = "id"
        direction = "asc"
      } else if (sortOption === "Sắp xếp: Giá Trị (Cao-Thấp)") {
        field = "amount"
        direction = "desc"
      } else if (sortOption === "Sắp xếp: Giá Trị (Thấp-Cao)") {
        field = "amount"
        direction = "asc"
      }

      currentSortField = field
      currentSortDirection = direction

      const sortedOrders = sortData(orders, field, direction)
      renderOrdersTableWithData(sortedOrders)
    })

  // Sắp xếp khách hàng
  document
    .querySelector('#customers-page .form-select[style*="max-width: 200px"]:last-child')
    .addEventListener("change", function () {
      const sortOption = this.value
      let field = "id"
      let direction = "asc"

      if (sortOption === "Sắp xếp: Mới Nhất") {
        field = "id"
        direction = "desc"
      } else if (sortOption === "Sắp xếp: Chi Tiêu (Cao-Thấp)") {
        field = "spent"
        direction = "desc"
      } else if (sortOption === "Sắp xếp: Đơn Hàng (Cao-Thấp)") {
        field = "orders"
        direction = "desc"
      } else if (sortOption === "Sắp xếp: Tên (A-Z)") {
        field = "name"
        direction = "asc"
      }

      currentSortField = field
      currentSortDirection = direction

      const sortedCustomers = sortData(customers, field, direction)
      renderCustomersTableWithData(sortedCustomers)
    })
}

// DOM Elements
const loginPage = document.getElementById("login-page")
const dashboardContainer = document.getElementById("dashboard-container")
const loginForm = document.getElementById("login-form")
const loginError = document.getElementById("login-error")
const logoutBtn = document.getElementById("logout-btn")
const sidebarToggle = document.getElementById("sidebar-toggle")
const sidebar = document.getElementById("sidebar")
const navLinks = document.querySelectorAll(".nav-link")
const pageTitle = document.getElementById("page-title")
const pageContents = document.querySelectorAll(".page-content")

// Product elements
const productsTableBody = document.getElementById("products-table-body")
const addProductBtn = document.getElementById("add-product-btn")
const productFormContainer = document.getElementById("product-form-container")
const productForm = document.getElementById("product-form")
const productFormTitle = document.getElementById("product-form-title")
const closeProductForm = document.getElementById("close-product-form")
const cancelProductForm = document.getElementById("cancel-product-form")
const productId = document.getElementById("product-id")
const productName = document.getElementById("product-name")
const productCategory = document.getElementById("product-category")
const productPrice = document.getElementById("product-price")
const productStock = document.getElementById("product-stock")

// Order elements
const ordersTableBody = document.getElementById("orders-table-body")
const orderDetailModalElement = document.getElementById("orderDetailModal")
const orderDetailModal = new bootstrap.Modal(orderDetailModalElement)
const orderDetailId = document.getElementById("order-detail-id")
const orderDetailCode = document.getElementById("order-detail-code")
const orderDetailDate = document.getElementById("order-detail-date")
const orderDetailCustomer = document.getElementById("order-detail-customer")
const orderDetailStatus = document.getElementById("order-detail-status")
const orderDetailAmount = document.getElementById("order-detail-amount")
const orderDetailTotal = document.getElementById("order-detail-total")
const updateOrderBtn = document.getElementById("update-order-btn")

// Create Order elements
const createOrderBtn = document.getElementById("create-order-btn")
const createOrderModalElement = document.getElementById("createOrderModal")
const createOrderModal = new bootstrap.Modal(createOrderModalElement)
const orderCustomerSelect = document.getElementById("order-customer")
const productListContainer = document.querySelector(".product-list")
const orderTotalItems = document.getElementById("order-total-items")
const orderSubtotal = document.getElementById("order-subtotal")
const orderTax = document.getElementById("order-tax")
const orderTotal = document.getElementById("order-total")
const saveOrderBtn = document.getElementById("save-order-btn")

// Order stats elements
const totalOrdersElement = document.querySelector(".card.border-start.border-primary.border-4 .fs-4.fw-bold")
const completedOrdersElement = document.querySelector(".card.border-start.border-success.border-4 .fs-4.fw-bold")
const processingOrdersElement = document.querySelector(".card.border-start.border-warning.border-4 .fs-4.fw-bold")
const cancelledOrdersElement = document.querySelector(".card.border-start.border-danger.border-4 .fs-4.fw-bold")

// Employee elements
const employeesTableBody = document.getElementById("employees-table-body")
const totalEmployees = document.getElementById("total-employees")
const activeEmployees = document.getElementById("active-employees")
const onLeaveEmployees = document.getElementById("on-leave-employees")
const addEmployeeBtn = document.getElementById("add-employee-btn")
const employeeFormContainer = document.getElementById("employee-form-container")
const employeeForm = document.getElementById("employee-form")
const employeeFormTitle = document.getElementById("employee-form-title")
const closeEmployeeForm = document.getElementById("close-employee-form")
const cancelEmployeeForm = document.getElementById("cancel-employee-form")
const employeeId = document.getElementById("employee-id")
const employeeName = document.getElementById("employee-name")
const employeeRole = document.getElementById("employee-role")
const employeeEmail = document.getElementById("employee-email")
const employeePhone = document.getElementById("employee-phone")
const employeeJoined = document.getElementById("employee-joined")
const employeeStatus = document.getElementById("employee-status")

// Customer elements
const customersTableBody = document.getElementById("customers-table-body")
const customerDetailModalElement = document.getElementById("customerDetailModal")
const customerDetailModal = new bootstrap.Modal(customerDetailModalElement)
const customerDetailId = document.getElementById("customer-detail-id")
const customerDetailName = document.getElementById("customer-detail-name")
const customerDetailEmail = document.getElementById("customer-detail-email")
const customerDetailPhone = document.getElementById("customer-detail-phone")
const customerDetailOrders = document.getElementById("customer-detail-orders")
const customerDetailSpent = document.getElementById("customer-detail-spent")
const customerDetailLastOrder = document.getElementById("customer-detail-last-order")
const customerDetailLastOrderDate = document.getElementById("customer-detail-last-order-date")
const customerDetailBadge = document.getElementById("customer-detail-badge")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Show login page by default
  loginPage.classList.remove("d-none")
  dashboardContainer.classList.add("d-none")

  // Render tables
  renderProductsTable()
  renderOrdersTable()
  renderEmployeesTable()
  renderCustomersTable()
  updateEmployeeStats()
  updateOrderStats()

  // Initialize create order form
  initCreateOrderForm()

  // Setup sorting events
  setupSortingEvents()
})

// Login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  if (username === "admin" && password === "password") {
    loginPage.classList.add("d-none")
    dashboardContainer.classList.remove("d-none")
    loginError.classList.add("d-none")
  } else {
    loginError.classList.remove("d-none")
  }
})

// Logout button
logoutBtn.addEventListener("click", () => {
  loginPage.classList.remove("d-none")
  dashboardContainer.classList.add("d-none")
  document.getElementById("username").value = ""
  document.getElementById("password").value = ""
})

// Sidebar toggle (mobile)
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show")
})

// Navigation
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()

    // Update active link
    navLinks.forEach((l) => l.classList.remove("active"))
    this.classList.add("active")

    // Show corresponding page
    const page = this.getAttribute("data-page")
    pageTitle.textContent = this.textContent.trim()

    pageContents.forEach((content) => {
      if (content.id === `${page}-page`) {
        content.classList.remove("d-none")
      } else {
        content.classList.add("d-none")
      }
    })

    // Hide sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      sidebar.classList.remove("show")
    }
  })
})

// Update order statistics
function updateOrderStats() {
  if (totalOrdersElement && completedOrdersElement && processingOrdersElement && cancelledOrdersElement) {
    const totalOrders = orders.length
    const completedOrders = orders.filter((order) => order.status === "Hoàn Thành").length
    const processingOrders = orders.filter((order) => order.status === "Đang Xử Lý").length
    const cancelledOrders = orders.filter((order) => order.status === "Đã Hủy").length

    totalOrdersElement.textContent = totalOrders
    completedOrdersElement.textContent = completedOrders
    processingOrdersElement.textContent = processingOrders
    cancelledOrdersElement.textContent = cancelledOrders
  }
}

// Products functions
function renderProductsTableWithData(productsData) {
  productsTableBody.innerHTML = ""

  productsData.forEach((product) => {
    const tr = document.createElement("tr")

    const statusClass =
      product.status === "Còn Hàng" ? "bg-success" : product.status === "Sắp Hết" ? "bg-warning text-dark" : "bg-danger"

    tr.innerHTML = `
      <td>
        <div class="d-flex align-items-center">
          <div class="product-icon">
            <i class="bi bi-cake2"></i>
          </div>
          <div>
            <div class="fw-medium">${product.name}</div>
            <div class="small text-muted">Mã: SP-${product.id.toString().padStart(3, "0")}</div>
          </div>
        </div>
      </td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      <td><span class="badge ${statusClass}">${product.status}</span></td>
      <td class="text-end">
        <button class="btn btn-sm btn-primary me-1 edit-product" data-id="${product.id}">Sửa</button>
        <button class="btn btn-sm btn-danger delete-product" data-id="${product.id}">Xóa</button>
      </td>
    `

    productsTableBody.appendChild(tr)
  })

  // Add event listeners to edit and delete buttons
  document.querySelectorAll(".edit-product").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number.parseInt(this.getAttribute("data-id"))
      editProduct(id)
    })
  })

  document.querySelectorAll(".delete-product").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number.parseInt(this.getAttribute("data-id"))
      deleteProduct(id)
    })
  })
}

function renderProductsTable() {
  renderProductsTableWithData(products)
}

addProductBtn.addEventListener("click", () => {
  productFormTitle.textContent = "Thêm Sản Phẩm Mới"
  productId.value = ""
  productForm.reset()
  productFormContainer.classList.remove("d-none")
})

closeProductForm.addEventListener("click", () => {
  productFormContainer.classList.add("d-none")
})

cancelProductForm.addEventListener("click", () => {
  productFormContainer.classList.add("d-none")
})

productForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = {
    name: productName.value,
    category: productCategory.value,
    price: productPrice.value,
    stock: Number.parseInt(productStock.value),
  }

  if (productId.value) {
    // Update existing product
    const id = Number.parseInt(productId.value)
    const index = products.findIndex((p) => p.id === id)

    if (index !== -1) {
      formData.id = id
      formData.status = formData.stock > 20 ? "Còn Hàng" : formData.stock > 0 ? "Sắp Hết" : "Hết Hàng"
      products[index] = formData
    }
  } else {
    // Add new product
    formData.id = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1
    formData.status = formData.stock > 20 ? "Còn Hàng" : formData.stock > 0 ? "Sắp Hết" : "Hết Hàng"
    products.push(formData)
  }

  renderProductsTable()
  productFormContainer.classList.add("d-none")
})

function editProduct(id) {
  const product = products.find((p) => p.id === id)

  if (product) {
    productFormTitle.textContent = "Chỉnh Sửa Sản Phẩm"
    productId.value = product.id
    productName.value = product.name
    productCategory.value = product.category
    productPrice.value = product.price
    productStock.value = product.stock

    productFormContainer.classList.remove("d-none")
  }
}

function deleteProduct(id) {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
    const index = products.findIndex((p) => p.id === id)

    if (index !== -1) {
      products.splice(index, 1)
      renderProductsTable()
    }
  }
}

// Orders functions
function renderOrdersTableWithData(ordersData) {
  ordersTableBody.innerHTML = ""

  ordersData.forEach((order) => {
    const tr = document.createElement("tr")

    const statusClass =
      order.status === "Hoàn Thành"
        ? "bg-success"
        : order.status === "Đang Xử Lý"
          ? "bg-warning text-dark"
          : "bg-danger"

    tr.innerHTML = `
      <td>#ĐH-${order.id}</td>
      <td>${order.customer}</td>
      <td>${order.date}</td>
      <td>${order.items} sản phẩm</td>
      <td>${order.amount}</td>
      <td><span class="badge ${statusClass}">${order.status}</span></td>
      <td class="text-end">
        <button class="btn btn-sm btn-primary me-1 view-order" data-id="${order.id}">Xem</button>
        <button class="btn btn-sm btn-info me-1">In</button>
        ${order.status !== "Đã Hủy" ? `<button class="btn btn-sm btn-danger cancel-order" data-id="${order.id}">Hủy</button>` : ""}
      </td>
    `

    ordersTableBody.appendChild(tr)
  })

  // Add event listeners to view and cancel buttons
  document.querySelectorAll(".view-order").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id")
      viewOrder(id)
    })
  })

  document.querySelectorAll(".cancel-order").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id")
      cancelOrder(id)
    })
  })

  // Update order statistics after rendering
  updateOrderStats()
}

function renderOrdersTable() {
  renderOrdersTableWithData(orders)
}

function viewOrder(id) {
  const order = orders.find((o) => o.id === id)

  if (order) {
    orderDetailId.textContent = order.id
    orderDetailCode.textContent = `#ĐH-${order.id}`
    orderDetailDate.textContent = order.date
    orderDetailCustomer.textContent = order.customer
    orderDetailStatus.value = order.status
    orderDetailAmount.textContent = order.amount
    orderDetailTotal.textContent = order.amount

    orderDetailModal.show()
  }
}

function cancelOrder(id) {
  if (confirm("Bạn có chắc chắn muốn hủy đơn hàng này?")) {
    const index = orders.findIndex((o) => o.id === id)

    if (index !== -1) {
      orders[index].status = "Đã Hủy"
      renderOrdersTable()
      updateOrderStats()
    }
  }
}

updateOrderBtn.addEventListener("click", () => {
  const id = orderDetailId.textContent
  const newStatus = orderDetailStatus.value

  const index = orders.findIndex((o) => o.id === id)

  if (index !== -1) {
    orders[index].status = newStatus
    renderOrdersTable()
    updateOrderStats()
    orderDetailModal.hide()
  }
})

// Create Order functions
function initCreateOrderForm() {
  if (!orderCustomerSelect || !productListContainer || !createOrderBtn || !saveOrderBtn) {
    console.error("Không tìm thấy các phần tử cần thiết cho form tạo đơn hàng")
    return
  }

  // Populate customer dropdown
  orderCustomerSelect.innerHTML = '<option value="">Chọn khách hàng...</option>'
  customers.forEach((customer) => {
    const option = document.createElement("option")
    option.value = customer.id
    option.textContent = customer.name
    orderCustomerSelect.appendChild(option)
  })

  // Populate product list
  renderOrderProductList()

  // Add event listener to create order button
  createOrderBtn.addEventListener("click", () => {
    // Reset form
    orderCustomerSelect.value = ""
    document.getElementById("order-note").value = ""
    document.getElementById("order-payment").value = "Tiền Mặt"
    document.getElementById("order-status").value = "Đang Xử Lý"

    // Reset product quantities
    document.querySelectorAll(".product-quantity-input").forEach((input) => {
      input.value = 0
    })

    // Reset order summary
    updateOrderSummary()

    // Show modal
    createOrderModal.show()
  })

  // Add event listener to save order button
  saveOrderBtn.addEventListener("click", createNewOrder)
}

function renderOrderProductList() {
  if (!productListContainer) return

  productListContainer.innerHTML = ""

  // Only show products that are in stock
  const availableProducts = products.filter((product) => product.status !== "Hết Hàng")

  availableProducts.forEach((product) => {
    const productItem = document.createElement("div")
    productItem.className = "product-item d-flex align-items-center justify-content-between"
    productItem.dataset.id = product.id
    productItem.dataset.price = Number.parseFloat(product.price.replace(".", "").replace("₫", ""))

    productItem.innerHTML = `
      <div class="d-flex align-items-center">
        <div class="product-icon me-2">
          <i class="bi bi-cake2"></i>
        </div>
        <div>
          <div class="fw-medium">${product.name}</div>
          <div class="small text-muted">${product.price} / cái</div>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-sm btn-outline-secondary decrease-quantity">-</button>
        <input type="number" class="sm btn btn-outline-secondary decrease-quantity">-</button>
        <input type="number" class="form-control form-control-sm mx-2 product-quantity-input" style="width: 60px" min="0" max="${product.stock}" value="0">
        <button type="button" class="btn btn-sm btn-outline-secondary increase-quantity">+</button>
      </div>
    `

    productListContainer.appendChild(productItem)

    // Add event listeners to quantity buttons and input
    const quantityInput = productItem.querySelector(".product-quantity-input")
    const decreaseBtn = productItem.querySelector(".decrease-quantity")
    const increaseBtn = productItem.querySelector(".increase-quantity")

    decreaseBtn.addEventListener("click", () => {
      if (Number.parseInt(quantityInput.value) > 0) {
        quantityInput.value = Number.parseInt(quantityInput.value) - 1
        updateOrderSummary()
      }
    })

    increaseBtn.addEventListener("click", () => {
      if (Number.parseInt(quantityInput.value) < product.stock) {
        quantityInput.value = Number.parseInt(quantityInput.value) + 1
        updateOrderSummary()
      }
    })

    quantityInput.addEventListener("change", () => {
      // Ensure value is within valid range
      let value = Number.parseInt(quantityInput.value)
      if (isNaN(value) || value < 0) value = 0
      if (value > product.stock) value = product.stock
      quantityInput.value = value

      updateOrderSummary()
    })
  })
}

function updateOrderSummary() {
  let totalItems = 0
  let subtotal = 0

  document.querySelectorAll(".product-item").forEach((item) => {
    const quantity = Number.parseInt(item.querySelector(".product-quantity-input").value)
    const price = Number.parseFloat(item.dataset.price)

    if (quantity > 0) {
      totalItems += quantity
      subtotal += quantity * price
    }
  })

  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + tax

  // Format currency
  const formatCurrency = (amount) => {
    return (
      new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount) + "₫"
    )
  }

  // Update summary
  orderTotalItems.textContent = totalItems
  orderSubtotal.textContent = formatCurrency(subtotal)
  orderTax.textContent = formatCurrency(tax)
  orderTotal.textContent = formatCurrency(total)
}

function createNewOrder() {
  // Validate form
  const customerId = orderCustomerSelect.value
  if (!customerId) {
    alert("Vui lòng chọn khách hàng")
    return
  }

  // Get selected products
  const selectedProducts = []
  let totalItems = 0
  let subtotal = 0

  document.querySelectorAll(".product-item").forEach((item) => {
    const productId = Number.parseInt(item.dataset.id)
    const quantity = Number.parseInt(item.querySelector(".product-quantity-input").value)
    const price = Number.parseFloat(item.dataset.price)

    if (quantity > 0) {
      const product = products.find((p) => p.id === productId)
      selectedProducts.push({
        id: productId,
        name: product.name,
        price: product.price,
        quantity: quantity,
      })

      totalItems += quantity
      subtotal += quantity * price
    }
  })

  if (selectedProducts.length === 0) {
    alert("Vui lòng chọn ít nhất một sản phẩm")
    return
  }

  // Calculate total
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + tax

  // Format total
  const formattedTotal =
    new Intl.NumberFormat("vi-VN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(total) + "₫"

  // Get customer
  const customer = customers.find((c) => c.id === Number.parseInt(customerId))

  // Get current date and time
  const now = new Date()
  const formattedDate = `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getFullYear()} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`

  // Create new order
  const newOrderId = (orders.length > 0 ? Math.max(...orders.map((o) => Number.parseInt(o.id))) + 1 : 1)
    .toString()
    .padStart(3, "0")

  const newOrder = {
    id: newOrderId,
    customer: customer.name,
    date: formattedDate,
    items: totalItems,
    amount: formattedTotal,
    status: document.getElementById("order-status").value,
    products: selectedProducts,
    note: document.getElementById("order-note").value,
    payment: document.getElementById("order-payment").value,
  }

  // Add to orders array
  orders.unshift(newOrder)

  // Update customer data
  const customerIndex = customers.findIndex((c) => c.id === Number.parseInt(customerId))
  if (customerIndex !== -1) {
    customers[customerIndex].orders += 1
    customers[customerIndex].lastOrder = formattedDate

    // Update spent amount (remove formatting and add new amount)
    const currentSpent = Number.parseFloat(customers[customerIndex].spent.replace(".", "").replace("₫", ""))
    const newSpent = currentSpent + total
    customers[customerIndex].spent =
      new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(newSpent) + "₫"
  }

  // Update product stock
  selectedProducts.forEach((item) => {
    const productIndex = products.findIndex((p) => p.id === item.id)
    if (productIndex !== -1) {
      products[productIndex].stock -= item.quantity

      // Update status based on new stock level
      if (products[productIndex].stock <= 0) {
        products[productIndex].status = "Hết Hàng"
      } else if (products[productIndex].stock <= 20) {
        products[productIndex].status = "Sắp Hết"
      }
    }
  })

  // Refresh tables and stats
  renderOrdersTable()
  renderProductsTable()
  renderCustomersTable()
  updateOrderStats()

  // Close modal
  createOrderModal.hide()

  // Show success message
  alert(`Đơn hàng #ĐH-${newOrderId} đã được tạo thành công!`)
}

// Employees functions
function renderEmployeesTable() {
  employeesTableBody.innerHTML = ""

  employees.forEach((employee) => {
    const tr = document.createElement("tr")

    const statusClass = employee.status === "Đang Làm" ? "bg-success" : "bg-danger"

    tr.innerHTML = `
      <td>
        <div class="d-flex align-items-center">
          <div class="product-icon rounded-circle">
            <i class="bi bi-person"></i>
          </div>
          <div>
            <div class="fw-medium">${employee.name}</div>
            <div class="small text-muted">Mã: NV-${employee.id.toString().padStart(3, "0")}</div>
          </div>
        </div>
      </td>
      <td>${employee.role}</td>
      <td>
        <div>${employee.email}</div>
        <div class="small text-muted">${employee.phone}</div>
      </td>
      <td>${employee.joined}</td>
      <td><span class="badge ${statusClass}">${employee.status}</span></td>
      <td class="text-end">
        <button class="btn btn-sm btn-primary me-1 edit-employee" data-id="${employee.id}">Sửa</button>
        <button class="btn btn-sm btn-info me-1">Lịch</button>
        <button class="btn btn-sm btn-danger delete-employee" data-id="${employee.id}">Xóa</button>
      </td>
    `

    employeesTableBody.appendChild(tr)
  })

  // Add event listeners to edit and delete buttons
  document.querySelectorAll(".edit-employee").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number.parseInt(this.getAttribute("data-id"))
      editEmployee(id)
    })
  })

  document.querySelectorAll(".delete-employee").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number.parseInt(this.getAttribute("data-id"))
      deleteEmployee(id)
    })
  })
}

function updateEmployeeStats() {
  if (totalEmployees && activeEmployees && onLeaveEmployees) {
    totalEmployees.textContent = employees.length
    activeEmployees.textContent = employees.filter((e) => e.status === "Đang Làm").length
    onLeaveEmployees.textContent = employees.filter((e) => e.status === "Nghỉ Phép").length
  }
}

addEmployeeBtn.addEventListener("click", () => {
  employeeFormTitle.textContent = "Thêm Nhân Viên Mới"
  employeeId.value = ""
  employeeForm.reset()
  employeeJoined.value = new Date().toLocaleDateString("vi-VN")
  employeeFormContainer.classList.remove("d-none")
})

closeEmployeeForm.addEventListener("click", () => {
  employeeFormContainer.classList.add("d-none")
})

cancelEmployeeForm.addEventListener("click", () => {
  employeeFormContainer.classList.add("d-none")
})

employeeForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = {
    name: employeeName.value,
    role: employeeRole.value,
    email: employeeEmail.value,
    phone: employeePhone.value,
    joined: employeeJoined.value,
    status: employeeStatus.value,
  }

  if (employeeId.value) {
    // Update existing employee
    const id = Number.parseInt(employeeId.value)
    const index = employees.findIndex((e) => e.id === id)

    if (index !== -1) {
      formData.id = id
      employees[index] = formData
    }
  } else {
    // Add new employee
    formData.id = employees.length > 0 ? Math.max(...employees.map((e) => e.id)) + 1 : 1
    employees.push(formData)
  }

  renderEmployeesTable()
  updateEmployeeStats()
  employeeFormContainer.classList.add("d-none")
})

function editEmployee(id) {
  const employee = employees.find((e) => e.id === id)

  if (employee) {
    employeeFormTitle.textContent = "Chỉnh Sửa Nhân Viên"
    employeeId.value = employee.id
    employeeName.value = employee.name
    employeeRole.value = employee.role
    employeeEmail.value = employee.email
    employeePhone.value = employee.phone
    employeeJoined.value = employee.joined
    employeeStatus.value = employee.status

    employeeFormContainer.classList.remove("d-none")
  }
}

function deleteEmployee(id) {
  if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
    const index = employees.findIndex((e) => e.id === id)

    if (index !== -1) {
      employees.splice(index, 1)
      renderEmployeesTable()
      updateEmployeeStats()
    }
  }
}

// Customers functions
function renderCustomersTableWithData(customersData) {
  customersTableBody.innerHTML = ""

  customersData.forEach((customer) => {
    const tr = document.createElement("tr")

    let statusClass
    switch (customer.status) {
      case "VIP":
        statusClass = "bg-purple"
        break
      case "Thường Xuyên":
        statusClass = "bg-success"
        break
      case "Thỉnh Thoảng":
        statusClass = "bg-info"
        break
      default:
        statusClass = "bg-secondary"
    }

    tr.innerHTML = `
      <td>
        <div class="d-flex align-items-center">
          <div class="product-icon rounded-circle">
            <i class="bi bi-person"></i>
          </div>
          <div>
            <div class="fw-medium">${customer.name}</div>
            <div class="small text-muted">Mã: KH-${customer.id.toString().padStart(3, "0")}</div>
          </div>
        </div>
      </td>
      <td>
        <div>${customer.email}</div>
        <div class="small text-muted">${customer.phone}</div>
      </td>
      <td>${customer.orders} đơn</td>
      <td>${customer.spent}</td>
      <td>${customer.lastOrder}</td>
      <td><span class="badge ${statusClass}">${customer.status}</span></td>
      <td class="text-end">
        <button class="btn btn-sm btn-primary me-1 view-customer" data-id="${customer.id}">Xem</button>
        <button class="btn btn-sm btn-info me-1">Email</button>
        <button class="btn btn-sm btn-danger">Xóa</button>
      </td>
    `

    customersTableBody.appendChild(tr)
  })

  // Add event listeners to view buttons
  document.querySelectorAll(".view-customer").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number.parseInt(this.getAttribute("data-id"))
      viewCustomer(id)
    })
  })
}

function renderCustomersTable() {
  renderCustomersTableWithData(customers)
}

function viewCustomer(id) {
  const customer = customers.find((c) => c.id === id)

  if (customer) {
    customerDetailId.textContent = customer.id.toString().padStart(3, "0")
    customerDetailName.textContent = customer.name
    customerDetailEmail.textContent = customer.email
    customerDetailPhone.textContent = customer.phone
    customerDetailOrders.textContent = `${customer.orders} đơn`
    customerDetailSpent.textContent = customer.spent
    customerDetailLastOrder.textContent = customer.lastOrder
    customerDetailLastOrderDate.textContent = customer.lastOrder

    let badgeClass
    switch (customer.status) {
      case "VIP":
        badgeClass = "bg-purple"
        break
      case "Thường Xuyên":
        badgeClass = "bg-success"
        break
      case "Thỉnh Thoảng":
        badgeClass = "bg-info"
        break
      default:
        badgeClass = "bg-secondary"
    }

    customerDetailBadge.className = `badge ${badgeClass} mt-1`
    customerDetailBadge.textContent = customer.status

    customerDetailModal.show()
  }
}

document.getElementById('theme-toggle-btn').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const icon = this.querySelector('i');
  
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('bi-moon-stars', 'bi-sun');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    icon.classList.replace('bi-sun', 'bi-moon-stars');
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Check saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('#theme-toggle-btn i').classList.replace('bi-moon-stars', 'bi-sun');
  }
});

// Sidebar Toggle for Mobile
document.getElementById('sidebar-toggle').addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('show');
  document.getElementById('sidebar-overlay').classList.toggle('show');
});

// Close sidebar when clicking overlay
document.getElementById('sidebar-overlay').addEventListener('click', function() {
  document.getElementById('sidebar').classList.remove('show');
  document.getElementById('sidebar-overlay').classList.remove('show');
});

// Close sidebar when clicking nav-link on mobile
document.querySelectorAll('#sidebar .nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth < 768) {
      document.getElementById('sidebar').classList.remove('show');
      document.getElementById('sidebar-overlay').classList.remove('show');
    }
  });
});

// Table Sorting
document.addEventListener('DOMContentLoaded', function() {
  // Tìm tất cả các bảng có thể sắp xếp
  document.querySelectorAll('table').forEach(table => {
    const headers = table.querySelectorAll('th.sortable');
    
    headers.forEach(header => {
      header.addEventListener('click', function() {
        const sortField = this.getAttribute('data-sort');
        const currentIsAsc = this.classList.contains('sort-asc');
        
        // Reset tất cả headers
        headers.forEach(h => {
          h.classList.remove('sort-asc', 'sort-desc');
        });
        
        // Thiết lập hướng sắp xếp mới
        if (currentIsAsc) {
          this.classList.add('sort-desc');
          sortTable(table, sortField, 'desc');
        } else {
          this.classList.add('sort-asc');
          sortTable(table, sortField, 'asc');
        }
        
        // Lưu cài đặt sắp xếp vào localStorage
        const tableId = table.id || 'default-table';
        localStorage.setItem(`${tableId}-sort-field`, sortField);
        localStorage.setItem(`${tableId}-sort-direction`, currentIsAsc ? 'desc' : 'asc');
      });
    });
    
    // Áp dụng sắp xếp mặc định từ localStorage nếu có
    const tableId = table.id || 'default-table';
    const savedField = localStorage.getItem(`${tableId}-sort-field`);
    const savedDirection = localStorage.getItem(`${tableId}-sort-direction`);
    
    if (savedField && savedDirection) {
      const header = Array.from(headers).find(h => h.getAttribute('data-sort') === savedField);
      if (header) {
        header.classList.add(savedDirection === 'asc' ? 'sort-asc' : 'sort-desc');
        sortTable(table, savedField, savedDirection);
      }
    }
  });
});

// Hàm sắp xếp bảng
function sortTable(table, field, direction) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  // Sắp xếp hàng
  rows.sort((a, b) => {
    let aValue = getCellValue(a, field);
    let bValue = getCellValue(b, field);
    
    // Chuyển đổi giá trị thành số nếu có thể
    if (!isNaN(parseFloat(aValue)) && !isNaN(parseFloat(bValue))) {
      aValue = parseFloat(aValue.replace(/[^\d.-]/g, ''));
      bValue = parseFloat(bValue.replace(/[^\d.-]/g, ''));
    }
    
    // So sánh và xác định hướng sắp xếp
    if (aValue < bValue) {
      return direction === 'asc' ? -1 : 1;
    } else if (aValue > bValue) {
      return direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  // Thêm lại các hàng theo thứ tự sắp xếp
  rows.forEach(row => tbody.appendChild(row));
}

// Hàm lấy giá trị từ ô dựa vào trường sắp xếp
function getCellValue(row, field) {
  // Tìm ô dựa vào thuộc tính data-sort của header
  const headerIndex = Array.from(row.closest('table').querySelectorAll('th'))
    .findIndex(th => th.getAttribute('data-sort') === field);
  
  if (headerIndex === -1) return '';
  
  const cell = row.cells[headerIndex];
  
  // Trả về nội dung văn bản của ô
  return cell.textContent.trim();
}