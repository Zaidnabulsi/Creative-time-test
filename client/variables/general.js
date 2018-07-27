import React from "react";

// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";
import Build from "@material-ui/icons/Build";

// core components
import CustomDropdown from "../components/CustomDropdown/CustomDropdown.js";

// ##############################
// // // stories for RTLSupport view
// #############################

const rtlStories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "جهة أي",
    titleColor: "danger",
    body: (
      <p>
        قام كل ماذا العصبة اوروبا. أي جورج العالمي أخر, كان تم أطراف القوى
        استبدال. أسر ميناء تكتيكاً الجديدة، كل. جُل اللا التكاليف بـ, عرفها
        النزاع لليابان بـ أضف. انتهت المدن الثالث من وقد.وقبل قادة إحتار عن أخر.
        حين ونتج أخرى قد. بالعمل بالمطالبة فقد قد. عن جنوب ومضى الشتاء.
      </p>
    ),
    footerTitle: "مدن أن هُزم سكان, مكن."
  },
  {
    // Second story
    inverted: true,
    badgeColor: "success",
    badgeIcon: Extension,
    title: "جُل حكومة",
    titleColor: "success",
    body: (
      <p>
        عل فكانت الثقيلة بلا. شيء بخطوط بالرّغم التبرعات عن, يطول بأيدي لم كلّ.
        معقل الغالي واتّجه لم وتم, أن الصفحة بالمحور حول, بال مرمى الصفحات
        قُدُماً و. الأخذ سبتمبر العالم من ذلك. ان يبق شدّت الأبرياء, الى الربيع،
        والمانيا كل. ودول الأهداف التقليدي عل أضف, كلا يقوم الأخذ الآلاف بل.
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "هذا غينيا",
    titleColor: "info",
    body: (
      <p>
        جهة المارق والديون التقليدية في, هو وترك المجتمع بريطانيا ذلك, لمّ ما
        العالم، اليابان،. ٣٠ فقامت أوروبا مشاركة بعد, ٢٠٠٤ الجو مساعدة ما حدى.
        في عليها وبحلول معارضة بعض. عن الأرض وبداية العمليات ولم. الجو جديداً
        الأوروبيّون أم به،. ثم التي نتيجة الآلاف جعل, عن المارق السادس قام. ما
        أخر فقامت الأجل الشرق،, فصل كل وسوء الأرواح. ثم بعد وشعار بأيدي. قبل
        وكسبت الغالي الولايات بل, ٣٠ أمّا أخرى لأداء أضف. هو منتصف معزّزة على.
        بـ أفريقيا التغييرات مما, أثره،.
      </p>
    ),
    footer: (
      <CustomDropdown
        rtlActive
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" },
          color: "info"
        }}
        dropdownList={[
          "ان",
          "إجلاء لفرنسا",
          "أواخر الأرض بل",
          { divider: true },
          "عل اليها"
        ]}
      />
    )
  }
];

// ##############################
// // // stories for Widgets view
// #############################

const widgetStories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "Some Title",
    titleColor: "danger",
    body: (
      <p>
        Wifey made the best Father's Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
    ),
    footerTitle: "11 hours ago via Twitter"
  },
  {
    // Second story
    inverted: true,
    badgeColor: "success",
    badgeIcon: Extension,
    title: "Another One",
    titleColor: "success",
    body: (
      <p>
        Thank God for the support of my wife and real friends. I also wanted to
        point out that it’s the first album to go number 1 off of streaming!!! I
        love you Ellen and also my number one design rule of anything I do from
        shoes to music to homes is that Kim has to like it....
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "Another Title",
    titleColor: "info",
    body: (
      <div>
        <p>
          Called I Miss the Old Kanye That’s all it was Kanye And I love you
          like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
          LA 11:10PM
        </p>
        <p>
          What if Kanye made a song about Kanye Royère doesn't make a Polar bear
          bed but the Polar bear couch is my favorite piece of furniture we own
          It wasn’t any Kanyes Set on his goals Kanye
        </p>
      </div>
    ),
    footer: (
      <CustomDropdown
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" },
          color: "info"
        }}
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link"
        ]}
      />
    )
  }
];

// ##############################
// // // stories for Timeline view
// #############################

