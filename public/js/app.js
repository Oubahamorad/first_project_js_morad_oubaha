let subscribe = prompt(
  `Hello, are you here to : subscribe Or login  or changing_the_password ?`
);

let userDatabase = [
  {
    fullname: "morad",
    userEmail: "email",
    age: "Number",
    userPassword: "password",
  },
];

// If the user chooses to register, here are the details they must enter

if (subscribe == `subscribe`) {
  let fullname = prompt(" the  fullname ");
  fullname = fullname.trim();
  fullname =
    fullname.trim().charAt(0).toUpperCase() + fullname.slice(1).toLowerCase();
  const arr = name.split(" ");
  // Make sure all other letters are in lower case.
  for (let index = 0; index < fullname.length; index++) {
    const element = fullname[index];
    if (fullname[index] === "") {
      fullname =
        fullname.slice(0, 1) +
        fullname.trim().charAt(0).toUpperCase() +
        fullname.slice(index + 1);
    }
  }
  // - Do not save the name if it contains less than 5 characters (excluding spaces).

  if (fullname.replace(/[^\w ]/g, "").length <= 6) {
    console.log("3awd smya");
  } else {
    console.log("rak m9bol");
  }

  // *email

  let userEmail = prompt("insert your email ?");
  userEmail = userEmail.trim();
  userEmail = userEmail.toLowerCase();
  if (userEmail.includes(" ")) {
    console.log("gmail mm9bolch 7ayd espace");
  } else {
    let atpos = userEmail.indexOf("@");
    let dotpos = userEmail.lastIndexOf(".");

    if (atpos === -1 || dotpos !== dotpos.length) {
      alert("Not a valid e-mail address @");
    }
  }
  while (userEmail.length <= 10) {
    userEmail = prompt(
      "the  Email should containe   10 characters ! insert  a valide Email"
    );
    console.log(userEmail);
  }
}

// *age

let age = prompt("entre de age :");
let agge = age.trim();
if (age == Number || age.length > 0 || age.length < 3) {
  age = prompt("age mm9bolch");
}
console.log("m9bol");

// *password

let passwerd = prompt("entre passwerd ");
passwerd = password.trim();
