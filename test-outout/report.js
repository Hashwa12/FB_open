$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/aathi/eclipse-workspace/Cucumber/src/main/java/com/ADM/cucumber/feature/fbhome.feature");
formatter.feature({
  "line": 1,
  "name": "Reach newsfeeds in FB",
  "description": "",
  "id": "reach-newsfeeds-in-fb",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#@smoke"
    },
    {
      "line": 5,
      "value": "#Scenario: Login with credentials"
    },
    {
      "line": 6,
      "value": "#Given Open FB login page"
    },
    {
      "line": 7,
      "value": "#Then Enter User ID and Password"
    },
    {
      "line": 8,
      "value": "#|Password|"
    },
    {
      "line": 9,
      "value": "#|hai|"
    },
    {
      "line": 10,
      "value": "#|hello|"
    },
    {
      "line": 11,
      "value": "#|welcome|"
    },
    {
      "line": 12,
      "value": "#Then Click Login Button"
    },
    {
      "line": 14,
      "value": "#@Smoke"
    },
    {
      "line": 15,
      "value": "#Scenario Outline: Login with credentials"
    },
    {
      "line": 16,
      "value": "#Given Open FB login page"
    },
    {
      "line": 17,
      "value": "#Then Enter User ID \"\u003cid\u003e\" and Password \"\u003cpassword\u003e\""
    },
    {
      "line": 18,
      "value": "#Then Click Login Button"
    },
    {
      "line": 19,
      "value": "#Examples:"
    },
    {
      "line": 20,
      "value": "#|id|password|"
    },
    {
      "line": 21,
      "value": "#|abcd|hai|"
    },
    {
      "line": 22,
      "value": "#|hello|abcd|"
    }
  ],
  "line": 25,
  "name": "Login with credentials",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Open FB login page \"\u003cTotal Rounds\u003e\" \"\u003cTotal Values\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Enter User ID and Password",
  "rows": [
    {
      "cells": [
        "abcd",
        "pasword"
      ],
      "line": 28
    },
    {
      "cells": [
        "1234",
        "asdf"
      ],
      "line": 29
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click Login Button",
  "rows": [
    {
      "cells": [
        "Rounds",
        "Values"
      ],
      "line": 31
    },
    {
      "cells": [
        "Round 1",
        "Value 1"
      ],
      "line": 32
    },
    {
      "cells": [
        "Round 2",
        "Value 2"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials;",
  "rows": [
    {
      "cells": [
        "Total Rounds",
        "Total Values"
      ],
      "line": 37,
      "id": "reach-newsfeeds-in-fb;login-with-credentials;;1"
    },
    {
      "cells": [
        "First Round",
        "All first Value"
      ],
      "line": 38,
      "id": "reach-newsfeeds-in-fb;login-with-credentials;;2"
    },
    {
      "cells": [
        "Second Round",
        "All Second Value"
      ],
      "line": 39,
      "id": "reach-newsfeeds-in-fb;login-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 331500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "This tests dataTable as list and maps",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 38,
  "name": "Login with credentials",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Open FB login page \"First Round\" \"All first Value\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Enter User ID and Password",
  "rows": [
    {
      "cells": [
        "abcd",
        "pasword"
      ],
      "line": 28
    },
    {
      "cells": [
        "1234",
        "asdf"
      ],
      "line": 29
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click Login Button",
  "rows": [
    {
      "cells": [
        "Rounds",
        "Values"
      ],
      "line": 31
    },
    {
      "cells": [
        "Round 1",
        "Value 1"
      ],
      "line": 32
    },
    {
      "cells": [
        "Round 2",
        "Value 2"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "First Round",
      "offset": 20
    },
    {
      "val": "All first Value",
      "offset": 34
    }
  ],
  "location": "FBstepDef.open_FB_login_page(String,String)"
});
formatter.result({
  "duration": 306329500,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.enter_User_ID_and_Password(DataTable)"
});
formatter.result({
  "duration": 2683700,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.click_Login_Button(DataTable)"
});
formatter.result({
  "duration": 358300,
  "status": "passed"
});
formatter.after({
  "duration": 121700,
  "status": "passed"
});
formatter.before({
  "duration": 94900,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "This tests dataTable as list and maps",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 39,
  "name": "Login with credentials",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Open FB login page \"Second Round\" \"All Second Value\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Enter User ID and Password",
  "rows": [
    {
      "cells": [
        "abcd",
        "pasword"
      ],
      "line": 28
    },
    {
      "cells": [
        "1234",
        "asdf"
      ],
      "line": 29
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click Login Button",
  "rows": [
    {
      "cells": [
        "Rounds",
        "Values"
      ],
      "line": 31
    },
    {
      "cells": [
        "Round 1",
        "Value 1"
      ],
      "line": 32
    },
    {
      "cells": [
        "Round 2",
        "Value 2"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Second Round",
      "offset": 20
    },
    {
      "val": "All Second Value",
      "offset": 35
    }
  ],
  "location": "FBstepDef.open_FB_login_page(String,String)"
});
formatter.result({
  "duration": 199300,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.enter_User_ID_and_Password(DataTable)"
});
formatter.result({
  "duration": 146000,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.click_Login_Button(DataTable)"
});
formatter.result({
  "duration": 235500,
  "status": "passed"
});
formatter.after({
  "duration": 73200,
  "status": "passed"
});
});