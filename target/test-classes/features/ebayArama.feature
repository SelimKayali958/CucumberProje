Feature: Ebay Arama
  @ebayarama
  Scenario Outline: TC06 kullanici ebayde uruler arar
    Given kullanici ebay gider
    And kullanici "<ebay urunler>" arama yapar
    Then kullanici ebay arama sonuclarini  yazdirir

    Examples: urunler

    |ebay urunler|
    |araba       |
    |bebek arabasi|
    |bisiklet     |