function showPad(padId) {
  var padDisplay = document.getElementById("padDisplay");
  var listItems = document.querySelectorAll(".nav-bar li");

  // Remove the 'active' class from all list items
  listItems.forEach(function (item) {
    item.classList.remove("active");
  });

  switch (padId) {
    case "pad1":
      padDisplay.innerHTML = `
            <h2>कैसे गाऊँ हरि गुण कैसे गाऊँ</h2>
            <p>कैसे गाऊँ हरि गुण कैसे गाऊँ</p>
            <p>श्वास-श्वास नाम में रमे नहीं, कैसे प्रिय को ध्याऊँ</p>
            <p>चहु ओर से माया ने फाँसी ऐसी, अब मन को कैसे समझाऊँ</p>
            <p>सब कुछ करत ढरत थकी री मैं तो,</p>
            <p>आनंदघन बिन आनन्द कहाँ से पाऊँ</p>
            <p>तुम दूर पिया मस्त गगन में, मैं सोच-सोच मरी जाऊँ।</p>
          `;
      break;
    case "pad2":
      padDisplay.innerHTML = `
            <h2>आली री मैं तो रंगी गोविन्द के रंग</h2>
            <p>आली री मैं तो रंगी गोविन्द के रंग</p>
            <p>जो भावे गोविन्द पिया को, सोई रखूँगी ढंग</p>
            <p>रंग रंगीले प्रियतम की हो कर, महक उठा हर अंग</p>
            <p>उन्हें छाड़ि के कबहुँ न जाऊं, रहूँ सजन के संग।</p>
          `;
      break;
    case "pad3":
      padDisplay.innerHTML = `
            <h2>री मैं तो चरण दरस की प्यासी</h2>
            <p>री मैं तो चरण दरस की प्यासी</p>
            <p>कोउ गुणवान, बलवान, धनवान अति, मैं तो गोविन्द की दासी</p>
            <p>रूप निहार श्री कृष्ण पिया का, देख नैनन में हाँसी</p>
            <p>जित ले जावें पिया हमारे, तित ही मैं तो जाॅंसी</p>
            <p>कोउ न शेष लालसा अब मोरी, जब गोविन्द पिया कुॅं पॉंसी</p>
            <p>हे मनमीत बसे रहो मन में मोरे, तुम कहावो मन के वासी।</p>
          `;
      break;
    case "pad4":
      padDisplay.innerHTML = `
            <h2>विपदा देख ब्रज पे तुमने</h2>
            <p>विपदा देख ब्रज पे तुमने</p>
            <p>चीर बढ़न लाग्यौ एक बार में</p>
            <p>नाम लिया जब तुम्हारा</p>
            <p>तापे तुम कृपा घन बरसाए</p>
            <p>हे दीन दयाल गिरधारी!</p>
            <p>तुम सबकी बिगड़ी बनाए केशव माधव हे मुरारी!</p>
            <p>अब कुछ तो सन्मुख बोलो</p>
            <p>शरण पड़ी अब नाथ जी</p>
            <p>अब प्रेम के द्वार तो खोलो</p>
            <p>मैं तेरी हूँ कृष्ण पिया</p>
            <p>मैं तुझमें ही मिल जाऊँ</p>
            <p>ओढ़ चुनरिया तेरे नाम की</p>
            <p>मैं अपना भाग्य मनाऊँ।</p>
          `;
      break;
    case "pad5":
      padDisplay.innerHTML = `
            <h2>लाख जतन करूँ, ध्यान हिय धरूँ</h2>
            <p>लाख जतन करूँ, ध्यान हिय धरूँ</p>
            <p>लेकिन तुम बिन गोविन्द कहाँ सुख पाऊॅं मैं</p>
            <p>सिर पे है बोझ बड़ा मन में कलंक भरा</p>
            <p>तो कैसे तुम्हें मोहन मन में बसाऊॅं मैं</p>
            <p>इत उत डोल-डोल कृष्ण कृष्ण बोल बोल</p>
            <p>इहीं विधि गोविन्द तुम्हें मनाऊँ मैं</p>
            <p>मैं राह निहारत भयी बावरिया</p>
            <p>अब आओ साबरिया तुम्हें बुलाऊँ मैं।</p>
          `;
      break;
    case "pad6":
      padDisplay.innerHTML = `
            <h2>आओ री सखी सब गोविन्द को निहारेंगी</h2>
            <p>आओ री सखी सब गोविन्द को निहारेंगी</p>
            <p>प्रेम बांसुरी बजाके गोविन्द ने बुलाया है</p>
            <p>छोड़ ये समाज काज चलो हरि के संग आज</p>
            <p>देखें तो सही पिया के मन में क्या आया है</p>
            <p>सिर मोर पंख लागे माला गले में विराजे</p>
            <p>देखत ही यह रूप मन भाया है</p>
            <p>सुंदर गोपाल सुंदर इनकी यह चाल ढाल</p>
            <p>याके अधर रसाल क्या सुभाग मैने पाया है</p>
            <p>प्रेम में मैं खोई गोविन्द दीवानी मैं तेरी होई</p>
            <p>बंशी बजाके तुमने ह्रदय यह चुराया है।</p>
          `;
      break;
    case "pad7":
      padDisplay.innerHTML = `
            <h2>श्री राधा दयालु कृपा निधान</h2>
            <p>श्री राधा दयालु कृपा निधान</p>
            <p>लाडली श्यामा किशोरी हो</p>
            <p>ठकुरानी सब जग की तुम हो</p>
            <p>और प्राणों से प्रिय मोरी हो</p>
            <p>वृन्दावन की ब्रजरानी हो</p>
            <p>भक्तों की हृदय स्वामिनी हो</p>
            <p>अति पावन मृदु स्वभाव तुम्हारा</p>
            <p>हे प्रेमपूर्णा अति भोरी हो</p>
            <p>मैं दरस अभिलाषी राधे तोरा</p>
            <p>अब न तनिक भी देरी हो।</p>
          `;
      break;
    case "pad8":
      padDisplay.innerHTML = `
            <h2>सखी री! मैं तो गोविन्द की अब होइ</h2>
            <p>सखी री! मैं तो गोविन्द की अब होइ</p>
            <p>वश नहिं मेरो काहु पे ही, गोविन्द को सब देइ</p>
            <p>मैं तो राखूँ गोविन्द पे भरोसा, कहा करै है कोइ</p>
            <p>जपत-जपत हरि नाम की धुन में, मैं गोविन्द में खोइ</p>
            <p>भजन करूँ कुछ सुध न पड़े री, कब जागी कब सोइ</p>
            <p>दरस करि अँखिया भाग मनावें, बिन देखत ही रोइ।</p>
          `;
      break;
    case "pad9":
      padDisplay.innerHTML = `
            <h2>ऐ हो मुरारी कुछ तुम भी तो मन भावन कहो</h2>
            <p>ऐ हो मुरारी कुछ तुम भी तो मन भावन कहो</p>
            <p>ऐसे नाहिं दूर रहो कृपा से हमें पावन करो</p>
            <p>जनमों से बिछड़े अब धीरज रखा न जाए,</p>
            <p>निज दीन दुखियारी पर उपकार साजन करो</p>
            <p>यूं बीच भंवर में नाहिं छोड़ो तुम श्याम घन</p>
            <p>खोलो लोचन विशाल न मौन यूँ धारन करो।</p>
          `;
      break;
    case "pad10":
      padDisplay.innerHTML = `
            <h2>बिन हरि मोरे प्राण जले री</h2>
            <p>बिन हरि मोरे प्राण जले री</p>
            <p>व्याकुलता, नीरसता, माया ने घेरी</p>
            <p>कोटिक जतन से हु विपदा न टले री</p>
            <p>रंगो में दिखे कोई रंग नहीं, मन में भी कोई उमंग नहीं</p>
            <p>पुष्पों में न कोई सुगन्ध ही आवे</p>
            <p>उन बिन श्वास थम-थम के चले री</p>
            <p>बिन पिया के यह प्राण निष्प्राण भले री</p>
            <p>कैसा होवे अन्तर्मन का सुख मैं नहीं जानूँ</p>
            <p>सुख निधान बिना कहीं सुख न मिले री।</p>
          `;
      break;
    // Add more cases as needed
    default:
      padDisplay.innerHTML = `
            <h2>Selected Pad</h2>
            <p>Select a pad from the list to display here.</p>
          `;
  }

  // Add the 'active' class to the selected list item
  var selectedListItem = document.querySelector(
    `.nav-bar li[data-pad="${padId}"]`
  );
  if (selectedListItem) {
    selectedListItem.classList.add("active");
  }
}

function showBhajan() {
  // Hide all bhajans and the default message
  var bhajans = document.getElementsByClassName("bhajan");
  for (var i = 0; i < bhajans.length; i++) {
    bhajans[i].style.display = "none";
  }

  // Get the selected bhajan ID
  var selectedBhajan = document.getElementById("bhajanDropdown").value;

  // If a valid bhajan is selected, show it; otherwise, show the default message
  if (selectedBhajan !== "default") {
    document.getElementById(selectedBhajan).style.display = "block";
    document.getElementById("defaultMessage").style.display = "none";
  } else {
    document.getElementById("defaultMessage").style.display = "block";
  }
}
