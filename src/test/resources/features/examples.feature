@teknolojikarama
Feature: Amazon Birden Fazla Arama
  Scenario Outline: TC05_kullanici amazonda urun arar
    Given kullanici amazon sayfasina gider
    And kullanici "<urunler>" aramasi yapar
    And kullanici cikan sonucu yazdirir

    Examples: Urun Isimleri
    |urunler|
    |headphones|
    |camera    |
    |drone     |
    |pencil    |
    |tv        |