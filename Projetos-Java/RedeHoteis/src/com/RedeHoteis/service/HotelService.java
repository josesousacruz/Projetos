package com.RedeHoteis.service;

import com.RedeHoteis.dao.IDao;
import com.RedeHoteis.model.Hotel;


import java.util.List;

public class HotelService {


    private IDao<Hotel> hotelIDao;


    public HotelService(IDao<Hotel> hotelIDao) {
        this.hotelIDao = hotelIDao;
    }

    public Hotel salvar(Hotel hotel){

        return hotelIDao.salvar(hotel);
    }

    public List<Hotel> bucasTodos(){

        return hotelIDao.buscarTodos();
    }
}
