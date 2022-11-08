package test.com.hoteis.service;

import com.RedeHoteis.dao.ConfiguraçaoJDBC;
import com.RedeHoteis.dao.impl.HotelDaoImpl;
import com.RedeHoteis.model.Hotel;
import com.RedeHoteis.service.HotelService;
import org.apache.log4j.Logger;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class HotelServiceTest {

private HotelService hotelService =new HotelService(new HotelDaoImpl(new ConfiguraçaoJDBC()));

@Test
    public void salvarHoteisTest(){
    Hotel hotel1 = new Hotel("Ibiz","A",2,"Salvador","BA",true);


    assertTrue(hotel1.isE5Strelas()==true);
    assertEquals(hotel1.getNomeFilial(),"Ibiz");

}
@Test
    public void buscarHoteis(){
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

        List<Hotel> hoteis = hotelService.bucasTodos();

        assertEquals(5,hoteis.size());

    }

}