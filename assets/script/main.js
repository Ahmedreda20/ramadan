//import items
const timeCountItems = document.querySelectorAll(".timeCount_item");
const prayItem = document.querySelector(".pray_content");
const form = document.querySelector(".print_form");
const allPrays = [
  {
    content:
      "اَللّهُمَّ قَرِّبْني فيهِ اِلى مَرضاتِكَ، وَجَنِّبْني فيهِ مِن سَخَطِكَ وَنَقِماتِكَ، وَوَفِّقني فيهِ لِقِرائَةِ اياتِِكَ، بِرَحمَتِكَ يا أرحَمَ الرّاحمينَ.",
  },
  {
    content:
      "اَللّهُمَّ ارْزُقني فيهِ الذِّهنَ وَالتَّنْبيهِ، وَباعِدْني فيهِ مِنَ السَّفاهَةِ وَالتَّمْويهِ، وَاجْعَل لي نَصيباً مِن كُلِّ خَيْرٍ تُنْزِلُ فيهِ، بِجودِكَ يا اَجوَدَ الأجْوَدينَ.",
  },
  {
    content:
      "اَللّهُمَّ قَوِّني فيهِ عَلى اِقامَةِ اَمرِكَ، وَاَذِقني فيهِ حَلاوَةِ ذِكْرِكَ، وَاَوْزِعْني فيهِ لِأداءِ شُكْرِكَ بِكَرَمِكَ، وَاحْفَظْني فيهِ بِحِفظِكَ وَسَتْرِكَ يا اَبصَرَ النّاظِرينَ.",
  },
  {
    content:
      "اَللّهُمَّ اجعَلني فيهِ مِنَ المُستَغْفِرينَ، وَاجعَلني فيهِ مِن عِبادِكَ الصّالحينَ القانِتينَ، وَاجعَلني فيهِ مِن اَوْليائِكَ المُقَرَّبينَ، بِرَأفَتِكَ يا اَرحَمَ الرّاحمينَ.",
  },
  {
    content:
      "اَللّهُمَّ لا تَخْذُلني فيهِ لِتَعَرُّضِ مَعصِيَتِكَ، وَلاتَضرِبني بِسِياطِ نَقِمَتِكَ، وَزَحْزِحني فيهِ مِن موُجِبات سَخَطِكَ بِمَنِّكَ وَاَياديكَ يا مُنتَهى رَغْبَةِ الرّاغِبينَ.",
  },
  {
    content:
      "اَللّهُمَّ اَعِنّي فيهِ عَلى صِيامِهِ وَقِيامِهِ، وَجَنِّبني فيهِ مِن هَفَواتِهِ وَاثامِهِ، وَارْزُقني فيهِ ذِكْرَكَ بِدَوامِهِ، بِتَوْفيقِكَ يا هادِيَ المُضِّلينَ.",
  },
  {
    content:
      "اَللّهُمَّ ارْزُقْني فيهِ رَحمَةَ الأَيْتامِ وَاِطعامَ الطَّعامِ وَاِفْشاءَ وَصُحْبَةَ الكِرامِ بِطَوْلِكَ يا مَلْجَاَ الأمِلينَ.",
  },
  {
    content:
      "اَللّهُمَّ اجْعَل لي فيهِ نَصيباً مِن رَحمَتِكَ الواسِعَةِ، وَاهْدِني فيهِ لِبَراهينِكَ السّاطِعَةِ، وَخُذْ بِناصِيَتي إلى مَرْضاتِكَ الجامِعَةِ بِمَحَبَّتِكَ يا اَمَلَ المُشتاقينَ.",
  },
  {
    content:
      "اَللّهُمَّ اجْعَلني فيهِ مِنَ المُتَوَكِلينَ عَلَيْكَ، وَاجْعَلني فيهِ مِنَ الفائِزينَ لَدَيْكَ، وَاجعَلني فيه مِنَ المُقَرَّبينَ اِليكَ بِاِحْسانِكَ يا غايَةَ الطّالبينَ.",
  },
  {
    content:
      "اَللّهُمَّ حَبِّبْ اِلَيَّ فيهِ الْإحسانَ، وَكَرِّهْ فيهِ الْفُسُوقَ وَالعِصيانَ وَحَرِّمْ عَلَيَّ فيهِ السَخَطَ وَالنّيرانَ بعَوْنِكَ ياغياثَ المُستَغيثينَ.",
  },
  {
    content:
      "اَللّهُمَّ زَيِّنِّي فيهِ بالسِّترِ وَالْعَفافِ، وَاسْتُرني فيهِ بِلِِِباسِ الْقُنُوعِ وَالكَفافِ، وَاحْمِلني فيهِ عَلَى الْعَدْلِ وَالْإنصافِ، وَآمنِّي فيهِ مِنْ كُلِّ ما اَخافُ بِعِصْمَتِكَ ياعصمَةَ الْخائفينَ.",
  },
  {
    content:
      "اَللّهُمَّ طَهِّرْني فيهِ مِنَ الدَّنسِ وَالْأقْذارِ، وَصَبِّرْني فيهِ عَلى كائِناتِ الْأَقدارِ، وَوَفِّقْني فيهِ لِلتُّقى وَصُحْبَةِ الْأبرارِ بِعَوْنِكَ ياقُرَّةَ عَيْن الْمَساكينِ.",
  },
  {
    content:
      "اَللّهُمَّ لاتُؤاخِذْني فيهِ بالْعَثَراتِ، وَاَقِلْني فيهِ مِنَ الْخَطايا وَالْهَفَواتِ، وَلا تَجْعَلْني فيهِ غَرَضاً لِلْبَلايا وَالأفاتِ بِعزَّتِكَ ياعِزَّ المُسْلمينَ.",
  },
  {
    content:
      "اَللّهُمَّ ارْزُقْني فيهِ طاعةَ الخاشعينَ، وَاشْرَحْ فيهِ صَدري بِانابَةِ المُخْبِتينَ، بِأمانِكَ ياأمانَ الخائفينَ.",
  },
  {
    content:
      "اَللّهُمَّ وَفِّقْني فيهِ لِمُوافَقَةِ الْأبرارِ، وَجَنِّبْني فيهِ مُرافَقَةِ الأشرارِ، وَآوني فيهِ برَحمَتِكَ إلى دارِ القَرارِ بإلهيَّتِكَ يا إله العالمينَ.",
  },
  {
    content:
      "اَللّهُمَّ اهدِني فيهِ لِصالِحِ الأعْمالِ، وَاقضِ لي فيهِ الحوائِجَ وَالآمالِ يا مَنْ لا يَحتاجُ إلى التَّفسيرِ وَالسُّؤالِ، يا عالِماً بِما في صُدُورِ العالمينَ صَلِّ عَلى مُحَمَّدٍ وَآله الطّاهرينَ.",
  },
  {
    content:
      "اَللّهُمَّ نَبِّهني فيهِ لِبَرَكاتِ أسحارِهِ، وَنوِّرْ قَلْبي بِضِياءِ أنوارِهِ، وَخُذْ بِكُلِّ أعْضائِي إلى اتِّباعِ آثارِهِ بِنُورِكَ يا مُنَوِّرَ قُلُوبِ العارفينَ.",
  },
  {
    content:
      "اللّهُمَّ وَفِّر فيهِ حَظّي مِن بَرَكاتِهِ، وَسَهِّلْ سَبيلي إلى خيْراتِهِ، وَلا تَحْرِمْني قَبُولَ حَسَناتِهِ يا هادِياً إلى الحَقِّ المُبينِ.",
  },
  {
    content:
      "اللّهُمَّ افْتَحْ لي فيهِ أبوابَ الجِنان، وَأغلِقْ عَنَّي فيهِ أبوابَ النِّيرانِ، وَوَفِّقْني فيهِ لِتِلاوَةِ القُرانِ يامُنْزِلَ السَّكينَةِ في قُلُوبِ المؤمنين.",
  },
  {
    content:
      "اللّهُمَّ اجْعَلْ لي فيهِ إلى مَرضاتكَ دَليلاً، ولا تَجعَلْ لِلشَّيْطانِ فيهِ عَلَيَّ سَبيلاً، وَاجْعَلِ الجَنَّةَ لي مَنْزِلاً وَمَقيلاً، يا قاضِيَ حَوائج الطالبينَ.",
  },
  {
    content:
      "اللّهُمَّ افْتَحْ لي فيهِ أبوابَ فَضْلِكَ، وَأنزِل عَلَيَّ فيهِ بَرَكاتِكَ، وَوَفِّقْني فيهِ لِمُوجِباتِ مَرضاتِكَ، وَأسْكِنِّي فيهِ بُحْبُوحاتِ جَنّاتَكَ، يا مَجيبَ دَعوَةِ المُضْطَرِّينَ.",
  },
  {
    content:
      "اللّهُمَّ اغْسِلني فيهِ مِنَ الذُّنُوبِ، وَطَهِّرْني فيهِ مِنَ العُيُوبِ، وَامْتَحِنْ قَلبي فيهِ بِتَقْوى القُلُوبِ، يامُقيلَ عَثَراتِ المُذنبين.",
  },
  {
    content:
      "اللّهُمَّ اجْعَلني فيهِ مُحِبّاً لِأوْليائكَ، وَمُعادِياً لِأعْدائِكَ، مُسْتَنّاً بِسُنَّةِ خاتمِ أنبيائكَ، يا عاصمَ قٌلٌوب النَّبيّينَ.",
  },
  {
    content:
      "اللّهُمَّ اجْعَلْ سَعْيي فيهِ مَشكوراً، وَذَنبي فيهِ مَغفُوراً، وَعَمَلي فيهِ مَقبُولاً، وَعَيْببي فيهِ مَستوراً يا أسمَعَ السّامعينَ.",
  },
  {
    content:
      "اللّهُمَّ ارْزُقني فيهِ فَضْلَ لَيلَةِ القَدرِ، وَصَيِّرْ اُمُوري فيهِ مِنَ العُسرِ إلى اليُسرِ، وَاقبَلْ مَعاذيري وَحُطَّ عَنِّي الذَّنب وَالوِزْرَ، يا رَؤُفاً بِعِبادِهِ الصّالحينَ.",
  },
  {
    content:
      "اللّهُمَّ وَفِّرْ حَظِّي فيهِ مِنَ النَّوافِلِ، وَأكْرِمني فيهِ بِإحضارِ المَسائِلِ، وَقَرِّبْ فيهِ وَسيلَتي إليكَ مِنْ بَيْنِ الوَسائِلِ، يا مَن لا يَشْغَلُهُ إلحاحُ المُلِحِّينَ.",
  },
  {
    content:
      "اللّهُمَّ غَشِّني فيهِ بالرَّحْمَةِ، وَارْزُقني فيهِ التَّوفيقَ وَالعِصْمَةَ، وَطَهِّر قَلبي مِن غياهِبِ التُّهمَةِ، يارَحيماً بِعبادِهِ المُؤمنينَ.",
  },
  {
    content:
      "اللّهُمَّ اجْعَلْ صِيامي فيهِ بالشُّكرِ وَالقَبولِ عَلى ما تَرضاهُ وَيَرضاهُ الرَّسولُ مُحكَمَةً فُرُوعُهُ بِالأُصُولِ، بِحَقِّ سَيِّدِنا مُحَمَّدٍ وَآلهِ الطّاهِرينَ، وَالحَمدُ للهِ رَبِّ العالمينَ.",
  },
];

