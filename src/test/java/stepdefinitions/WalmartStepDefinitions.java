package stepdefinitions;

import io.cucumber.java.en.Given;
import org.openqa.selenium.Keys;
import pages.WalmartPage;
import utilities.Driver;

public class WalmartStepDefinitions {

    WalmartPage walmartPage = new WalmartPage();

    @Given("kullanici walmart {string} sayfasina gider")
    public void kullanici_walmart_sayfasina_gider(String string) {
        Driver.getDriver().get(string);
    }

    @Given("kulanici walmart aramakutusunda {string} arar")
    public void kulanici_walmart_aramakutusunda_arar(String string) {
        walmartPage.walmartAramaKutusu.sendKeys(string+ Keys.ENTER);
    }

    @Given("kullanici walmartda cikan sonucu yazdirir")
    public void kullanici_walmartda_cikan_sonucu_yazdirir() {
        System.out.println(walmartPage.walmartSonuc.getText());
    }



}
