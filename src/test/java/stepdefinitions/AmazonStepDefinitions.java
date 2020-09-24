package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;
import pages.AmazonPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class AmazonStepDefinitions {

    AmazonPage amazonPage = new AmazonPage();

    @Given("kullanici amazon sayfasina gider")
    public void kullanici_amazon_sayfasina_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("amazonUrl"));
    }

    @Given("kullanici headphones aramasi yapar")
    public void kullanici_headphones_aramasi_yapar() {
      amazonPage.amazonAramaKutusu.sendKeys(ConfigurationReader.getProperty("amazonText")+ Keys.ENTER);
    }

    @Given("kullanici cikan sonucu yazdirir")
    public void kullanici_cikan_sonucu_yazdirir() {
        System.out.println(amazonPage.amazonSonuc.getText());
    }

    @Then("kullanici driveri kapatir")
    public void kullanici_driveri_kapatir() {
      Driver.closeDriver();
    }

    @Given("kullanici camera aramasi yapar")
    public void kullanici_camera_aramasi_yapar() {
        amazonPage.amazonAramaKutusu.sendKeys("camera" + Keys.ENTER);
    }

    @Given("kullanici {string} aramasi yapar")
    public void kullanici_aramasi_yapar(String string) {
       amazonPage.amazonAramaKutusu.sendKeys(string+Keys.ENTER);
    }


    @Given("kullanici {string} sayfasina gider")
    public void kullanici_sayfasina_gider(String string) {
        Driver.getDriver().get(string);
    }

    @Given("kullanici dropdownda {string} secer")
    public void kullanici_dropdownda_secer(String string) {
        Select select = new Select(amazonPage.amazonDropdown);
        select.selectByVisibleText(string);
    }


}
