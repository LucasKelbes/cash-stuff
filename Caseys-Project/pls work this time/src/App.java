import org.htmlunit.WebClient;
import org.htmlunit.html.HtmlPage;

public class App {
    public static void main(String[] args) throws Exception {
        WebClient client = new WebClient();
        client.getOptions().setJavaScriptEnabled(false);
        client.getOptions().setCssEnabled(false);

        String URL = "https://pepperoni.caseys.com/";

        HtmlPage page = client.getPage(URL);
    }
}
