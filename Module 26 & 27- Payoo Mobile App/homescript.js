const pin = 1234;
let amount = 0;
const transactionData = [];

const getValue = (id) => {
  const element = document.getElementById(id);
  const value = element.value;
  return parseInt(value);
};

const updateBalance = (amount) => {
  document.getElementById("balance").innerHTML = `<i class="fa-solid fa-bangladeshi-taka-sign"></i>${amount}`;
};

const makeBlank = (...ids) => {
  ids.forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });
};

const makeActive = (id) => {
  const actives = document.getElementsByClassName("active");
  const element = document.getElementById(id);
  for (let active of actives) {
    active.classList.remove("active");
  }

  element.classList.add("active");
};

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  window.location.href = "./index.html";
});

const addMoney = () => {
  const functionality = document.getElementById("functionality");

  makeActive("add-money");
  functionality.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div>
      <h3 class="font-bold mb-3 ml-2">Add Money</h3>

      <div class="bg-white rounded-2xl py-3 px-2">
        <div class="w-[100%] mx-auto px-3">
          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Select A Bank</legend>
            <select class="select w-full border-none bg-gray-100 rounded-4xl">
              <option disabled selected class="text-gray-400"><span class="text-gray-400">Select bank</span></option>
              <option>Dutch Bangla Bank</option>
              <option>Islami Bank Bangladesh LTD.</option>
              <option>AB Bank</option>
            </select>
          </fieldset>

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Bank Account Number</legend>
            <input placeholder="Enter 11 digit account number" type="number" class="h-10 px-4 text-md border-none bg-gray-100 w-full rounded-4xl" name="" id="">
          </fieldset>

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Amount to Add</legend>
            <input id="amount" placeholder="Add Amount to add" type="number" class="h-10 px-4 border-none bg-gray-100 text-md  w-full rounded-4xl" name="" id="">
          </fieldset>

          <div id="add-money-status">

          </div>

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Pin Number</legend>
            <input placeholder="Enter 4 digit pin number" type="password" id="pin" class="h-10 px-4 border-none bg-gray-100 text-md  w-full rounded-4xl" name="" id="">
          </fieldset>

          <div id="input-pin-status">
          
          </div>

          <button onclick="updateAddedAmount()" type="button" id="add-money-btn"
          class="btn bg-[#0874F2] text-white text-[16px] w-full rounded-3xl mt-3">
          Add Money
        </button>

        </div>
      </div>
      </div>`;

  functionality.append(newDiv);
};

const updateAddedAmount = () => {
  makeBlank("add-money-status", "input-pin-status");

  const newAmount = getValue("amount");
  const inputPin = getValue("pin");

  if (inputPin == pin) {
    if (newAmount < 50) {
      document.getElementById(
        "add-money-status"
      ).innerHTML = `<p class="text-center text-[14px] text-green-500"> Minimum add money is Tk. 50</p>`;
    } else {
      amount += newAmount;
      updateBalance(amount);

      const functionality = document.getElementById("functionality");
      functionality.innerHTML = `<div class="bg-green-100 p-5 text-center rounded-md shadow-lg">
        <p>Tk. <span class="text-green-600 font-semibold">${newAmount}</span> has been added.</p>
        <p>Your current balance is Tk. <span class="text-green-600 font-semibold">${amount}</span></p>
        <a onclick="transactions()" class="mt-2 btn border-none bg-transparent text-blue-600 text-lg">See Transactions</a>
      </div>`;
    }
  } else {
    document.getElementById(
      "input-pin-status"
    ).innerHTML = `<p class="text-center text-[14px] text-red-500"> Wrong Pin. Please Enter The Correct Pin</p>`;
  }

  updateTransaction("Add Money");
};

const cashOut = () => {
  const functionality = document.getElementById("functionality");

  makeBlank("functionality");
  makeActive("cash-out");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div>
      <h3 class="font-bold mb-3 ml-2">Cash Out</h3>

      <div class="bg-white rounded-2xl py-3 px-2">
        <div class="w-[100%] mx-auto px-3">

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Agent Number</legend>
            <input placeholder="Enter 11 digit agent number" type="number" class="h-10 px-4 text-md border-none bg-gray-100 w-full rounded-4xl" name="" id="">
          </fieldset>

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Amount to Add</legend>
            <input id="amount" placeholder="Add Amount to withdraw" type="number" class="h-10 px-4 border-none bg-gray-100 text-md  w-full rounded-4xl" name="" id="">
          </fieldset>

          <div id="out-money-status">

          </div>

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Pin Number</legend>
            <input placeholder="Enter 4 digit pin number" type="password" id="pin" class="h-10 px-4 border-none bg-gray-100 text-md  w-full rounded-4xl" name="" id="">
          </fieldset>

          <div id="input-pin-status">
          
          </div>

          <button onclick="updateAmount()" type="button" id="add-money-btn"
          class="btn bg-[#0874F2] text-white text-[16px] w-full rounded-3xl mt-3">
         Withdraw Money
        </button>

        </div>
      </div>
      </div>`;

  functionality.append(newDiv);
};

