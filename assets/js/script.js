var field_name = document.querySelector("[name=name]");
var field_phone = document.querySelector("[name=tel]");

var field_name_call = document.querySelector("[name=name_call]");
var field_phone_call = document.querySelector("[name=tel_call]");

var field_name_hero = document.querySelector("[name=name_hero]");
var field_phone_hero = document.querySelector("[name=tel_hero]");


var smtp = "d46ded46-54ec-47a5-8235-f0b9067d1811";
var target_email = "join.commercial@gmail.com";
var send_email = "a.berest@ftr.group";

var date = new Date().toLocaleString();

var validateForms = function(selector, rules, callback) {
  new window.JustValidate(selector, {
    rules: rules,
    focusWrongField: true,
    submitHandler: function(form, values, ajax) {
      const msg = callback(values);
      const success = document.createElement("label");

      success.className = "form__label_success";
      success.innerHTML = "Your data sent!";

      form.append(success);
      form.querySelector("[type=submit]").disabled = true;

      Email.send({
        SecureToken: smtp,

        To: target_email,

        From: send_email,

        Subject: "jo1n.com",
        Body:
          "<br> Name: " + field_name.value + "<br> Phone: " + field_phone.value,
      }).then();
    },
    invalidFormCallback: function(errors) {
      console.log(errors);
    },
  });
};

var validateForms_call = function(selector, rules, callback) {
  new window.JustValidate(selector, {
    rules: rules,
    focusWrongField: true,
    submitHandler: function(form, values, ajax) {
      const msg = callback(values);
      const success = document.createElement("label");

      success.className = "form__label_success";
      success.innerHTML = "Your data sent!";

      form.append(success);
      form.querySelector("[type=submit]").disabled = true;

      Email.send({
        SecureToken: smtp,

        To: target_email,

        From: send_email,

        Subject: "jo1n.com",
        Body:
          "<br> Name: " +
          field_name_call.value +
          "<br> Phone: " +
          field_phone_call.value,
      }).then();
    },
    invalidFormCallback: function(errors) {
      console.log(errors);
    },
  });
};

var validateForms_hero = function(selector, rules, callback) {
  new window.JustValidate(selector, {
    rules: rules,
    focusWrongField: true,
    submitHandler: function(form, values, ajax) {
      const msg = callback(values);
      const success = document.createElement("label");

      success.className = "form__label_success";
      success.innerHTML = "Your data sent!";

      form.append(success);
      form.querySelector("[type=submit]").disabled = true;

      Email.send({
        SecureToken: smtp,

        To: target_email,

        From: send_email,

        Subject: "jo1n.com",
        Body:
          "<br> Name: " +
          field_name_hero.value +
          "<br> Phone: " +
          field_phone_hero.value,
      }).then();
    },
    invalidFormCallback: function(errors) {
      console.log(errors);
    },
  });
};

validateForms(
  "#form",
  {
    tel: {
      required: true,
      minLength: "10",
    },
    name: {
      required: true,
      minLength: "2",
    },
  },
  (values) => {
    return `
Source: Jo1n.com,
ФИО:  ${values["name"]},
Телефон: ${values["tel"]},
`;
  }
);

validateForms_call(
  "#form-call",
  {
    tel_call: {
      required: true,
      minLength: "10",
    },
    name_call: {
      required: true,
      minLength: "2",
    },
  },
  (values) => {
    return `
  Source: Jo1n.com,
  ФИО:  ${values["name_call"]},
  Телефон: ${values["tel_call"]},
  `;
  }
);

validateForms_hero(
  "#form-hero",
  {
    tel_hero: {
      required: true,
      minLength: "10",
    },
    name_hero: {
      required: true,
      minLength: "2",
    },
  },
  (values) => {
    return `
  Source: Jo1n.com,
  ФИО:  ${values["name_hero"]},
  Телефон: ${values["tel_hero"]},
  `;
  }
);