prayItem.innerHTML = allPrays[0].content;

function SetTimeCount() {
  var newDates = "April 13, 2021 00:00:00";
  var currentDate = new Date();
  var newDate = new Date(newDates);

  var currentTime = newDate.getTime() - currentDate.getTime();

  var days = Math.floor(currentTime / (1000 * 60 * 60 * 24));
  var hrs = Math.floor(
    (currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var mins = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((currentTime % (1000 * 60)) / 1000);

  if (days < 0 && hrs < 0 && mins < 0 && secs < 0) {
    timeCountItems.forEach((elem) => elem.remove());
  }
  timeCountItems.forEach((counterItem) => {
    if (counterItem.classList.contains("day_item"))
      counterItem.innerHTML = days;
    if (counterItem.classList.contains("hrs_item"))
      counterItem.innerHTML = hrs < 10 ? "0" + hrs : hrs;
    if (counterItem.classList.contains("mins_item"))
      counterItem.innerHTML = mins < 10 ? "0" + mins : mins;
    if (counterItem.classList.contains("secs_item"))
      counterItem.innerHTML = secs < 10 ? "0" + secs : secs;
  });
}

setInterval(() => {
  SetTimeCount();
}, 1000);

function GetUserDetails(api) {
  fetch(api, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      SetElementsContent(data, ".location_box", ".placeholderLoader_box");
    });
}

GetUserDetails("https://json.geoiplookup.io/");

function SetElementsContent(content, parentBox, placeholders) {
  let placeholderLoaders = document.querySelectorAll(placeholders);
  let elements = document.querySelector(parentBox);

  // Remove placeholder loader when get data from that api.
  placeholderLoaders.forEach((index) => index.remove());

  // Set that data that got from that api https://json.geoiplookup.io/ in their parent element.
  elements.innerHTML += `<div class="item_box">
              <span class="icon">
                <span class="content">${content.country_name} - ${content.country_code}</span>
                <i class="fas fa-map-marker-alt"></i>
              </span>
            </div>
            <div class="item_box">
              <span class="icon">
                <span class="content">${content.timezone_name}</span>
                <i class="far fa-clock"></i>
              </span>
            </div>
            <div class="item_box">
              <span class="icon">
                <span class="content">${content.asn_org}</span>
                <i class="fas fa-wifi"></i>
              </span>
            </div>
            <div class="item_box">
              <span class="icon">
                <span class="content">${content.latitude} - ${content.longitude}</span>
                <i class="far fa-map"></i>
              </span>
            </div>`;
}

var prayCount = 0;
setInterval(() => {
  prayCount++;
  SetPrays(allPrays, prayItem, prayCount);
}, 5000);

function SetPrays(prays, prayContent, perPray) {
  let pray = perPray > prays.length ? (prayCount = 0) : perPray;
  prayContent.innerHTML = prays[pray - 1].content;
}

form.onsubmit = (e) => {
  e.preventDefault();
  window.open(
    encodeURI(
      `./great_msg_.html?name=${e.target["name"].value}`
    ),
    "_self"
  );
  localStorage.setItem("name", e.target["name"].value);
};