const updateAmount = () => {
  makeBlank("out-money-status", "input-pin-status");

  const outAmount = getValue("amount");
  const inputPin = getValue("pin");

  if (inputPin == pin) {
    if (outAmount < 100) {
      document.getElementById(
        "out-money-status"
      ).innerHTML = `<p class="text-center text-[14px] text-green-500"> Minimum amount to cashout/transfer is Tk. 100</p>`;
    } else {
      if (amount >= outAmount) {
        amount -= outAmount;
        updateBalance(amount);

        const functionality = document.getElementById("functionality");
        functionality.innerHTML = `<div class="bg-green-100 p-5 text-center rounded-md shadow-lg">
        <p>Tk. <span class="text-green-600 font-semibold">${outAmount}</span> has been withdrawn/transferred.</p>
        <p>Your current balance is Tk. <span class="text-green-600 font-semibold">${amount}</span></p>
        <a onclick="transactions()" class="mt-2 btn border-none bg-transparent text-blue-600 text-lg">See Transactions</a>
      </div>`;
      } else {
        const functionality = document.getElementById("functionality");
        functionality.innerHTML = `<div class="bg-green-100 p-5 text-center rounded-md shadow-lg">
        <p class"text-red-600" >Not Enough Balance For The Transaction</p>
        <a onclick="transactions()" class="mt-2 btn border-none bg-transparent text-blue-600 text-lg" href="">See Transactions</a>
      </div>`;
      }
    }
  } else {
    document.getElementById(
      "input-pin-status"
    ).innerHTML = `<p class="text-center text-[14px] text-red-500"> Wrong Pin. Please Enter The Correct Pin</p>`;
  }

  updateTransaction("Cash Out/Transfer");
};

const transferMoney = () => {
  const functionality = document.getElementById("functionality");

  makeBlank("functionality");
  makeActive("transfer-money");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div>
      <h3 class="font-bold mb-3 ml-2">Transfer Money</h3>

      <div class="bg-white rounded-2xl py-3 px-2">
        <div class="w-[400px] mx-auto px-3">

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Receiver A/C Number</legend>
            <input placeholder="Enter 11 digit agent number" type="number" class="h-10 px-4 text-md border-none bg-gray-100 w-full rounded-4xl" name="" id="">
          </fieldset>

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Amount to Transfer</legend>
            <input id="amount" placeholder="Add Amount to transfer" type="number" class="h-10 px-4 border-none bg-gray-100 text-md  w-full rounded-4xl" name="" id="">
          </fieldset>

          <div id="out-money-status">

          </div>

          <fieldset class="fieldset w-full">
            <legend class="fieldset-legend rounded-2xl">Pin Number</legend>
            <input placeholder="Enter 4 digit pin number" type="password" id="pin" class="h-10 px-4 border-none bg-gray-100 text-md  w-full rounded-4xl" name="" id="">
          </fieldset>

          <div id="input-pin-status">
          
          </div>

          <button onclick="updateAmount()" type="button" id="add-money-btn"
          class="btn bg-[#0874F2] text-white text-[16px] w-full rounded-3xl mt-3">
         Withdraw Money
        </button>

        </div>
      </div>
      </div>`;

  functionality.append(newDiv);

};

const getBonus = () => {
  const functionality = document.getElementById("functionality");

  makeBlank("functionality");
  makeActive("get-bonus");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="bg-green-100 p-5 text-center rounded-md shadow-lg">
        <p>The <span class="text-green-600 font-semibold">Get Bonus</span> feature is not build yet.</p>
        <p>We are working on it.</p>
        <a onclick="transactions()" class="mt-2 btn border-none bg-transparent text-blue-600 text-lg">See Transactions</a>
      </div>`;

  functionality.append(newDiv);
};

const payBill = () => {
  const functionality = document.getElementById("functionality");

  makeBlank("functionality");
  makeActive("pay-bill");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="bg-green-100 p-5 text-center rounded-md shadow-lg">
        <p>The <span class="text-green-600 font-semibold">Pay Bill</span> feature is not build yet.</p>
        <p>We are working on it.</p>
        <a onclick="transactions()" class="mt-2 btn border-none bg-transparent text-blue-600 text-lg" >See Transactions</a>
      </div>`;

  functionality.append(newDiv);
};

const transactions = () => {
  const functionality = document.getElementById("functionality");

  makeBlank("functionality");
  makeActive("transactions");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <div id="allTransactionsDiv" >
        <div class="flex justify-between">
          <h3 class="font-bold mb-3 ml-2">Transaction History</h3>
          <a href="#" class="text-gray-400">See All</a>
        </div>

        <div id="transactionDiv" class="flex flex-col gap-3">
        

        </div>
        
      </div>
    `;

  functionality.append(newDiv);
  const transactionDiv = document.getElementById("transactionDiv");


  if(!transactionDiv)
    return
  transactionDiv.innerHTML = transactionData.map((data) => {
    return `<div class="bg-white w-full h-full rounded-xl shadow p-2 flex justify-between items-center">
          <div class="w-full">
            <div class="flex items-center">
              <div class="flex justify-between">
                <div
                  class="bg-gray-300 w-[45px] h-[45px] rounded-[100%] flex justify-center items-center">
                  <img src="assets/purse1.png" class="w-[25px]" />
                </div>
                <div class="flex flex-col ml-5">
                  <p class="font-semibold text-[16px]">${data.name}</p>
                  <p class="text-[12px] text-gray-500">${data.date}</p>
                </div>
              </div>
            </div>
            
          </div>
          <div class="w-full">
              <p class="text-right mr-3 text-gray-500">
<i class="fa-solid fa-ellipsis-vertical"></i></p>
            </div>
        </div>`;
  }).join("")
};

const updateTransaction = (type) => {
  const data = {
    name: type,
    date: new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
};
