@birdenfazlaexample @amazon
Feature: Amazonda Urun Arama
  Scenario Outline: TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar
    Given kullanici "http://amazon.com" sayfasina gider
    And kullanici dropdownda "<kategori>" secer
    And kullanici "<urunismi>" aramasi yapar
    Then kullanici cikan sonucu yazdirir

    Examples: Test Verileri

    |kategori     |urunismi    |
    |Automotive   |pkone holder|
    |Baby         |stroller    |
    |Books        |Miserables  |