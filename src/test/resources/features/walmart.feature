@walmart
Feature: Walmartda arama
  Scenario Outline: TC_07 kullanici walmartta aramalar yapar
    Given kullanici walmart "https://www.walmart.com" sayfasina gider
    And kulanici walmart aramakutusunda "<urunler>" arar
    And kullanici walmartda cikan sonucu yazdirir

    Examples: Aranacak urunler

      |urunler|
      |calculator |
      |watch   |
      |flower  |
