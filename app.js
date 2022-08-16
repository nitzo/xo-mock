var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const userDataBase = [
  {
    phone: "1234567899",
    name: "Nitzan Bar",
    identification_number: "1234",
    account_number: "12345678",
    security_answer: "Hyro AI",
  },
];

const getAccountBalance = (accountNumber) => {
  return "Your balance is 1000$";
};

const IsAnyPropertieNull = (obj) => Object.values(obj).some((v) => v == null);

const validateAuthentication = (accountDetails) =>
  !IsAnyPropertieNull(accountDetails)
    ? userDataBase.some(
        (e) =>
          Object.entries(e).toString() ===
          Object.entries(accountDetails).toString()
      )
    : null;

app.post("/validate-user", function ({ body }, res, next) {
  console.log(body);
  console.log("This is validate function");
  res.status(200).json(validateAuthentication(body));
});

app.post("/account-balance", ({ body }, res, next) => {
  console.log(body);
  console.log("This is account balance function");
  res.status(200).json(getAccountBalance(body.account_number));
});

app.use(express.static(path.join(__dirname, "public")));

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});