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
  {
    phone: "1234567899",
    name: "John",
    identification_number: "1234",
    account_number: "12345678",
    security_answer: "school",
  },
  {
    phone: "1234567899",
    name: "Adam",
    identification_number: "1234",
    account_number: "12345678",
    security_answer: "cat",
  },
];

const getAccountBalance = (accountNumber) => {
  return "Your balance is 1000$";
};

const IsAnyPropertieNull = (obj) => Object.values(obj).some((v) => v == null);

const validateAuthentication = (accountDetails) =>
    accountDetails && userDataBase.some(
        (e) => e.identification_number == account.identification_number
      )

app.post("/validate-user", function ({ body }, res, next) {
  console.log(body);
  console.log("This is validate function");
  res.status(200).json(validateAuthentication(body) ?? null);
});

app.post("/account-balance", ({ body }, res, next) => {
  console.log(body);
  console.log("This is account balance function");
  res.status(200).json(getAccountBalance(body.account_number));
});

app.use(express.static(path.join(__dirname, "public")));

var listener = app.listen(process.env.PORT || 8080, function () {
  console.log("Listening on port " + listener.address().port);
});