const stories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "Some Title",
    titleColor: "danger",
    body: (
      <p>
        Wifey made the best Father's Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
    ),
    footerTitle: "11 hours ago via Twitter"
  },
  {
    // Second story
    badgeColor: "success",
    badgeIcon: Extension,
    title: "Another One",
    titleColor: "success",
    body: (
      <p>
        Thank God for the support of my wife and real friends. I also wanted to
        point out that it’s the first album to go number 1 off of streaming!!! I
        love you Ellen and also my number one design rule of anything I do from
        shoes to music to homes is that Kim has to like it....
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "Another Title",
    titleColor: "info",
    body: (
      <div>
        <p>
          Called I Miss the Old Kanye That’s all it was Kanye And I love you
          like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
          LA 11:10PM
        </p>
        <p>
          What if Kanye made a song about Kanye Royère doesn't make a Polar bear
          bed but the Polar bear couch is my favorite piece of furniture we own
          It wasn’t any Kanyes Set on his goals Kanye
        </p>
      </div>
    ),
    footer: (
      <CustomDropdown
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" },
          color: "info"
        }}
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link"
        ]}
      />
    )
  },
  {
    // Fourth story
    badgeColor: "warning",
    badgeIcon: FlightLand,
    title: "Another One",
    titleColor: "warning",
    body: (
      <p>
        Tune into Big Boy's 92.3 I'm about to play the first single from Cruel
        Winter also to Kim’s hair and makeup Lorraine jewelry and the whole
        style squad at Balmain and the Yeezy team. Thank you Anna for the invite
        thank you to the whole Vogue team
      </p>
    )
  }
];

// ##############################
// // // data for populating the calendar in Calendar view
// #############################

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    title: "All Day Event",
    allDay: true,
    start: new Date(y, m, 1),
    end: new Date(y, m, 1),
    color: "default"
  },
  {
    title: "Meeting",
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: "green"
  },
  {
    title: "Lunch",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: "red"
  },
  {
    title: "Nud-pro Launch",
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: "azure"
  },
  {
    title: "Birthday Party",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    color: "azure"
  },
  {
    title: "Click for Creative Tim",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "orange"
  },
  {
    title: "Click for Google",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "rose"
  }
];

// ##############################
// // // Tasks for TasksCard - see Widget view
// #############################

var bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About"
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];

// ##############################
// // // Tasks for TasksCard - see RTLSupport view
// #############################

