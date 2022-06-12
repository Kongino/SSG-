package com.ssg.shopping.service;

import java.util.List;

import com.ssg.shopping.dto.Goods;


//dao의 기능을 구현하기 위한 service
//현재 단계에서는 추가 기능은 없으며 dao를 호출
public interface GoodsService {
	public List<Goods> searchAll();
	public int insertBasket(int no);
	public List<Goods> searchBasket();
	public int deleteBasket(int no);
	
	public int countSelect();
	public int priceSelect();
	public int priceAll();
	
	public int selectOn(int no);
	public int selectOff(int no);
	
	public int changeAmount(int no,int val);
	public int purchase();
	public int deleteSelect();
	public int purchaseAll();
	public int deleteAll();
}
