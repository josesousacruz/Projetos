import com.RedeHoteis.dao.ConfiguraçaoJDBC;
import com.RedeHoteis.dao.impl.HotelDaoImpl;
import com.RedeHoteis.model.Hotel;
import com.RedeHoteis.service.HotelService;

public class Main {
    public static void main(String[] args) {

        HotelService hotelService = new HotelService(new HotelDaoImpl(new ConfiguraçaoJDBC()));

        Hotel hotel1 = new Hotel("Ibiz","A",2,"Salvador","BA",true);
        Hotel hotel2 = new Hotel("Novo","B",3,"Salvador","BA",true);
        Hotel hotel3 = new Hotel("Velho","C",4,"Salvador","BA",false);
        Hotel hotel4 = new Hotel("Bom","D",5,"Salvador","BA",true);
        Hotel hotel5 = new Hotel("Ruim","E",6,"Salvador","BA",false);


        hotelService.salvar(hotel1);
        hotelService.salvar(hotel2);
        hotelService.salvar(hotel3);
        hotelService.salvar(hotel4);
        hotelService.salvar(hotel5);

        hotelService.bucasTodos();



    }
}
