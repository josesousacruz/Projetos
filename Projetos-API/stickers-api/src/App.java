import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.List;
import java.util.Map;

public class App {

    public static void main(String[] args) throws Exception {


        // Fazer a conexão HTTPS.

        // String url = "https://api.mocki.io/v2/549a5d8b";
        String url = "https://imdb-api.com/en/API/Top250Movies/k_th2uii2p";
        
        URI endereco = URI.create(url);

        var client = HttpClient.newHttpClient();

        var request = HttpRequest.newBuilder(endereco).GET().build();

        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());

        String body = response.body();

        System.out.println(body);

        var parser = new JsonParse();
        List<Map<String,String>> listaDeFIlmes = parser.parse(body);


        // Extrair os principais dados. (Titulo, poster, classificação)



        // Exibir e manipular os dados


        
    }   
}
