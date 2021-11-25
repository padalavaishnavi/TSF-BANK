const columnDefs = [
    {headerName: "S.NO", field: "sNO", cellClass: "grid-cell-centered" },
    {field: "Name" },
    {field: "Email" },
    {field: "Balance"}
  ];
//data
  var rowData = [
    { sNO: "1", Name: "Aarthi", Email: "Aarthi@email.com", Balance: 40000 },
    { sNO: "2", Name: "Maria", Email: "maria@email.com", Balance:50000 },
    { sNO: "3", Name: "Madhu", Email: "madhu@email.com", Balance: 60000 },
    { sNO: "4", Name: "Pruthvi", Email: "pruthvi@email.com", Balance: 70000 },
    { sNO: "5", Name: "Lalitha", Email: "lalitha@email.com", Balance: 80000 },
    { sNO: "6", Name: "Bhaskar", Email: "bhaskar@email.com", Balance: 90000 },
    { sNO: "7", Name: "Praveen", Email: "praveen@email.com", Balance:100000 },
    { sNO: "8", Name: "Arun", Email: "arun@email.com", Balance:200000 },
    { sNO: "9", Name: "Deepna", Email: "deepna@email.com", Balance:55000 },
    { sNO: "10", Name: "Sandhya", Email: "sandhya@email.com", Balance: 75000 },
  ];

  // let the grid know which columns and what data to use
  var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: {
      resizable: true,
      minWidth: 80,
      flex: 1,
      filter: true
      //enablePivot: true,
  },
  animateRows: true,
  pagination: true,
  paginationPageSize: 10,
  paginationNumberFormatter: function (params) {
      return '[' + params.value.toLocaleString() + ']';
  },
  };

  document.addEventListener("DOMContentLoaded", function () {
      // lookup the container we want the Grid to use
      var eGridDiv = document.querySelector('#myGrid');
      // create the grid passing in the div to use together with the columns & data we want to use
      new agGrid.Grid(eGridDiv, gridOptions);
  });
  function onPageSizeChanged(newPageSize) {
  var value = document.getElementById('page-size').value;
  gridOptions.api.paginationSetPageSize(Number(value));
}

function modalDisplay(){
console.log("I am here")
$('#instructions').modal('show');
}

function updateRecord(){
let recieverName = $("#receiversName").val();
let recieverAmount = $("#Amount").val();
let senderName = $("#sendersName").val();
var re = new RegExp("^[0-9]+$");
console.log("recieverName =  " + recieverName );
console.log("recieverAmount = " + recieverAmount);
if(senderName == '' && recieverName == '' && recieverAmount === ''){
  alert("Please Provide Name and Amount to proceed");
}
for(let i = 0; i < rowData.length; i++){
  if(rowData[i].Name == recieverName){
    let balance = parseInt(rowData[i].Balance, 10);
    rowData[i].Balance = parseInt(recieverAmount,10) + balance;
    console.log(rowData[i].Balance);
  }
  if(rowData[i].Name == senderName){
    let balance = parseInt(rowData[i].Balance, 10);
    rowData[i].Balance = balance - parseInt(recieverAmount,10) ;
    console.log(rowData[i].Balance);
  }
}
alert("TRANSACTION SUCCESSFULL !!")
gridOptions.api.redrawRows();
$('#instructions').modal('hide');
}