var rtlBugs = [
  "فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.",
  "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.",
  "تسبب أفريقيا ضرب عن, عن إنطلاق جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];
var rtlWebsite = [
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];
var rtlServer = [
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];

// ##############################
// // // data for datatables.net in DataTables view
// #############################

const dataTable = {
  headerRow: ["Name", "Position", "Office", "Age", "Actions"],
  footerRow: ["Name", "Position", "Office", "Age", "Actions"],
  patientData: [
    ["Tiger Nixon", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Garrett Winters", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Ashton Cox", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Cedric Kelly", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Airi Satou", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Brielle Williamson", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Herrod Chandler", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Rhona Davidson", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Colleen Hurst", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Sonya Frost", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Jena Gaines", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Quinn Flynn", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Charde Marshall", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Haley Kennedy", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Tatyana Fitzpatrick", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Michael Silva", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Paul Byrd", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Gloria Little", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Bradley Greer", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Dai Rios", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Jenette Caldwell", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Yuri Berry", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Caesar Vance", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Doris Wilder", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Angelica Ramos", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Gavin Joyce", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Jennifer Chang", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Brenden Wagner", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Fiona Green", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Shou Itou", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Michelle House", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Suki Burks", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Prescott Bartlett", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Gavin Cortez", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Martena Mccray", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Unity Butler", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Howard Hatfield", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Hope Fuentes", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Vivian Harrell", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Timothy Mooney", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Jackson Bradshaw", "9253399426", "8/19/1998", "999998", "913991", "N"],
    ["Olivia Liang", "9253399426", "8/19/1998", "999998", "913991", "N"]
  ],
  operationData: [
    ["Tiger Nixon", "Removal of Lesion", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Garrett Winters", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Ashton Cox", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Cedric Kelly", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Airi Satou", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Brielle Williamson", "Excision of BCC from scalp", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Herrod Chandler", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Rhona Davidson", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Colleen Hurst", "Removal of Lesion", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Sonya Frost", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Jena Gaines", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Quinn Flynn", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Charde Marshall", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Haley Kennedy", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Tatyana Fitzpatrick", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Michael Silva", "Excision of BCC from scalp", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Paul Byrd", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Gloria Little", "Excision of cyst", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Bradley Greer", "Removal of Lesion", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Dai Rios", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Jenette Caldwell", "Excision of sebaceous cyst", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Yuri Berry", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Caesar Vance", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Doris Wilder", "Excision of sebaceous cyst", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Angelica Ramos", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Gavin Joyce", "Excision of cyst", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Jennifer Chang", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Brenden Wagner", "Removal of Lesion", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Fiona Green", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Shou Itou", "Excision of sebaceous cyst", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Michelle House", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Suki Burks", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Prescott Bartlett", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Gavin Cortez", "Excision of sebaceous cyst", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Martena Mccray", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Unity Butler", "Removal of Lesion", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Howard Hatfield", "Excision of sebaceous cyst", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Hope Fuentes", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Vivian Harrell", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Timothy Mooney", "Removal of exostosis", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Jackson Bradshaw", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"],
    ["Olivia Liang", "Excision of BCC", "08/19/2018", "16:00", "120", "Ali Abdaal"]
  ],
  holdingData: [
    ["Tiger Nixon", "Removal of Lesion"],
    ["Garrett Winters", "Removal of exostosis"],
    ["Ashton Cox", "Excision of BCC"],
    ["Cedric Kelly", "Removal of exostosis"],
    ["Airi Satou", "Excision of BCC"],
    ["Brielle Williamson", "Excision of BCC from scalp"],
    ["Herrod Chandler", "Removal of exostosis"],
    ["Rhona Davidson", "Excision of BCC"],
    ["Colleen Hurst", "Removal of Lesion"],
    ["Sonya Frost", "Excision of BCC"],
    ["Jena Gaines", "Excision of BCC"],
    ["Quinn Flynn", "Removal of exostosis"],
    ["Charde Marshall", "Excision of BCC"],
    ["Haley Kennedy", "Excision of BCC"],
    ["Tatyana Fitzpatrick", "Removal of exostosis"],
    ["Michael Silva", "Excision of BCC from scalp"],
    ["Paul Byrd", "Excision of BCC"],
    ["Gloria Little", "Excision of cyst"],
    ["Bradley Greer", "Removal of Lesion"],
    ["Dai Rios", "Removal of exostosis"],
    ["Jenette Caldwell", "Excision of sebaceous cyst"],
    ["Yuri Berry", "Excision of BCC"],
    ["Caesar Vance", "Removal of exostosis"],
    ["Doris Wilder", "Excision of sebaceous cyst"],
    ["Angelica Ramos", "Excision of BCC"],
    ["Gavin Joyce", "Excision of cyst"],
    ["Jennifer Chang", "Removal of exostosis"],
    ["Brenden Wagner", "Removal of Lesion"],
    ["Fiona Green", "Excision of BCC"],
    ["Shou Itou", "Excision of sebaceous cyst"],
    ["Michelle House", "Removal of exostosis"],
    ["Suki Burks", "Excision of BCC"],
    ["Prescott Bartlett", "Excision of BCC"],
    ["Gavin Cortez", "Excision of sebaceous cyst"],
    ["Martena Mccray", "Excision of BCC"],
    ["Unity Butler", "Removal of Lesion"],
    ["Howard Hatfield", "Excision of sebaceous cyst"],
    ["Hope Fuentes", "Removal of exostosis"],
    ["Vivian Harrell", "Excision of BCC"],
    ["Timothy Mooney", "Removal of exostosis"],
    ["Jackson Bradshaw", "Excision of BCC"],
    ["Olivia Liang", "Excision of BCC"]
  ]
};

export {
  // data for React Big Calendar in Calendar view
  events,
  // stories for RTLSupport view
  rtlStories,
  // stories for Widgets view
  widgetStories,
  // stories for Timeline view
  stories,
  // these 3 are used to create the tasks lists in TasksCard - Widget view
  bugs,
  website,
  server,
  // these 3 are used to create the tasks lists in TasksCard - RTLSupport view
  rtlBugs,
  rtlWebsite,
  rtlServer,
  // data for datatables.net in DataTables view
  dataTable
};
