$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/koalapalace.feature");
formatter.feature({
  "name": "Koala Palace",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@koalapalace"
    }
  ]
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC12_kullanici iduser secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest1"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC13_kullanici idhotelroom secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest2"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC14_kullanici price secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest3"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC15_kullanici datestart secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest4"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC16_kullanici dateend secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest5"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC17_kullanici adultamaount secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest6"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC18_kullanici childrenamount secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest7"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC19_kullanici namesurname secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest8"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC20_kullanici phone secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest9"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC21_kullanici email secmeden room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationcreate"
    },
    {
      "name": "@hotelreservationnegativetests"
    },
    {
      "name": "@hotelreservationnegativetest10"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});