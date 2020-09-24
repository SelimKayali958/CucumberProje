package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.EbayPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class EbayStepDefinitions {

    EbayPage ebayPage = new EbayPage();

    @Given("kullanici ebay gider")
    public void kullanici_ebay_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("ebayUrl"));
    }

    @Given("kullanici {string} arama yapar")
    public void kullanici_arama_yapar(String string) {
       ebayPage.ebayAramaKutusu.sendKeys(string+ Keys.ENTER);
    }

    @Then("kullanici ebay arama sonuclarini  yazdirir")
    public void kullanici_ebay_arama_sonuclarini_yazdirir() {
        System.out.println(ebayPage.ebaySonuc.getText());
    }


}
