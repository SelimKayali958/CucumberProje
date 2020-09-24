@urunarama
Feature: Amazon Arama

  Background: Oncesinde Calisacak Method (before class)
    Given kullanici amazon sayfasina gider

  @amazon
  Scenario: TC02_ kullanici amazonda arama yapar

      And kullanici headphones aramasi yapar
      And kullanici cikan sonucu yazdirir
      Then kullanici driveri kapatir

  @amazoncamera
  Scenario: TC03_kullanici amazonda arama yapar

      And kullanici camera aramasi yapar
      And kullanici cikan sonucu yazdirir
      Then kullanici driveri kapatir