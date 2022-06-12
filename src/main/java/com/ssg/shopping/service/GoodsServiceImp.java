package com.ssg.shopping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssg.shopping.dao.GoodsDao;
import com.ssg.shopping.dto.Goods;

//dao의 기능을 구현하기 위한 service
//현재 단계에서는 추가 기능은 없으며 dao를 호출
@Service
public class GoodsServiceImp implements GoodsService {

	@Autowired
	private GoodsDao dao;
	
	@Transactional
	public List<Goods> searchAll() {
		return dao.searchAll();
	}

	public int insertBasket(int no) {
		return dao.insertBasket(no);
	}
	public List<Goods> searchBasket(){
		return dao.searchBasket();
	}
	
	public int deleteBasket(int no) {
		return dao.deleteBasket(no);
	}
	
	public int countSelect() {
		return dao.countSelect();
	}
	
	public int priceSelect() {
		return dao.priceSelect();
	}
	public int priceAll() {
		return dao.priceAll();
	}
	
	public int selectOn(int no) {
		return dao.selectOn(no);
	}
	public int selectOff(int no) {
		return dao.selectOff(no);
	}
	
	public int changeAmount(int no,int val) {
		return dao.changeAmount(no, val);
	}
	public int purchase() {
		return dao.purchase();
	}
	public int deleteSelect() {
		return dao.deleteSelect();
	}
	public int purchaseAll() {
		return dao.purchaseAll();
	}
	public int deleteAll() {
		return dao.deleteAll();
	}


}
