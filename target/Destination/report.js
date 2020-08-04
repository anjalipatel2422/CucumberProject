$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 25879540600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to logged in successfully",
  "description": "",
  "id": "login-feature;user-should-be-able-to-logged-in-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter valid username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 409317400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enter_valid_username()"
});
formatter.result({
  "duration": 449628300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enter_valid_password()"
});
formatter.result({
  "duration": 162283800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_log_in_button()"
});
formatter.result({
  "duration": 4694874800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_be_able_to_logged_in_successfully()"
});
formatter.result({
  "duration": 100866200,
  "status": "passed"
});
formatter.after({
  "duration": 2774418200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "User should not be able to logged in successfully",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-logged-in-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters invalid Username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters invalid  password \"\u003cPassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should not be able to logged in successfully and \"\u003creceive message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-logged-in-successfully;",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "receive message"
      ],
      "line": 20,
      "id": "login-feature;user-should-not-be-able-to-logged-in-successfully;;1"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 21,
      "id": "login-feature;user-should-not-be-able-to-logged-in-successfully;;2"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 22,
      "id": "login-feature;user-should-not-be-able-to-logged-in-successfully;;3"
    },
    {
      "cells": [
        "Anil",
        "1234",
        "Invalid credentials"
      ],
      "line": 23,
      "id": "login-feature;user-should-not-be-able-to-logged-in-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13129232300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not be able to logged in successfully",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-logged-in-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters invalid Username \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters invalid  password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should not be able to logged in successfully and \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 8544700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidUsername(String)"
});
formatter.result({
  "duration": 204723700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "MyStepDefs.userEntersInvalidPassword(String)"
});
formatter.result({
  "duration": 124236600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_log_in_button()"
});
formatter.result({
  "duration": 382136200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.userShouldNotBeAbleToLoggedInSuccessfullyAnd(String)"
});
formatter.result({
  "duration": 63440900,
  "status": "passed"
});
formatter.after({
  "duration": 2171310100,
  "status": "passed"
});
formatter.before({
  "duration": 12849856300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should not be able to logged in successfully",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-logged-in-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters invalid Username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters invalid  password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should not be able to logged in successfully and \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 15706800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidUsername(String)"
});
formatter.result({
  "duration": 185656700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "MyStepDefs.userEntersInvalidPassword(String)"
});
formatter.result({
  "duration": 135547900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_log_in_button()"
});
formatter.result({
  "duration": 373128700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.userShouldNotBeAbleToLoggedInSuccessfullyAnd(String)"
});
formatter.result({
  "duration": 79463400,
  "status": "passed"
});
formatter.after({
  "duration": 2991659200,
  "status": "passed"
});
formatter.before({
  "duration": 12889905500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should not be able to logged in successfully",
  "description": "",
  "id": "login-feature;user-should-not-be-able-to-logged-in-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters invalid Username \"Anil\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters invalid  password \"1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should not be able to logged in successfully and \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 19883300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anil",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userEntersInvalidUsername(String)"
});
formatter.result({
  "duration": 202537800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 31
    }
  ],
  "location": "MyStepDefs.userEntersInvalidPassword(String)"
});
formatter.result({
  "duration": 175489900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_log_in_button()"
});
formatter.result({
  "duration": 1126267500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.userShouldNotBeAbleToLoggedInSuccessfullyAnd(String)"
});
formatter.result({
  "duration": 84521500,
  "status": "passed"
});
formatter.after({
  "duration": 2659680900,
  "status": "passed"
});
});