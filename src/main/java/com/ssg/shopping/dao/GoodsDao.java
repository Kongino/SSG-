package com.ssg.shopping.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssg.shopping.dto.Goods;

@Mapper
public interface GoodsDao {
	
	//Goods.xml과 연결되어 sql 쿼리문을 실행하는 클래스
	public List<Goods> searchAll();
	public int insertBasket(int no);
	public List<Goods> searchBasket();
	public int deleteBasket(int no);
	
	public int countSelect();
	public int priceSelect();
	public int priceAll();
	
	public int selectOn(int no);
	public int selectOff(int no);
	public int changeAmount(@Param("no") int no, @Param("val") int val);
	
	public int purchase();
	public int deleteSelect();
	
	public int purchaseAll();
	public int deleteAll();
	
}
